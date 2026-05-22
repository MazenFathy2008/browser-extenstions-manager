import Card from "./cards.jsx";
import { useState, useEffect} from "react";
export default function () {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("data")));
  const [filter, setFilter] = useState([true, false, false]);
  const [isFiltered,setIsFiltered] = useState(false)
  useEffect(() => {
      localStorage.setItem("data", JSON.stringify(data));
  }, [data]);
  function changeFilter(option) {
    setFilter(() => {
      const newFilter = [];
      if(option ==1){
        setIsFiltered(false)
      }else{
        setIsFiltered(true)
      }
      for (let i = 1; i <= 3; i++) {
        if (i == option) {
          newFilter.push(true);
        } else {
          newFilter.push(false);
        }
      }
      return newFilter;
    });
  }
  function filterIt(){
    if(filter[1]){
      
        const newData = data.filter((element)=>{
          if(element.isActive){
            return element
          }
        })
        return newData
    
    }else if(filter[2]){
      
        const newData = data.filter((element)=>{
          if(!element.isActive){
            return element
          }
        })
        return newData

    }
  }
  const buttonStyles = ` 
	px-4 py-2 
	rounded-4xl 
	w-20 h-10 
	flex 
	justify-center 
	items-center
	shadow-black transition duration-200 
  sm:h-13 sm:w-13 focus:outline-2 
	outline-amber-700 outline-offset-3 
	focus:shadow-none 
	sm:rounded-3xl
	sm:w-23
	`;
  const buttonSelected = "bg-[hsl(3,71%,56%)] dark:bg-[hsl(3,77%,44%)]";
  const buttonNotSelected = `
  bg-white 
  dark:bg-[hsl(226,11%,37%))]
  dark:hover:bg-blue-900
	hover:shadow-sm hover:bg-gray-400
  `;
  const usedData = isFiltered?filterIt():data
  const Cards = usedData.map((element) => { 
    return <Card {...element} setData={setData} />;
  });
  return (
    <main
      className="
		text-[hsl(226,25%,17%)] p-5 
		dark:text-[hsl(200,60%,99%)]   
		flex flex-col  items-center w-full
    gap-10
    pb-10
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
          <div>
            <input type="radio" name="filter" hidden checked={filter[0]} />
            <button
              className={
                buttonStyles + (filter[0] ? buttonSelected : buttonNotSelected)
              }
              onClick={() => {
                changeFilter(1);
              }}
            >
              All
            </button>
          </div>
          <div>
            <input type="radio" name="filter" hidden checked={filter[1]} />
            <button
              className={
                buttonStyles + (filter[1] ? buttonSelected : buttonNotSelected)
              }
              onClick={() => {
                changeFilter(2);
              }}
            >
              Active
            </button>
          </div>
          <div>
            <input type="radio" name="filter" hidden checked={filter[2]} />
            <button
              className={
                buttonStyles + (filter[2] ? buttonSelected : buttonNotSelected)
              }
              onClick={() => {
                changeFilter(3);
              }}
            >
              Inactive
            </button>
          </div>
        </div>
      </section>
      <section
        className="
      grid 
      grid-cols-[repeat(auto-fit,minmax(300px,1fr))]
      items-center
      gap-10 
      overflow-auto 
      h-130 w-full 
      py-15
      px-5"
      >
        {Cards}
      </section>
    </main>
  );
}
