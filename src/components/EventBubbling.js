import React from 'react'

const  App = ()=> {
    const handleParentClick = (event)=> {
        console.log('Parent event ',event);
    }
    const handleChildClick = (event)=> {
        event.stopPropagation();
        console.log('Child event ',event);
    }
  return (
    <div onClick={handleParentClick}>
        <h1>Welcome</h1>
        <button onClick={handleChildClick}>+</button>
      
    </div>
  )
}

export default App;
