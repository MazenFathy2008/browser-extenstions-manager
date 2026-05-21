export default function () {
	const buttonStyles = `bg-[hsl(217,61%,90%)] 
	px-4 py-2 
	rounded-4xl 
	w-20 h-10 
	flex 
	justify-center 
	items-center
	dark:bg-[hsl(226,11%,37%))]	
	dark:focus:bg-[hsl(3,77%,44%)]
	focus:bg-[hsl(3,71%,56%)]
	shadow-black transition duration-200 
	hover:shadow-sm hover:bg-gray-400
  sm:h-13 sm:w-13 focus:outline-2 
	outline-amber-700 outline-offset-3 
	focus:shadow-none 
	dark:bg-[hsl(226,11%,37%))]
  dark:hover:bg-blue-900
	sm:rounded-3xl
	sm:w-23
	`
  return (
    <main
      className="
		text-[hsl(226,25%,17%)] p-5 
		dark:text-[hsl(200,60%,99%)]   
		flex flex-col  items-center w-full
		"
    >
      <section
        className="flex-col w-full 
			items-center 
			h-25
			flex sm:flex-row 
			justify-between
			"
      >
        <span className="font-bold text-3xl">Extensions List</span>
        <div className="flex w-full justify-around px-7 sm:w-[30%]">
          <button className={buttonStyles}>
            All
          </button>
          <button className={buttonStyles}>
            Active
          </button>
          <button className={buttonStyles}>
            Inactive
          </button>
        </div>
      </section>
      
    </main>
  );
}
