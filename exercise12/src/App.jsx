import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false)
  
  const Increment = () =>{
        setCount((count) => count + 1);
        setIsRunning(true);
  }
  const Decrement = () =>{
       if(count > 0) {
           setCount((count) => count - 1);
           
       } else{
        setIsRunning(false);
       }
       
  }

  return (
    <>  
        <h2>Count : {count}</h2>
        <button disabled = {!isRunning} onClick={Decrement} >
                  Decrement  
        </button>
        <button onClick={Increment}  >
                Increment  
        </button>
     

      
    </>
  )
}

export default App
