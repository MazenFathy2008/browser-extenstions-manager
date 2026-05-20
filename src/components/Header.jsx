export default function Header() {
  return (
    <header
      className="flex justify-between items-center 
    px-5 left-2 right-2 h-15 shadow-md rounded-xl box-border 
    fixed top-2 bg-white sm:h-20"
    >
      <img src="/assets/images/logo.svg" alt="logo" className="w-40 sm:w-60" />
      <button
        className=
      "w-10 h-10 bg-gray-400 flex 
      justify-center items-center rounded-md 
      shadow-xs
      shadow-black transition duration-200 hover:shadow-sm hover:bg-yellow-50
      sm:h-13 sm:w-13 focus:outline-2 outline-amber-700 outline-offset-3 focus:shadow-none"
      >
        <img src="/assets/images/icon-moon.svg" alt="mood-icon" />
      </button>
    </header>
  );
}
