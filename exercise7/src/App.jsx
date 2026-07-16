import { useEffect, useState } from "react"

function App(){
  const [x_axis, setX_axis] = useState(0);
  const [y_axis, setY_axis] = useState(0);

     useEffect(()=>{
      const handleChange = (event)=>{
         setX_axis(event.clientX);
         setY_axis(event.clientY);
      };
      window.addEventListener('mousemove',handleChange)

     },[x_axis,y_axis]);

  return (
    <>
      <h3>Mouse X : {x_axis}</h3>
      <h3>Mouse Y : {y_axis}</h3>
    </>
  )  
}

export default App