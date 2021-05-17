import React,{useState} from 'react'

export default function Hooks() {
    const [count,setCount]=useState(0)
    return (
        <div>
            <h1>{count}</h1>
            {/* <button onClick={()=>setCount(count+1)}>click</button> */}
            <button onClick={()=>setCount((prev)=>{
                return prev+4
            })}>click</button>
        </div>
    )
}
