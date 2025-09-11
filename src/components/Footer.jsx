import {
  RiArrowRightLine,
  RiCopyrightLine,
  RiFacebookCircleFill,
  RiInstagramLine,
  RiTiktokFill,
} from "react-icons/ri";
import { GrPinterest } from "react-icons/gr";
import Input from "./Input";
import ChatBoxIcon from "./icons/ChatBoxIcon";

function Footer() {
  return (
    <footer className="bg-gray40 flex w-full flex-col items-center justify-center gap-6 px-5 py-12 text-white sm:gap-12 md:px-14 lg:px-[6.75rem]">
      <section className="flex w-full flex-col items-start justify-between gap-6 sm:gap-12 lg:flex-row lg:gap-20">
        <section
          aria-labelledby="newsletter-form-heading"
          className="flex w-full flex-col items-start gap-6"
        >
          <h5
            id="newsletter-form-heading"
            className="text-[1.25rem] font-medium capitalize"
          >
            Join our club, get 15% off for your Birthday
          </h5>

          <form className="flex max-w-[31rem] flex-col items-start gap-[18px]">
            <div className="border-primary-50 focus-within:border-primary-900 flex h-10 w-full gap-1 border px-4 py-[.5625rem]">
              <Input
                type={"email"}
                name={"email"}
                placeholder={"Enter Your Email Address"}
                width={"w-full"}
              />

              <button className="cursor-pointer">
                <RiArrowRightLine />
              </button>
            </div>

            <label className="flex items-center gap-2 text-sm">
              <Input type={"checkbox"} name={"subscribe"} />
              <span>
                By submittng your email, you agree to receive advertising emails
                from Modimal.
              </span>
            </label>
          </form>
        </section>

        <nav className="grid grid-cols-2 items-start justify-center gap-[2.25rem] sm:w-full sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
          <section className="flex flex-col items-start justify-center gap-1 sm:gap-6">
            <h5 className="text-lg font-medium sm:text-[1.5rem]">
              About Modimal
            </h5>

            <ul className="flex flex-col gap-2 text-base sm:text-lg">
              <li>Collection</li>
              <li>Sustainability</li>
              <li>Support System</li>
              <li>Terms & Condition</li>
              <li>Copyright Notice</li>
            </ul>
          </section>

          <section className="flex flex-col items-start justify-center gap-1 sm:gap-6">
            <h5 className="text-lg font-medium sm:text-[1.5rem]">
              Help & Support
            </h5>

            <ul className="flex flex-col gap-2 text-base sm:text-lg">
              <li>Orders & Shipping</li>
              <li>Returns & Refunds</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </section>

          <section className="flex flex-col items-start justify-center gap-1 sm:gap-6">
            <h5 className="text-lg font-medium sm:text-[1.5rem]">Join Up</h5>

            <ul className="flex flex-col gap-2 text-base sm:text-lg">
              <li>Modimal Club</li>
              <li>Careers</li>
              <li>Visit Us</li>
            </ul>
          </section>
        </nav>
      </section>

      <section className="flex w-full items-start justify-between">
        <div
          className="flex flex-col items-start gap-[43px]"
          aria-label="Social Links and Copyright"
        >
          <ul className="flex items-center justify-center gap-4">
            <li className="icon">
              <RiInstagramLine className="cursor-pointer" />
            </li>
            <li className="icon">
              <RiFacebookCircleFill className="cursor-pointer" />
            </li>
            <li className="icon">
              <GrPinterest className="cursor-pointer" />
            </li>
            <li className="icon">
              <RiTiktokFill className="cursor-pointer" />
            </li>
          </ul>

          <p className="flex items-center gap-2 text-sm">
            <span className="icon">
              <RiCopyrightLine />
            </span>

            <span>
              {new Date().getFullYear()} Modimal. All Rights Reserved.
            </span>
          </p>
        </div>

        <div>
          <ChatBoxIcon width={56} height={48} className={"cursor-pointer"} />
        </div>
      </section>
    </footer>
  );
}

export default Footer;
