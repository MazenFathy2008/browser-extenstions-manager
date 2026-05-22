import { useState } from "react";
export default function Card({ setData, ...props }) {
  const buttonStyles = `
  bg-white 
	px-4 py-2 
	rounded-4xl 
	w-20 h-10 
	flex 
	justify-center 
	items-center
	dark:bg-[hsl(226,11%,37%))]	
	shadow-black
  shadow-[0_0_3px_black]
  transition duration-200 
	hover:shadow-sm hover:bg-gray-400
  sm:h-13 sm:w-13 focus:outline-2 
	outline-amber-700 outline-offset-3 
	focus:shadow-none 
	dark:bg-[hsl(226,11%,37%))]
  dark:hover:bg-blue-900
	sm:rounded-3xl
	sm:w-23
  border
    `;
  function setChecked() {
    setData((prev) => {
      const newData = prev.map((element) => {
        if (element.name == props.name) {
          return {
            ...props,
            isActive: !props.isActive,
          };
        }
        return {
          ...element,
        };
      });
      return newData;
    });
  }
  return (
    <div
      className="
            h-60 
            rounded-2xl 
            shadow-mauve-900  
            dark:bg-[hsl(226,25%,17%)]
            bg-white
            shadow-[0_0_5px_black] flex flex-col 
            p-5
            gap-10
            "
    >
      <div
        className="
      w-full
      flex
      flex-row
      items-start
      justify-between
      gap-5
      h-[50%]
      "
      >
        <img src={props.logo} alt="dev-lens" className="w-15" />
        <div className="flex justify-center flex-col">
          <h3 className="font-bold text-xl text-[hsl(226,25%,17%)] dark:text-white">
            {props.name}
          </h3>
          <p className="text-sm text-[hsl(0,0%,31%)] dark:text-[hsl(0,0%,57%)]">
            {props.description}
          </p>
        </div>
      </div>
      <div className="h-[50%] flex items-center justify-between w-full">
        <button className={buttonStyles}>Remove</button>
        <div>
          <input type="checkbox" className="peer hidden" checked={props.isActive} />
          <div
            className="
          w-15 h-7 bg-[hsl(3,79%,53%)] rounded-4xl 
          before:content-[''] 
          relative 
          before:absolute
          before:w-5
          before:h-5
          before:bg-white
          before:rounded-full
          before:top-[50%]
          before:-translate-y-1/2
          before:left-0.5
          peer-checked:bg-[hsl(226,11%,37%)]
          peer-checked:before:left-9
          before:transtion
          before:duration-200
          transtion
          duration-200
          "
            onClick={setChecked}
          ></div>
        </div>
      </div>
    </div>
  );
}
