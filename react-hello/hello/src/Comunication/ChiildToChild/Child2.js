import { useState } from "react";
import styles from "./NewParent1.module.css";

// function Child2(props){
//     const {val,counterHandler}=props
//     const [counter,setCounter]=useState(val);
//     const IncreaseHandler=()=>{
//         setCounter((counter)=>(counter+1));
//         //this method took old value but i want to call counterHandler method with updated value
//         counterHandler(counter)
//     }
//     const DecreaseHandler=()=>{
//         setCounter((counter)=>(counter-1));
//         counterHandler(counter);
//     }
function Child2(props) {
    const { val, counterHandler } = props;
    
    let [counter, setCounter] = useState(val);

    counter=val;
    
    const IncreaseHandler = () => {
    
    const updatedCounter = counter + 1;
    
    setCounter(updatedCounter);
    
    counterHandler(updatedCounter);
    
    }
    
    const DecreaseHandler = () => {
    
    const updatedCounter = counter - 1;
    
    setCounter(updatedCounter);
    
    counterHandler(updatedCounter);
    
    }
    return(
        <>
        <div className={styles.childBox}>child2 <br></br>
            <button onClick={IncreaseHandler}>Increase</button>
            {counter}
            <button onClick={DecreaseHandler}>Decrease</button>
        </div>
        </>
    )
}
export default Child2;