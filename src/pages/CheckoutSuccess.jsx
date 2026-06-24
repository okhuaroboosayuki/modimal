import { Navigate } from "react-router-dom";
import { MdOutlineCheckCircle } from "react-icons/md";
import { useSelector } from "react-redux";
import Header from "./../components/header/Header";
import SEO from "../components/SEO";

function CheckoutSuccess() {
  const { orderNumber } = useSelector((store) => store.checkoutReducer);

  if (!orderNumber) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <SEO
        title={"Checkout Success"}
        description="Your payment was successful! Thank you for choosing Modimal. Your order is being processed and will be shipped to you soon."
        url={"/checkout/success"}
      />

      <section className="w-full">
        <Header />

        <section className="flex flex-col items-center justify-center gap-8 px-5 py-10 text-center text-pretty capitalize sm:px-20 sm:py-40 md:px-40 lg:px-52 lg:py-20">
          <div className="flex flex-col items-center gap-6">
            <span className="big-icon">
              <MdOutlineCheckCircle fill="#00966d" />
            </span>

            <h2 className="text-success text-3xl font-semibold sm:text-[40px]">
              payment successful
            </h2>
          </div>

          <div className="flex flex-col items-center gap-4">
            <p className="sm:ext-[20px] text-lg">
              thank you for choosing modimal, your order{" "}
              <strong className="bg-success-bg text-success">
                #{orderNumber}
              </strong>{" "}
              will be generated based on your delivery request
            </p>

            <p className="text-gray40">
              Send your enquiries to{" "}
              <a
                href="mailto:hello@modimal.com"
                className="font-medium lowercase!"
              >
                hello@modimal.com
              </a>
            </p>
          </div>
        </section>
      </section>
    </>
  );
}

export default CheckoutSuccess;
