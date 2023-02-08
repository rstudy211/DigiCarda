import logo from "./logo.svg";
import "./App.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// import toast from "react-hot-toast";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0hnw859",
        "template_99uq7nt",
        form.current,
        "WcFF0b9pwhRqxA5Ik"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          toast.success("Message Sent");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };
  return (
    <>
      <div class="flex z-20 text-white rounded-md sticky top-0 flex-col items-center justify-center px-4 py-2 bg-indigo-800 drop-shadow-lg border-b border-white">
        <h1 class="text-4xl font-Popins font tracking-wide text-shadow-md mb-2 sm:mb-0 sm:text-5xl">
          Emitra &amp; E-taxway
        </h1>
        <p class="text-lg font-medium text-yellow-300 text-shadow-md mb-2 sm:mb-0 sm:text-2xl">
          e-Tax Way Group
        </p>
        <div class="w-16 h-1 mt-2 bg-yellow-300 rounded-full"></div>
      </div>
      <div class="flex flex-col  shadow-inner  justify-center items-center h-full py-6">
        <span class="text-indigo-700 text-3xl border-b-4 px-7 py-2 border-indigo-600 my-5">
          Products & Services
        </span>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-11 py-16">
          <div class="border shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-white-500 border-white-300 rounded py-2 px-4 flex flex-col gap-3 justify-center items-center">
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
          <div class="border shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-white-500 border-neutral-300 rounded py-2 px-4 flex flex-col gap-3 justify-center items-center">
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
          <div class="border shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-white-500 border-slate-300 rounded py-2 px-4 flex flex-col gap-3 justify-center items-center">
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
      <div class=" bg-gradient-to-r from-indigo-800 via-indigo-500 to-indigo-800 text-white flex lg:flex-row sm:flex-col flex-col justify-center items-center">
        <div class="flex bg-white text-black justify-center items-center w-[90%] md:w-[70%] lg:w-[50%] md:mx-20 lg:mx-20 my-10 rounded-md">
          <div className=" flex flex-col items-center justify-center w-full px-4">
            {" "}
            <div class="py-2">
              <span class="text-white-700 text-3xl border-b-4 px-7 py-2 border-white-700 my-5">
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
            <p class="text-center sm:w-42 md:w-42 ">
              “As Harimohan Sharma & Assosiates, we provides a range of
              financial services, including ITR filing, GST registration and
              filing, PAN card services, and eMitra services. With expertise in
              the financial system, I am dedicated to delivering efficient and
              effective support to individuals and businesses.
            </p>
            <div class="flex justify-center gap-5 my-10">
              <a
                class="mt-1"
                href="https://api.whatsapp.com/send?phone=919414278219&amp;text="
                target="_blank"
              >
                <i class="bi bg-green-500 text-white rounded-full px-2 py-1 text-2xl bi-whatsapp"></i>
              </a>

              <i class="bi text-[#0088cc] rounded-full  text-4xl bi-telegram "></i>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center h-[80%] text-white w-full ">
          <span class="text-white text-3xl border-b-4 px-7 py-2 border-white my-5">
            Contact Us
          </span>
          <form
            ref={form}
            onSubmit={sendEmail}
            class="flex w-[90%] sm:w-[90%] lg:w-[60%] flex-col items-center gap-2 rounded-md bg-white bg-opacity-25 px-7 py-5 "
          >
            <div class="flex w-full  flex-col">
              <label for="username" class="pb-1">
                Name
              </label>
              <input
                name="user_name"
                class="rounded text-black px-2 py-1"
                type="text"
                required
              />
            </div>
            <div class="flex w-full flex-col">
              <label for="email" class="pb-1">
                Email
              </label>
              <input
                name="user_email"
                class="rounded text-black px-2 py-1"
                type="email"
                required
              />
            </div>
            <div class="flex w-full flex-col">
              <label for="message" class="pb-1">
                Message
              </label>
              <textarea
                name="message"
                class="rounded text-black px-2 py-1"
                type="text"
                required
              ></textarea>
            </div>
            <br></br>
            <button
              type="submit"
              class="rounded hover:bg-indigo-600 hover:text-white bg-white text-indigo-700 w-[100px] py-1"
            >
              Send
            </button>
            <ToastContainer />
          </form>
          <br></br>
        </div>
      </div>
      <footer class="bg-indigo-100 py-12 border-t border-white-200">
        <div class="container mx-auto px-4 text-center text-neutral-400">
          <a
            class="text-neutral-600 hover:text-white-500 mb-5"
            href="mailto:hrmsharma5@email.com"
          >
            hrmsharma5@email.com
          </a>
          <p class="leading-normal text-neutral-600">
            1461 Vinoba Bhave Naga Near Khade Ganesh Ji, Kota (Raj.)
          </p>
          <p className="text-gray-600">
            <a href="tel:+919462748219">
              <i class="bi bi-telephone  px-2"></i>{" "}
              <span className="underline underline-offset-1">
                {" "}
                +91 9462748219
              </span>
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
