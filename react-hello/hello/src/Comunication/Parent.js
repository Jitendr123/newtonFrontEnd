import { useState } from "react";
import Child from "./Child";


function Parent(){
    const [info,setInfo]=useState("");
    const user='JITENDRA';
    const childHandler=(info)=>{
        console.log("hello papa i am in trouble ",info);
        setInfo(info);
    }
    return(
        <>
        <p>hey there, i am your parent</p>
        <Child name={user} childHandler={childHandler}/>
        <p>{info}</p>
        </>
    )
}
export default Parent;