import React, { useState } from 'react'

const  App = ()=> {
    const [count,setCount] = useState(0);
    const handleIncrement = () => {
       setCount((prevcount)=> prevcount+1);
       setCount((prevcount)=> prevcount+1);
       setCount((prevcount)=> prevcount+1);
    }
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={handleIncrement}>+</button>
      
    </div>
  )
}

export default App;
