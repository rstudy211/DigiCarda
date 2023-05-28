import React from "react";
import QrCodeImage from "../images/qrcode.png";

function QrCodeWithUPI() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500 text-black py-8">
      <div className="bg-white rounded px-5 py-4 flex flex-col items-center">
        <div className="text-xl text-center md:text-2xl font-medium mb-4">
          Scan the QR code or use UPI ID:
        </div>
        <img
          className="w-52 h-52 md:w-64 md:h-64"
          src={QrCodeImage}
          alt="QR Code"
        />
        <p className="mt-4 text-lg font-bold text-black">
          etaxserviceskota@ybl
        </p>
      </div>
    </div>
  );
}

export default QrCodeWithUPI;
