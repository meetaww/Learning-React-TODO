import React, { useState } from 'react'
import {BsTrash} from "react-icons/bs"

export default function Items(props) {
    const [done, setDone] = useState(false)

  return (
    <div className='bg-[#e8e8e4]  w-full border-b p-3 flex justify-between select-none '>
        <div>
            <span className='w-[10%] text-zinc-500 pr-3 text-[13px] '>{props.time} </span>
            <span onClick={() => {setDone(!done)}}  className={`${done===true ? 'line-through' : ""} cursor-pointer`}>{props.item}</span>
        </div>
        <div onClick={() =>props.remove(props.id)}  className='cursor-pointer'>
            <BsTrash />
        </div>
    </div>
  )
}
