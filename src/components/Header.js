function Header() {
  return (
    <div class="sticky top-0 z-20 opacity-95 flex flex-row items-center justify-between bg-gradient-to-r from-emerald-800 via-emerald-600 to-emerald-800 px-5 py-2 font-bold text-white drop-shadow-lg">
      <div class="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-600 text-xl text-white ring-offset-2 md:text-2xl">
        <h1>E-Tax</h1>
      </div>
      <div class="flex flex-col items-end md:mr-16 md:items-center">
        <h1 class="font-poppins text-shadow-md mb-0 sm:text-2xl tracking-wide lg:mb-2 lg:pb-1 lg:text-5xl">
          Emitra &amp; E-taxservices
        </h1>
        <p class="text-shadow-md mb-2 text-lg font-medium text-yellow-300 sm:mb-0 sm:text-2xl">
          e-Tax Way Group
        </p>
        <div class="h-1 w-16 rounded-full bg-yellow-300 md:mt-2"></div>
      </div>
      <div class="hidden md:block"></div>
    </div>
  );
}

export default Header;
