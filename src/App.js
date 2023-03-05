import { useState } from 'react';
import './App.css';
import Box from './Components/Box';
import Input from './Components/Input';

function App() {
  const [input, setInput] = useState([])

  const addTodo = (item) =>{
    // console.log(item)
    setInput([
      ...input,{
        item,
        time: new Date().toLocaleTimeString()
      }
    ])

  }

  const remove = (id) =>{
    // console.log(id);
    const newTodos = input.filter(
      (d, index) =>{
        if(index !== id){
          return true;
        }
        else{
          return false;
        }
      }
    )
    //state update horha yaha
    setInput(newTodos) //wo space bhi hatana h--yaa fir ek kuch quote rkh denge
  }

  // console.log(input);

  return (
    <div className="bg-[#ABC798] h-screen w-screen  font-mono flex justify-center items-center  ">
      <div className="mx-auto rounded-xl max-w-xl w-full min-h-[550px] shadow-2xl bg-[#E1DABD] font-mono p-2 ">
        <Input add={addTodo} />

        <Box input={input} remove={remove}/>
      </div>
      
    </div>
  );
}

export default App;
