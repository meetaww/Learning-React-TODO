import React from 'react'
import Items from './Items'

export default function Box(props) {
    // const items = props.input.map(
    //     (singleData, index) =>{ //this is a doubt, what are these parameters and how is key if key is an ID sort of a thing
    //        return  <Items remove={props.remove} key={index} id={index} item={singleData.item} time={singleData.time} />
    //     }
    // )
    
  return (
    <div className='flex flex-col space-y-1 m-3 '>
         {props.input.map((e, i) => (
           <Items remove={props.remove} key={i} id={i} item={e.item} time={e.time} />
         )) } 

    </div>
  )
}
