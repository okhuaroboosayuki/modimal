import { RiErrorWarningFill } from "react-icons/ri";
import Header from "../components/header/Header";
import SEO from "../components/SEO";

function CheckoutError() {
  return (
    <>
      <SEO
        title={"Checkout Error - Modimal"}
        description="Unfortunately, your order could not be completed. Please try again or contact our support team for assistance."
        url={"/checkout/error"}
      />

      <section className="w-full">
        <Header />

        <section className="flex flex-col items-center justify-center gap-8 px-5 py-10 text-center text-pretty capitalize sm:px-20 sm:py-40 md:px-40 lg:px-52 lg:py-20">
          <div className="flex flex-col items-center gap-6">
            <span className="big-icon">
              <RiErrorWarningFill fill="#c30000" />
            </span>

            <h2 className="text-error text-3xl font-semibold sm:text-[40px]">
              sorry, payment failed
            </h2>
          </div>

          <div className="flex flex-col items-center gap-4">
            <p className="sm:ext-[20px] text-lg">
              unfortunately, your order can not be completed. please try again.
            </p>

            <p className="text-gray40">
              Contact{" "}
              <a
                href="mailto:hello@modimal.com"
                className="font-medium lowercase!"
              >
                hello@modimal.com
              </a>{" "}
              for further assistance
            </p>
          </div>
        </section>
      </section>
    </>
  );
}

export default CheckoutError;
