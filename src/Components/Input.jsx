import React, { useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";

export default function Input(props) {
  const inputBox = useRef();

  return (

    <div className="p-3 flex justify-around">
      <input
        type="text"
        placeholder="Enter your data"
        className="shadow-xl p-4  rounded text-neutral-700 focus:outline-none w-[90%] border border-slate-400"
        ref={inputBox}
      />

      <div className="cursor-pointer ml-2 mt-1 rounded-full text-white text-3xl  w-[50px] h-[50px] bg-[#3F6634] flex justify-center items-center " onClick={
            () => {
              inputBox.current.value && 
              props.add(inputBox.current.value)
               inputBox.current.value = "";  //empties the input bar after adding 
               }} >
        <AiOutlinePlus />
      </div>
    </div>
  );
}
