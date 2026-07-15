import { useState } from 'react'

function App() {
  const [toggle, setToggleVisible] = useState(false);

  const toggleButton = ()=>{
      setToggleVisible(!toggle);
  }



  return (
    <>
      
        <button
          type="submit"
          onClick={toggleButton}
        >
        {toggle?'OFF':'ON'}
        </button>
    
    </>
  )
}

export default App
