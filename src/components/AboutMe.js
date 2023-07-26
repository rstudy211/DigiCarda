import React from "react";

function AboutMe() {
  return (
    <div
      id="about"
      class=" py-10 bg-gradient-to-r pt-28 from-emerald-500 via-emerald-400 to-emerald-500 text-white flex lg:flex-row sm:flex-col flex-col justify-center items-center"
    >
      <div class="flex bg-emerald-600  text-white justify-center items-center w-[90%] md:w-[70%] lg:w-[50%] md:mx-20 lg:mx-20 my-10 rounded-md">
        <div className=" flex flex-col items-center justify-center w-full  px-4">
          {" "}
          <div class="py-2">
            <span class="text-white-700 text-3xl border-b-4 px-7 py-2 border-white-700 my-5">
              About Me
            </span>
            {/* <div class="h-[150px] w-[150px] my-10 ring-[10px] ring-white ring-opacity-25 mx-auto overflow-hidden rounded-full">
            <img class="  " src={profilepic} alt="" />
          </div> */}
            <div class="h-40 w-40 my-10 mx-auto rounded-full overflow-hidden">
              <img class="w-full h-full object-cover" src={profilepic} alt="" />
            </div>
          </div>
          <p class="text-center leading-7 text-neutral-50 font-light sm:w-42 md:w-42 ">
            “As Harimohan Sharma & Assosiates, we provides a range of financial
            services, including ITR filing, GST registration and filing, PAN
            card services, and eMitra services. With expertise in the financial
            system, I am dedicated to delivering efficient and effective support
            to individuals and businesses.
          </p>
          <div class="flex justify-between items-center w-full px-8 my-10">
            <a
              class="bg-green-500 h-[37px] w-[37px] items-center  rounded-full flex justify-center "
              href="https://api.whatsapp.com/send?phone=919414278219&amp;text="
              target="_blank"
            >
              <i class="bi  text-white   text-2xl bi-whatsapp"></i>
            </a>

            <a class="rounded-full bg-white h-8 flex justify-center items-center">
              <i class="bi text-[#00bbff]   text-4xl bi-telegram "></i>
            </a>
            <a
              href="tel:+919414278219"
              class="rounded-full px-2 py-1 border-green-400 bg-green-400 text-white"
            >
              <i class="bi bi-telephone-fill  text-xl "></i>
            </a>
          </div>
          {/* <div className="flex  items-center px-5 mb-5 w-full text-sm text-center">
          <p className="">Whatsapp</p>
          <p className="mx-12">Telegram</p>
          <p className="ml-3">Call Me</p>
        </div> */}
        </div>
      </div>
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
    </div>
  );
}

export default AboutMe;
