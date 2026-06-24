import supabase from "./supabase";

export async function verifyPayment({ reference }) {
  const { data, error } = await supabase.functions.invoke("verify-payment", {
    body: { reference },
  });

  if (error) throw new Error(error.message);
  return data;
}
