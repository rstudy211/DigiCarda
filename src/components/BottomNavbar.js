function BottomNavbar() {
  return (
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
  );
}

export default BottomNavbar;
