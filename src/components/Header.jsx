
export default function Header({setMode,isDark}) {
  const headerStyles = `flex justify-between items-center 
    px-5 left-2 right-2 h-15 shadow-md rounded-xl box-border 
    sticky top-2 bg-white sm:h-20 dark:bg-[hsl(225,23%,24%)] transtion duration-200
    z-10
    `
  const buttonStyles = `w-10 h-10 bg-yellow-50 flex 
      justify-center items-center rounded-md 
      shadow-xs
      shadow-black transition duration-200 hover:shadow-sm hover:bg-gray-400
      sm:h-13 sm:w-13 focus:outline-2 outline-amber-700 outline-offset-3 focus:shadow-none dark:bg-[hsl(226,11%,37%))]
      dark:hover:bg-blue-900
    `
  const icon = isDark? "sun":"moon"
  const url = `/assets/images/icon-${icon}.svg`
  return (
    <header
      className={headerStyles}
    >
      <img src="/assets/images/logo.svg" alt="logo" className="w-40 sm:w-60" />
      <button
        className={buttonStyles}
        onClick={()=>{setMode(prev=>!prev)}}
      >
        <img src={url} alt="mood-icon" />
      </button>
    </header>
  );
}
