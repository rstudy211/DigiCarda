import logo from "./logo.svg";
import "./App.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// import toast from "react-hot-toast";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logoImg from "./images/logo.png";
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
      <div class="flex z-20 px-5 text-white sticky font-bold top-0 flex-row items-center justify-between bg-gradient-to-r from-indigo-800 via-indigo-500 to-indigo-800 drop-shadow-lg py-2">
        <div className="rounded-full flex justify-center items-center h-20 w-20 text-xl md:text-2xl  ring-offset-2  text-white bg-indigo-600">
          <h1>E-Tax</h1>
        </div>
        <div className="flex flex-col items-end md:items-center md:mr-16  ">
          <h1 class="text-2xl lg:pb-1 font-poppins  tracking-wide text-shadow-md lg:mb-2 mb-0 lg:text-5xl">
            Emitra &amp; E-taxway
          </h1>
          <p class="text-lg font-medium text-yellow-300 text-shadow-md mb-2 sm:mb-0 sm:text-2xl">
            e-Tax Way Group
          </p>
          <div class="w-16 h-1 md:mt-2 bg-yellow-300 rounded-full"></div>
        </div>
        <div className="hidden md:block"></div>
      </div>
      <div class="flex flex-col bg-gray-100  shadow-inner  justify-center items-center py-3 md:py-6">
        <span class="text-indigo-700   font-bold text-3xl md:text-5xl px-12 ">
          Products & Services
        </span>

        <div class="grid bg-gray-100 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-11 py-3 md:py-16">
          <div class="border shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white text-gray-600 hover:shadow-white-500 border-white-300 rounded-2xl py-3 px-5 flex flex-col gap-3 justify-center items-center">
            <p class="text-2xl text-center font-poppins font-bold">
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
              <span class="rounded font-bold  bg-orange-500 px-6 py-2 text-sm text-white">
                ENQIRY NOW
              </span>
            </a>
          </div>

          <div class="border shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white text-gray-600 hover:shadow-white-500 border-neutral-300 rounded-2xl px-5 py-3 flex flex-col gap-3 justify-center items-center">
            <p class="text-2xl text-center font-poppins font-bold">
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
              <span class="rounded font-bold bg-orange-500 px-6 py-2 text-sm text-white">
                ENQIRY NOW
              </span>
            </a>
          </div>
          <div class="border shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white text-gray-600 hover:shadow-white-500 border-slate-300 rounded-2xl py-3 px-5 flex flex-col gap-3 justify-center items-center">
            <p class="text-2xl text-center font-poppins font-bold">Pancard</p>
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
              <span class="rounded font-bold bg-orange-500 px-6 py-2 text-sm text-white">
                ENQIRY NOW
              </span>
            </a>
          </div>
        </div>
        {/* <!-- component --> */}
        <section class="antialiased  bg-gray-100 text-gray-600 py-4 w-full px-4">
          <div class="flex flex-col gap-4 lg:flex-row justify-center  ">
            <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
              <header class="px-5 py-4 border-b border-gray-100">
                <h2 class="font-semibold text-gray-800">Our Other Services</h2>
              </header>
              <div class="p-3">
                <div class="overflow-x-auto">
                  <table class="table-auto w-full">
                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">Name</div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">Email</div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">Spent</div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-center">Country</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="text-sm divide-y divide-gray-100">
                      <tr>
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <img
                                class="rounded-full"
                                src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                                width="40"
                                height="40"
                                alt="Alex Shatov"
                              />
                            </div>
                            <div class="font-medium text-gray-800">
                              Alex Shatov
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left">alexshatov@gmail.com</div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left font-medium text-green-500">
                            $2,890.66
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-lg text-center">??</div>
                        </td>
                      </tr>
                      <tr>
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <img
                                class="rounded-full"
                                src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg"
                                width="40"
                                height="40"
                                alt="Philip Harbach"
                              />
                            </div>
                            <div class="font-medium text-gray-800">
                              Philip Harbach
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left">philip.h@gmail.com</div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left font-medium text-green-500">
                            $2,767.04
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-lg text-center">??</div>
                        </td>
                      </tr>
                      <tr>
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <img
                                class="rounded-full"
                                src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg"
                                width="40"
                                height="40"
                                alt="Mirko Fisuk"
                              />
                            </div>
                            <div class="font-medium text-gray-800">
                              Mirko Fisuk
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left">mirkofisuk@gmail.com</div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left font-medium text-green-500">
                            $2,996.00
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-lg text-center">??</div>
                        </td>
                      </tr>
                      <tr>
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <img
                                class="rounded-full"
                                src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-08.jpg"
                                width="40"
                                height="40"
                                alt="Olga Semklo"
                              />
                            </div>
                            <div class="font-medium text-gray-800">
                              Olga Semklo
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left">olga.s@cool.design</div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left font-medium text-green-500">
                            $1,220.66
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-lg text-center">??</div>
                        </td>
                      </tr>
                      <tr>
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <img
                                class="rounded-full"
                                src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg"
                                width="40"
                                height="40"
                                alt="Burak Long"
                              />
                            </div>
                            <div class="font-medium text-gray-800">
                              Burak Long
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left">longburak@gmail.com</div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left font-medium text-green-500">
                            $1,890.66
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-lg text-center">??</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* <!-- Table --> */}
            <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
              <header class="px-5 py-4 border-b border-gray-100">
                <h2 class="font-semibold text-gray-800">
                  Account Details & Payment Info
                </h2>
              </header>
              <div class="p-3">
                <div class="overflow-x-auto text-base font-semibold  text-gray-400">
                  {/* <table class="table-auto w-full">
                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">Name</div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">Email</div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">Spent</div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-center">Country</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="text-sm divide-y divide-gray-100">
                      <tr>
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <img
                                class="rounded-full"
                                src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                                width="40"
                                height="40"
                                alt="Alex Shatov"
                              />
                            </div>
                            <div class="font-medium text-gray-800">
                              Alex Shatov
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left">alexshatov@gmail.com</div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left font-medium text-green-500">
                            $2,890.66
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-lg text-center">??</div>
                        </td>
                      </tr>
                      <tr>
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <img
                                class="rounded-full"
                                src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg"
                                width="40"
                                height="40"
                                alt="Philip Harbach"
                              />
                            </div>
                            <div class="font-medium text-gray-800">
                              Philip Harbach
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left">philip.h@gmail.com</div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left font-medium text-green-500">
                            $2,767.04
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-lg text-center">??</div>
                        </td>
                      </tr>
                      <tr>
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <img
                                class="rounded-full"
                                src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg"
                                width="40"
                                height="40"
                                alt="Mirko Fisuk"
                              />
                            </div>
                            <div class="font-medium text-gray-800">
                              Mirko Fisuk
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left">mirkofisuk@gmail.com</div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left font-medium text-green-500">
                            $2,996.00
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-lg text-center">??</div>
                        </td>
                      </tr>
                      <tr>
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <img
                                class="rounded-full"
                                src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-08.jpg"
                                width="40"
                                height="40"
                                alt="Olga Semklo"
                              />
                            </div>
                            <div class="font-medium text-gray-800">
                              Olga Semklo
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left">olga.s@cool.design</div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left font-medium text-green-500">
                            $1,220.66
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-lg text-center">??</div>
                        </td>
                      </tr>
                      <tr>
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <img
                                class="rounded-full"
                                src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg"
                                width="40"
                                height="40"
                                alt="Burak Long"
                              />
                            </div>
                            <div class="font-medium text-gray-800">
                              Burak Long
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left">longburak@gmail.com</div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left font-medium text-green-500">
                            $1,890.66
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-lg text-center">??</div>
                        </td>
                      </tr>
                    </tbody>
                  </table> */}
                  <div className="flex  px-2 justify-around items-center">
                    <img
                      className="h-44 w-44"
                      src="https://media.istockphoto.com/id/828088276/vector/qr-code-illustration.jpg?s=612x612&w=0&k=20&c=FnA7agr57XpFi081ZT5sEmxhLytMBlK4vzdQxt8A70M="
                    ></img>
                    <ul className="border-l-2 border-green-400 px-2">
                      <h2 class="font-semibold    text-gray-900">9414278219</h2>
                      <h1 className="font-light  flex gap-2 text-sm">
                        <img
                          className="h-5 w-5"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBI-logo.svg/1000px-SBI-logo.svg.png?20200329171950"
                        ></img>
                        State Bank of India - 6045
                      </h1>
                      <h2 class="font-semibold    text-gray-900">9414278219</h2>
                      <h1 className="font-light flex gap-2 pb text-sm">
                        <img
                          className="h-5 w-5"
                          src="https://www.logo.wine/a/logo/Paytm/Paytm-Logo.wine.svg"
                        ></img>
                        Paytm Payments Bank Ltd - XX19
                      </h1>
                      <h2 class="font-semibold    text-gray-900">9414278219</h2>
                      <h1 className="font-light flex gap-2 text-sm">
                        <img
                          className="h-5 w-5"
                          src="https://asset.brandfetch.io/idJHpX8apR/idP0HMoiak.png"
                        ></img>
                        ICICI Bank - XX77
                      </h1>
                    </ul>
                  </div>
                  <div className="flex  justify-between items-center px-5 py-4 border-b border-gray-100">
                    <div>
                      <h2 class="font-semibold mb-2 text-gray-400">Name:</h2>
                      <h2 class="font-semibold mb-2 text-gray-600">
                        Harimohan Sharma
                      </h2>
                    </div>
                    <div>
                      <h2 class="font-semibold mb-2 text-gray-400">
                        Account Number:
                      </h2>
                      <h2 class="font-semibold mb-2 text-gray-600">
                        10039588118
                      </h2>
                    </div>
                  </div>
                  <div className="flex justify-between items-center px-5 py-4 border-b border-gray-100">
                    <div>
                      <h2 class="font-semibold mb-2 text-gray-400">
                        Bank Name:
                      </h2>
                      <h2 class="font-semibold mb-2 text-gray-600">
                        State Bank Of India
                      </h2>
                    </div>
                    <div className="">
                      <h2 class="font-semibold mb-2 text-gray-400">
                        IFSC Code:
                      </h2>
                      <h2 class="font-semibold mb-2 text-gray-600">
                        IDFB0041353
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
            <p class="text-center leading-7 text-neutral-700 font-light sm:w-42 md:w-42 ">
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
            <div class="flex w-full  flex-col">
              <label for="mobile_number" class="pb-1">
                Mobile No.
              </label>
              <input
                name="mobile_number"
                class="rounded text-black px-2 py-1"
                type="tel"
                pattern="[0-9]{10}"
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
      <footer class="bg-gray-100 py-12 border-t border-white-200">
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
              <i class="bi bi-telephone-fill  px-2"></i>{" "}
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
