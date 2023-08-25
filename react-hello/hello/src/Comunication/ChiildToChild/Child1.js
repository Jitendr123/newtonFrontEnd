import { useState } from "react";
import styles from "./NewParent1.module.css";

function Child1(props){
    const {val,counterHandler}=props
    const [counter,setCounter]=useState(val);
    // setCounter(val);
    // console.log(counter ,'in child 1', val );
    const IncreaseHandler=()=>{
        setCounter((counter)=>(counter=counter+1)); 
        // counterHandler(counter);
    }
    const DecreaseHandler=()=>{
        setCounter((counter)=>(counter-1));
        // counterHandler(counter);
    }
    return(
        <>
        <div className={styles.childBox}>child1 <br></br>
            <button onClick={IncreaseHandler}>Increase</button>
            {val}    
            <button onClick={DecreaseHandler}>Decrease</button>
            {counter}
        </div>
        </>
    )
}
export default Child1;