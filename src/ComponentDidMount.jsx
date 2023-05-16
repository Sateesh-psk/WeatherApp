import React,{useState,useEffect} from "react";

function App(){
    const [count,SetCount]=useState(0);
    useEffect(()=>{
        document.title="You Clicked "+count+" times";
    })
    return (
        <div>
            <button onClick={()=>SetCount(count+1)}>Clicked {count} times</button>
        </div>
    )
}
export default App;