import React from 'react'
import {useState} from 'react'

export const Counter=({num})=>{
    const [number, setNumber] = useState(num);//why {num} is not written here.
    // console.log(props.number);
    const change=(value)=> (
        setNumber(number+value)
    )
    const mult=(value)=> (
      setNumber(number*value)
  )
  //if else is used above
//   doubt props ke through bheja hua number kaise increment hoga?
return(
    <div className="App">
   { /* here ternary operator is used*/} 
    <h1>{number}</h1>
      <button onClick={()=>change(1)}>Add</button>
      <button onClick={()=>change(-1)}>Sub</button>
      <button onClick={()=>mult(2)}>multiply</button>
    </div>

);
}