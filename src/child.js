import React, { useContext } from "react";
import { CountContext } from "./countContext";

export const Child = () => {
    return (
        <div>
            <SuperChild />
        </div>
    );
}


export const SuperChild = () => {
    const count = useContext(CountContext);
    return (<>
        <div>super child also clicked as may Times as {count.count}</div>
        <button onClick={() => count.setCount(e=>e-1)}>decrement</button>
    </>)
}