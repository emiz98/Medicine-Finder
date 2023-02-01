import React from "react";

const Footer = ({ setLoginModal }) => {
  return (
    <div
      className="bg-blue-500 w-full px-10 md:px-40
    py-3 flex items-center justify-between fixed bottom-0"
    >
      <div className="flex items-center gap-x-2">
        <img
          className="hidden sm:inline-flex h-14"
          src="/assets/pharmreg.png"
          alt="pharma"
        />
        <div className="flex flex-col items-start text-white">
          <h4 className="font-medium">Are you a pharmacy agent?</h4>
          <p className="text-xs w-4/5 text-gray-300">
            Pharmacy agents can now register to the pplication to gain more
            exposure.
          </p>
        </div>
      </div>
      <button
        onClick={() => setLoginModal(true)}
        className="btnPrimarySmall whitespace-nowrap"
      >
        Get Started
      </button>
    </div>
  );
};

export default Footer;
