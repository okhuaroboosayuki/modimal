import AppleIcon from "../../assets/icons/AppleIcon";
import FacebookIcon from "../../assets/icons/FacebookIcon";
import GoogleIcon from "../../assets/icons/GoogleIcon";

function SocialMediaAuthIcons() {
  return (
    <>
      <span>or</span>

      <div className="mt-2 flex items-center gap-[17px]">
        <span className="cursor-pointer">
          <AppleIcon width={35} height={35} />
        </span>
        <span className="cursor-pointer">
          <GoogleIcon width={35} height={35} />
        </span>
        <span className="cursor-pointer">
          <FacebookIcon width={35} height={35} />
        </span>
      </div>
    </>
  );
}

export default SocialMediaAuthIcons;
