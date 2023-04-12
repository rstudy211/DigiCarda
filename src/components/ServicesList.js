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
    <div className="bg-green-50 pt-8 md:py-8 px-8">
      <div className="container mx-auto ">
        <h1 className="text-3xl font-bold text-green-600 mb-8 md:mb-12">
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
        {!showAll ? (
          <button
            className="block mx-auto mt-8 animate-bounce py-2 px-4 bg-green-600 text-white font-medium rounded-md transition-colors duration-300 hover:bg-green-700"
            onClick={() => setShowAll(true)}
          >
            Show More
            <i class="bi bi-chevron-double-down ml-2"></i>
          </button>
        ) : (
          <button
            className="block mx-auto mt-8 py-2 px-4 animate-bounce bg-green-600 text-white font-medium rounded-md transition-colors duration-300 hover:bg-green-700"
            onClick={() => setShowAll(false)}
          >
            Show Less
            <i class="bi bi-chevron-double-up ml-2"></i>
          </button>
        )}
      </div>
    </div>
  );
}

export default ServiceList;
