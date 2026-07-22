
import {useReducer} from "react";


function CounterWithReducer(){
  
    const initialState = {
        countA: 0,
        countB: 0     
    };

    const reducer = (state, action) => {
        
         switch(action.type){
            case 'incrementA':
             return {...state, countA : state.countA+1};
            case 'decrementA':
             return {...state, countA : state.countA-1};
            case 'incrementB':
             return {...state, countB : state.countB+1};
            case 'decrementB':
             return {...state, countB : state.countB-1};
            case 'reset':
             return initialState;
            default:
             return state;
         }

    }
const [state, dispatch] = useReducer(reducer, initialState);

return (
    <>
     <h2>CountA: {state.countA}</h2>
     <button onClick={()=> dispatch({type:'decrementA'})}>-A</button>
     <button onClick={()=> dispatch({type:'incrementA'})}>+A</button>
     <h2>CountB: {state.countB}</h2>
     <button onClick={()=> dispatch({type:'decrementB'})}>-B</button>
     <button onClick={()=> dispatch({type:'incrementB'})}>+B</button>
     <br />
     <button onClick={()=> dispatch({type:'reset'})}>Reset Both</button>
    </>
)





}

export default CounterWithReducer