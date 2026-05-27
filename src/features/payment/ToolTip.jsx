import { HiOutlineInformationCircle } from "react-icons/hi2";
import { useState } from "react";

function ToolTip() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative flex cursor-pointer items-center gap-0.5"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <span className="icon">
        <HiOutlineInformationCircle />
      </span>
      <span className="text-primary text-sm underline">what is this?</span>

      {showTooltip && (
        <div className="absolute bottom-full -left-50 mb-2 w-64 rounded bg-white p-2 text-xs text-black shadow-xl">
          The security code is a 3 or 4 digit number located on the back of your
          card. It provides an additional layer of security for online
          transactions.
        </div>
      )}
    </div>
  );
}

export default ToolTip;
