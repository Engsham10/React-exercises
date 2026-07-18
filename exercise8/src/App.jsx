import { useEffect, useState } from "react"

function App(){
  const [time, setTime] = useState(30);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isRunning, setIsRunning] = useState(false);
    
  useEffect(()=>{
    let timerId;
    if(isRunning && timeLeft > 0){
      timerId = setInterval(()=>{
           setTimeLeft((prev) => prev - 1);
    },1000)
    }
    return () => clearInterval(timerId)
  },[isRunning, timeLeft])

   const handleStart = () => {
    if(timeLeft > 0){
       setIsRunning(true);
    }      
   }
   const handleStop = () =>{
         setIsRunning(false);
   }
   const handleRestart = () =>{
         setIsRunning(false);
         setTimeLeft(time);
   }
   const handleInputChange = (e) => {
    const value = Number(e.target.value);
    setInitialTime(value);
    setTimeLeft(value);
    setIsRunning(false);
  };
  return (
    <>
      <h3>Countdown Timer</h3>
      <label htmlFor="settime">Set Time(seconds):</label>
      <input type="number" id="settime" value={time} 
      onChange={handleInputChange}/> <br /> <br />
      <label htmlFor="settimeleft">Time left: {timeLeft} seconds </label>
      <br /> <br />
      <button disabled = {isRunning} onClick={handleStart}>Start</button>
      <button disabled = {!isRunning} onClick={handleStop}>Stop</button>
      <button onClick={handleRestart}>Reset</button>
      
    </>
  )  
}

export default App