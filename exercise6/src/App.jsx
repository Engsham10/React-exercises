import { useEffect, useState } from "react"

function App(){
  const [greeting, setGreeting] = useState("Hello");
  const [name, setName] = useState("");

  useEffect(()=>{
    name === '' ? document.title = 'Welcome' : document.title = greeting + name;
  },[name,greeting]) 

  return (
    <>
      <h2>Enter your name</h2>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      <h2>Choose a greeting</h2>
      <input type="text" value={greeting} onChange={(e)=> setGreeting(e.target.value)} />
    </>
  )  
}

export default App