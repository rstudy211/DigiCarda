
import { ToastContainer, toast } from "react-toastify";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactUs(){

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
              toast.success("Message sent successfully");
              form.current.reset();
            },
            (error) => {
              console.log(error.text);
              toast.error(error.text);
            }
          );
      };

    return (
        <div
          id="contact"
          class="flex flex-col justify-center gap-4  pt-28  items-center h-[80%] text-white w-full "
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            class="flex w-[90%]  sm:w-[90%] lg:w-[60%] flex-col items-center gap-2 rounded-md bg-emerald-800 bg-opacity-25 px-7 py-5 "
          >
            <span class="text-white text-3xl border-b-4 px-7 py-2 border-white ">
              Contact Us
            </span>
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
              class="rounded hover:bg-emerald-800 hover:text-white bg-white text-emerald-700 w-[100px] py-1"
            >
              Send
            </button>
            <ToastContainer />
          </form>
          <br></br>
        </div>
    );
}

export default ContactUs;