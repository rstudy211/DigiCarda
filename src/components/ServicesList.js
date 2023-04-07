import { useState } from "react";

const services = [
  "NGO Registration",
  "Thrust Registration",
  "Company Registration",
  "Company Compliances",
  "Income Tax",
  "Tax Compliance",
  "Gst",
  "Shop Act Registration",
  "Msme",
  "PF & ESI Registration",
  "Trademark Registration",
  "Fssai Registration",
  "Investment & Trading",
  "Loans and Insurance",
  "Wealth Management",
  "NGO Audit",
  "School Audit",
  "Digital Signature (DSC)",
];

function ServiceList() {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? services : services.slice(0, 4);

  return (
    <div className="bg-gradient-to-r from-indigo-800 via-indigo-500 to-indigo-800 pt-8 md:py-8 px-8">
      <div className="container mx-auto ">
        <h1 className="text-3xl font-bold text-white mb-8 md:mb-12">
          Our Other Services
        </h1>
        <ul className="grid md:grid-cols-4 grid-cols-2 gap-4 text-white">
          {visibleServices.map((service) => (
            <li
              key={service}
              className="bg-white rounded-lg shadow-md p-4 transition-all duration-300 hover:-translate-y-1"
            >
              <p className="text-lg font-medium text-gray-800">{service}</p>
            </li>
          ))}
        </ul>
        {!showAll && (
          <button
            className="block mx-auto mt-8 py-2 px-4 bg-indigo-600 text-white font-medium rounded-md transition-colors duration-300 hover:bg-indigo-700"
            onClick={() => setShowAll(true)}
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
}

export default ServiceList;
