function BottomNavbar() {
  return (
    <>
      <footer class="bg-emerald-800  pt-10 pb-20 border-t border-green-500">
        <div class="container mx-auto px-4 text-center text-white">
          <a
            class="text-white tracking-wide hover:text-green-500 mb-5"
            href="mailto:etaxwayadvgurup@gmail.com"
          >
            etaxwayadvgurup@gmail.com
          </a>
          <p class="">
            <a href="https://www.google.com/maps/place/25%C2%B006'39.9%22N+75%C2%B050'05.8%22E/@25.111084,75.8327653,17z/data=!3m1!4b1!4m4!3m3!8m2!3d25.111084!4d75.834954?entry=ttu">
              <i class="bi bi-geo-alt-fill  leading-normal animate-pulse text-3xl text-red-600 ">
                {" "}
              </i>
              <span className="mb-4 italic text-md">
                1461 Vinoba Bhave Nagar (324005), Kota (Raj.)
              </span>
            </a>
          </p>
          <p class="text-green-400 mt-3">
            <a href="tel:+919414278219">
              <i class="bi bi-telephone-fill px-2"></i>
              <span class="underline underline-offset-1">+91 9414278219</span>
            </a>
          </p>
        </div>
      </footer>
      <nav className="flex px-2 fixed bottom-0 w-full mt-4  border-t border-emerald-700  justify-around items-center text-xl py-2 text-emerald-100 bg-emerald-800">
        <a
          className="flex-col hover:text-white active:text-green-300 order-4 text-center justify-center"
          href="#contact"
        >
          <i class="bi bi-chat-square-text-fill"></i>
          <p className="text-xs">Contact Us</p>
        </a>

        <a
          className="flex-col hover:text-white order-2 items-center text-center justify-center"
          href="#services"
        >
          <i class="bi bi-briefcase-fill"></i>
          <p className="text-xs">Services</p>
        </a>
        <a
          className="flex-col hover:text-white order-2 items-center text-center justify-center"
          href="#qrcode"
        >
          <i class="bi bi-qr-code"></i>
          <p className="text-xs">Qrcode</p>
        </a>
        <a
          className="flex-col hover:text-white order-1 items-center text-center justify-center"
          href="#"
        >
          <i class="bi bi-house-fill"></i>
          <p className="text-xs">Home</p>
        </a>
        <a
          className="flex-col hover:text-white order-3 items-center text-center justify-center"
          href="#about"
        >
          <i class="bi bi-person-circle"></i>
          <p className="text-xs">About Me</p>
        </a>
      </nav>
    </>
  );
}

export default BottomNavbar;
