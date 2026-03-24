import React from "react";
import { ProgressLink } from "./ProgressLinks";
import SocialMediaAuthIcons from "./auth/SocialMediaAuthIcons";

function AuthFooterSection() {
  return (
    <section className="mt-8 flex flex-col items-center gap-4 px-5 capitalize lg:px-16 xl:px-20 2xl:px-32">
      <SocialMediaAuthIcons />

      <div className="[&>a]:text-primary [&>a]:hover:text-primary-900 mt-2 text-center text-sm capitalize [&>a]:hover:underline">
        new to modimal?{" "}
        <ProgressLink to={"/create-account"}>create an account</ProgressLink>
      </div>
    </section>
  );
}

export default AuthFooterSection;
