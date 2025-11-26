import ServiceList from "./ServicesList";

function Header({ title, logoText, tagline }) {
  return (
  
    <div class="sticky top-0 z-20 opacity-95 flex flex-row items-center justify-between bg-gradient-to-r from-emerald-800 via-emerald-600 to-emerald-800 px-5 py-2 font-bold text-white drop-shadow-lg">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-600 text-xl text-white ring-offset-2 md:text-2xl">
        <h1>{logoText}</h1>
      </div>
      <div className="flex flex-col items-end md:mr-16 md:items-center">
        <h1 className="font-poppins text-shadow-md mb-0 sm:text-2xl tracking-wide lg:mb-2 lg:pb-1 lg:text-5xl">{title}</h1>
        <p className="text-shadow-md mb-2 text-lg font-medium text-yellow-300 sm:mb-0 sm:text-2xl">{tagline}</p>
        <div className="h-1 w-16 rounded-full bg-yellow-300 md:mt-2"></div>
      </div>
      <div className="hidden md:block"></div>
    </div>

  );
}


export default Header;