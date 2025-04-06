import React from "react";
import QrCodeImage from "../images/qrcode.png";
import PhonePeLogo from "../images/phonepe.png";
import GooglePayLogo from "../images/gpay.png";
import PaytmLogo from "../images/paytm.png";

function QrCodeWithUPI() {
  // UPI Payment Details
  const upiId = "etaxserviceskota@ybl";
  const payeeName = "Etax Services";
  const transactionNote = "Payment for services";

  // Universal UPI Payment Link
  const upiPaymentLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=&cu=INR&tn=${encodeURIComponent(transactionNote)}`;

  // App-specific deep links
  const upiApps = [
    { 
      name: "PhonePe", 
      scheme: `phonepe://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}`,
      logo: PhonePeLogo
    },
    { 
      name: "Google Pay", 
      scheme: `tez://upi/pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}`,
      logo: GooglePayLogo
    },
    { 
      name: "Paytm", 
      scheme: `paytmmp://upi/pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}`,
      logo: PaytmLogo
    }
  ];

  const openUPIApp = (appScheme) => {
    window.location.href = appScheme;
    setTimeout(() => {
      window.location.href = upiPaymentLink;
    }, 300);
  };

  const copyUPIId = () => {
    navigator.clipboard.writeText(upiId);
    alert("UPI ID copied to clipboard!");
  };

  return (
    <div className="flex flex-col items-center bg-[#f0fdf4] py-8 px-4"> {/* Light green background */}
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md border border-emerald-200">
        <h2 className="text-2xl font-bold text-center text-emerald-800 mb-6">
          Pay via UPI
        </h2>
        
        <div className="flex flex-col items-center mb-6">
          <div className="p-1 bg-white rounded-md mb-4">
            <img 
              src={QrCodeImage} 
              alt="UPI QR Code" 
              className="w-48 h-48 object-contain"
            />
          </div>

          <div className="flex items-center w-full">
            <div className="flex-1 bg-emerald-50 text-emerald-800 font-mono px-4 py-3 rounded-lg mr-2 truncate border border-emerald-200">
              {upiId}
            </div>
            <button
              onClick={copyUPIId}
              className="bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-lg transition-colors"
              aria-label="Copy UPI ID"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"/>
                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-center font-medium text-emerald-700 mb-3">
            Open with:
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {upiApps.map((app) => (
              <button
                key={app.name}
                onClick={() => openUPIApp(app.scheme)}
                className="flex flex-col items-center justify-center bg-white hover:bg-emerald-50 p-2 rounded-lg transition-all border border-emerald-200"
              >
                <img 
                  src={app.logo} 
                  alt={`${app.name} Logo`} 
                  className="w-12 h-12 mb-1 object-contain"
                />
                <span className="text-emerald-800 text-xs font-medium">{app.name}</span>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => openUPIApp(upiPaymentLink)}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg shadow-sm transition-colors flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd"/>
          </svg>
          Open Any UPI App
        </button>
      </div>
    </div>
  );
}

export default QrCodeWithUPI;