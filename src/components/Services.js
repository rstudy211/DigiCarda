function Services() {
  return (
    <div class="flex flex-col bg-green-50 py-8 shadow-inner  justify-center items-center  md:py-12">
      <span class="text-green-700   font-bold  text-2xl md:text-5xl px-12 ">
        Products & Services
      </span>

      <div class="grid bg-green-50 md:grid-cols-2 lg:grid-cols-3  gap-12 px-6 lg:px-11 py-3 md:py-16">
        <div class="border shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white text-green-700 hover:shadow-white-500 border-green-500 rounded-2xl py-3 px-5 flex flex-col gap-3 justify-center items-center">
          <p class=" text-xl md:text-2xl text-center font-poppins font-bold">
            Income Tax
          </p>
          <img
            class="h-56 w-96 mx-4 rounded "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPsgnEw_BMf9KfwRuYeTUokVSwJtaJqjPQntTF_A8uT3eQRTnNPzuSev1o8pskwyLD1sY&usqp=CAU"
            alt=""
          />
          <a
            class="my-3 cursor-pointer hover:scale-110 transition-transform"
            href="https://api.whatsapp.com/send?phone=919414278219&amp;text=Enquiry for product: Income tax"
            target="_blank"
          >
            <span class="rounded font-bold  bg-green-500 px-6 py-2 text-sm text-white">
              ENQIRY NOW
            </span>
          </a>
        </div>

        <div class="border shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white text-green-700 hover:shadow-white-500 border-green-500 rounded-2xl px-5 py-3 flex flex-col gap-3 justify-center items-center">
          <p class="text-xl md:text-2xl text-center font-poppins font-bold">
            GST-Registration
          </p>
          <img
            class="h-56 w-96 mx-4 rounded "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk4vwSqXdziYJsZ-522-sT-4NJvoLEdvDaww&usqp=CAU"
            alt=""
          />
          <a
            class="my-3 cursor-pointer hover:scale-110 transition-transform"
            href="https://api.whatsapp.com/send?phone=919414278219&amp;text=Enquiry for product: GST-Registration"
            target="_blank"
          >
            <span class="rounded font-bold bg-green-500 px-6 py-2 text-sm text-white">
              ENQIRY NOW
            </span>
          </a>
        </div>
        <div class="border shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white text-green-700 hover:shadow-white-500 border-green-500 rounded-2xl py-3 px-5 flex flex-col gap-3 justify-center items-center">
          <p class=" text-xl md:text-2xl text-center font-poppins font-bold">
            Pan-card
          </p>
          <img
            class="h-56 w-96 mx-4 rounded "
            src="https://www.shutterstock.com/shutterstock/photos/1681665595/display_1500/stock-vector-dummy-pan-card-unique-identity-document-for-indian-citizen-issued-by-government-of-india-vector-1681665595.jpg"
            alt=""
          />
          <a
            class="my-3 cursor-pointer hover:scale-110 transition-transform"
            href="https://api.whatsapp.com/send?phone=919414278219&amp;text=Enquiry for product: Pancard"
            target="_blank"
          >
            <span class="rounded font-bold bg-green-500 px-6 py-2 text-sm text-white">
              ENQIRY NOW
            </span>
          </a>
        </div>
      </div>
      {/* <!-- component --> */}
    </div>
  );
}

export default Services;
