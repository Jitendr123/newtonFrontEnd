import { useState } from "react";
import styles from "./NewParent1.module.css";

function Child1(props){
    const {val,counterHandler}=props
    let [counter,setCounter]=useState(val);
    // console.log(counter ,'in child 1', val );
    counter=val;
    const IncreaseHandler=()=>{
        const updated=counter+1;
        setCounter(updated); 
        counterHandler(updated);
    }
    const DecreaseHandler=()=>{
        const updated=counter-1;
        setCounter(updated);
        counterHandler(updated);
    }
    return(
        <>
        <div className={styles.childBox}>child1 <br></br>
            <button onClick={IncreaseHandler}>Increase</button>
            {counter}
            <button onClick={DecreaseHandler}>Decrease</button>
        </div>
        </>
    )
}
export default Child1;