import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import styles from "./NewParent1.module.css";


function NewParent(){
    const[counter,setCounter]=useState(0)

    const counterHandler=(val)=>{
        console.log('parent got info ',counter)
        setCounter(val);
    }

    return (
        <>
        <p>hello baccho, i am your father</p>
        <div className={styles.main}>
        <Child1 val={counter} counterHandler={counterHandler} />
        {counter}
        <Child2 val={counter} counterHandler={counterHandler} />
        </div>
        </>
    );
}
export default NewParent;