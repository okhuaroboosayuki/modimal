import supabase from "./supabase";

export async function signUpWithEmailAndPassword({
  email,
  password,
  fullName,
}) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: "http://localhost:5173/login",
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

// data other keys
// data: {
//   fullName,
//   avatar: "",
//   phone: "",                    // for order notifications
//   dateOfBirth: "",              // for personalized offers
//   address: "",                  // for shipping
//   city: "",
//   state: "",
//   country: "",
//   zipCode: "",
//   preferredLanguage: "en",      // locale preference
//   timezone: "",                 // for timely notifications
//   newsletter: true,             // subscription preference
//   preferences: {                // personalized shopping
//     fabricPreferences: [],
//     colorPreferences: [],
//     sizePreferences: [],
//   },
//   role: "customer",             // user type (customer, admin)
//   bio: "",                       // user profile bio
// }

// Best practices:

// Only store what you need initially—you can update metadata later
// Use null or empty strings for optional fields instead of omitting them
// Avoid storing sensitive data (passwords, payment info)—Supabase handles these separately
// Keep metadata lean; move large data to your database tables
// For Modimal specifically, start with essential fields like phone, address, and preferences based on your checkout/profile flows.

export async function signInWithEmailAndPassword({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    throw new Error(error.message);
  }

  return user;
}
