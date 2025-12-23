import { useState } from "react";

function App(){

    // let counter=79;
    let [counter,setCounter]=useState(9);
    const addVal=()=>{
        setCounter(counter+1);
    }
    const removeVal=()=>{
        setCounter((prev)=>(prev>0)?prev-1:0);
        // if(counter<=0){
        //     counter=0;
        // }
    }
    return (
        <div>
             <h1>Hello World</h1>
             <h2>From Sanket</h2>
             <h3>Welocme to react ki duniya</h3>

             <h1 >counter={counter}</h1>
             <br />
             <button onClick={addVal}>increment</button>
             <button onClick={removeVal}>decrement</button>
        </div>
       
    );
}
export default App
