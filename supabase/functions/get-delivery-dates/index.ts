import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

/**
 * Checks if a given date falls on a weekend.
 * Think of it like asking: "Is today Saturday or Sunday?"
 */
function isWeekend(date: Date): boolean {
  const day = date.getDay(); // 0 = Sunday, 6 = Saturday
  return day === 0 || day === 6;
}

/**
 * Fetches public holidays for a given country and year from Nager.Date API.
 * Returns a Set of date strings like "2025-01-01" for fast lookup.
 */
async function getPublicHolidays(countryCode: string, year: number): Promise<Set<string>> {
  const res = await fetch(
    `https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`
  );

  // If the country is not supported by Nager.Date, return an empty set
  // so we still return dates (just without holiday filtering)
  if (!res.ok) return new Set();

  const holidays = await res.json();
  return new Set(holidays.map((h: { date: string }) => h.date));
}

/**
 * Formats a Date object to "YYYY-MM-DD" string.
 * e.g. new Date() → "2025-06-01"
 */
function formatDate(date: Date): string {
  return date.toISOString().split("T")[0];
}

/**
 * Core logic: get the next N business days from today,
 * skipping weekends and public holidays.
 *
 * Think of it like walking forward on a calendar, 
 * skipping any day that is a weekend or a red-letter holiday day.
 */
async function getNextBusinessDays(countryCode: string, count: number): Promise<string[]> {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const currentYear = today.getFullYear();
  const nextYear = currentYear + 1;

  // Fetch holidays for this year AND next year to handle year-end edge cases
  const [thisYearHolidays, nextYearHolidays] = await Promise.all([
    getPublicHolidays(countryCode, currentYear),
    getPublicHolidays(countryCode, nextYear),
  ]);

  const allHolidays = new Set([...thisYearHolidays, ...nextYearHolidays]);

  const businessDays: string[] = [];
  const cursor = new Date(today);

  while (businessDays.length < count) {
    cursor.setDate(cursor.getDate() + 1); // move to next day

    const dateStr = formatDate(cursor);
    const isHoliday = allHolidays.has(dateStr);

    if (!isWeekend(cursor) && !isHoliday) {
      businessDays.push(dateStr);
    }
  }

  return businessDays;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { countryCode } = await req.json();

    if (!countryCode) {
      return new Response(
        JSON.stringify({ error: "countryCode is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const dates = await getNextBusinessDays(countryCode, 4);

    return new Response(
      JSON.stringify({ dates }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Something went wrong", details: err.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});