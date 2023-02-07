import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div class="flex z-20 text-white rounded-md sticky top-0 flex-col items-center border-b-[10px] border-white justify-center  left-24  bg-pink-700 py-2 drop-shadow-lg">
        <h1 class="text-6xl font-Popins font">Emitra & E-taxway</h1>
        <p class="text-3xl text-green-600">& e-Tax Way Group</p>
      </div>

      <div class="flex flex-col  justify-center items-center h-full border-x-[30px] border-pink-800 py-6">
        <span class="text-pink-700 text-3xl border-b-4 px-7 py-2 border-pink-600 my-5">
          Products & Services
        </span>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-6">
          <div class="border border-black rounded py-2 px-4 flex flex-col gap-3 justify-center items-center">
            <p class="text-2xl text-center">Income Tax</p>
            <img
              class="h-56 w-96 mx-4 rounded "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPsgnEw_BMf9KfwRuYeTUokVSwJtaJqjPQntTF_A8uT3eQRTnNPzuSev1o8pskwyLD1sY&usqp=CAU"
              alt=""
            />
            <a
              class=""
              href="https://api.whatsapp.com/send?phone=919414278219&amp;text=Enquiry for product: Income tax"
              target="_blank"
            >
              <span class="rounded animate-pulse bg-orange-500 px-6 py-1 text-sm text-white">
                ENQIRE NOW
              </span>
            </a>
          </div>
          <div class="border border-black rounded py-2 px-4 flex flex-col gap-3 justify-center items-center">
            <p class="text-2xl text-center">GST-Registration</p>
            <img
              class="h-56 w-96 mx-4 rounded "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk4vwSqXdziYJsZ-522-sT-4NJvoLEdvDaww&usqp=CAU"
              alt=""
            />
            <a
              class=""
              href="https://api.whatsapp.com/send?phone=919414278219&amp;text=Enquiry for product: GST-Registration"
              target="_blank"
            >
              <span class="rounded animate-pulse bg-orange-500 px-6 py-1 text-sm text-white">
                ENQIRE NOW
              </span>
            </a>
          </div>
          <div class="border border-black rounded py-2 px-4 flex flex-col gap-3 justify-center items-center">
            <p class="text-2xl text-center">Pancard</p>
            <img
              class="h-56 w-96 mx-4 rounded "
              src="https://www.shutterstock.com/shutterstock/photos/1681665595/display_1500/stock-vector-dummy-pan-card-unique-identity-document-for-indian-citizen-issued-by-government-of-india-vector-1681665595.jpg"
              alt=""
            />
            <a
              class=""
              href="https://api.whatsapp.com/send?phone=919414278219&amp;text=Enquiry for product: Pancard"
              target="_blank"
            >
              <span class="rounded animate-pulse bg-orange-500 px-6 py-1 text-sm text-white">
                ENQIRE NOW
              </span>
            </a>
          </div>
        </div>
      </div>
      <div class=" bg-gradient-to-r from-pink-800 via-pink-500 to-pink-800 text-white flex lg:flex-row sm:flex-col flex-col justify-center items-center">
        <div class="flex flex-col bg-white text-black justify-center items-center mx-20 my-10 rounded-md">
          <div class="py-2">
            <span class="text-pink-700 text-3xl border-b-4 px-7 py-2 border-pink-700 my-5">
              About Me
            </span>
            <div class="h-[150px] w-[150px] my-10 ring-[10px] ring-white ring-opacity-25 mx-auto overflow-hidden rounded-full">
              <img
                class="  "
                src="https://media-public.canva.com/MADQ4_le-qs/1/screen.jpg"
                alt=""
              />
            </div>
          </div>
          <p class="text-center w-[500px]">
            “Harshal Mewara & Associates”, we adopt a structupink and
            disciplined advisory approach and provide you portfolio solutions
            which meet your desipink financial goals and milestones.
          </p>
          <div class="flex justify-center gap-5 my-10">
            <i class="bi bg-green-500 text-white rounded-full px-2 py-1 text-2xl bi-whatsapp"></i>
            <i class="bi text-[#0088cc] rounded-full  text-4xl bi-telegram"></i>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center text-white w-full ">
          <span class="text-white text-3xl border-b-4 px-7 py-2 border-white my-5">
            Contact Us
          </span>
          <form class="flex sm:w-[80%] lg:w-[60%] flex-col items-center gap-2 rounded-md bg-white bg-opacity-25 px-7 py-5 ">
            <div class="flex w-full flex-col">
              <label for="username" class="pb-1">
                Name
              </label>
              <input name="username" class="rounded py-1" type="text" />
            </div>
            <div class="flex w-full flex-col">
              <label for="email" class="pb-1">
                Email
              </label>
              <input name="email" class="rounded py-1" type="text" />
            </div>
            <div class="flex w-full flex-col">
              <label for="message" class="pb-1">
                Message
              </label>
              <textarea
                name="message"
                class="rounded py-1"
                type="text"
              ></textarea>
            </div>
            <br></br>
            <button
              type="submit"
              class="rounded hover:bg-pink-600 hover:text-white bg-white text-pink-700 w-[100px] py-1"
            >
              Send
            </button>
          </form>
          <br></br>
        </div>
      </div>
      <div class="p-2 bg-pink-100 w-full pt-8 border-t border-gray-200 text-center">
        <a class="">hrmsharma5@email.com</a>
        <p class="leading-normal my-5">
          1461 Vinoba Bhave Naga Near Khade Ganesh Ji, Kota (Raj.)
        </p>
      </div>
    </>
  );
}

export default App;
