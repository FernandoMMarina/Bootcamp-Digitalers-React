import { useState } from "react";
export default function CounterRedux () {

    const [counter,setCounter] = useState(10);

    return (
        <>
            <h1>{counter}</h1>
            <button onClick={ ()=> setCounter(counter+1) }>
                +
            </button>
            <button>-</button>
            <button>R</button>
        </>
    );
}
