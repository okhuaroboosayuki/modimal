import { ProgressLink } from "../ProgressLinks";

function EmptyDetails({ message, buttonText, url }) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <p>{message}</p>

      <ProgressLink
        to={url}
        className={
          "bg-primary-600 border-primary hover:text-primary-600 transition-500-in-out border p-3 text-white hover:bg-white"
        }
      >
        {buttonText}
      </ProgressLink>
    </div>
  );
}

export default EmptyDetails;
