import ServiceList from "./ServicesList";

function Services({ services }) {
  return (
    <>
      <div
        id="services"
        className="flex flex-col bg-green-50 py-8 shadow-inner justify-center items-center md:py-12"
      >
        <span className="text-green-700 font-bold text-2xl md:text-5xl px-12">
          Products & Services
        </span>

        <div className="grid bg-green-50 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6 lg:px-11 py-3 md:py-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="border shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white text-green-700 hover:shadow-white-500 border-green-500 rounded-2xl py-3 px-5 flex flex-col gap-3 justify-center items-center"
            >
              <p className="text-xl md:text-2xl text-center font-poppins font-bold">
                {service.title}
              </p>
              <img
                className="h-56 w-96 mx-4 rounded"
                src={service.imageUrl}
                alt={service.title}
              />
              <a
                className="my-3 cursor-pointer hover:scale-110 transition-transform"
                href={service.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="rounded font-bold bg-green-500 px-6 py-2 text-sm text-white">
                  ENQUIRY NOW
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
      <ServiceList />
    </>
  );
}

export default Services;
