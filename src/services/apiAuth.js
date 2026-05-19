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
      emailRedirectTo: "https://modimal-store.vercel.app/login",
      data: {
        fullName,
        avatar: "",
        phone: "",
        address: "",
        apartment: "",
        state: "",
        country: "",
        company: "",
        postalCode: "",
        subscribeToNewsletter: false,
        userRole: "customer",
      },
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

// Best practices:

// Only store what you need initially; you can update metadata later
// Use null or empty strings for optional fields instead of omitting them
// Avoid storing sensitive data (passwords, payment info)—Supabase handles these separately
// Keep metadata lean; move large data to your database tables

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

export async function updateCurrentUserData({ password, shippingDetails }) {
  let updateData = {};

  if (password) updateData = { password };

  if (shippingDetails) {
    updateData.data = {
      subscribeToNewsletter: shippingDetails.subscribeToNewsletter,
      address: shippingDetails.address.trim(),
      apartment: shippingDetails.apartment.trim(),
      country: shippingDetails.country,
      state: shippingDetails.state,
      postalCode: shippingDetails.postalCode.trim(),
      fullName: shippingDetails.fullName.trim(),
      company: shippingDetails.company.trim(),
      phone: shippingDetails.phone.trim(),
    };
  }

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function sendResetPasswordEmail({ email }) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "https://modimal-store.vercel.app/update-password",
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
}
