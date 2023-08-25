import {useState} from 'react';
// import styles from '../IncreamentDecreamentComponent/IncreamentDecrementComponent'
// import StudentDetails from '../StudentDetails/Student';

function MultipleState() {

    //states
    // multiple state in single useState() 
    const [counterObj,setCounterObj]=useState({
        counter:0,
        status:"neutral",
        color:"red"
    })

    const { counter,status,color}=counterObj;
    // const [counter,setCounter]=useState(0);
    // const [operand,setOperand]=useState("neutral");

    function increaseNumber(){
        setCounterObj((oldCounterObj)=>{
            return{
                ...oldCounterObj, //to regain the previous property of state we use SPREAD OPERATOR
                counter:oldCounterObj.counter+1,
                status:"increament"
            }
        })
        // setCounter((counter)=>counter= counter+1);
        // setOperand("increament")
    }
    function decreaseNumber(){

        setCounterObj((oldCounterObj)=>{
            return{
                ...oldCounterObj, //to regain the previous property of state we use SPREAD OPERATOR
                counter:oldCounterObj.counter-1,
                status:"decrement"
            }
        })

        // setCounter(counter-1);
        // setOperand("decreament");

    }



    return (
        <>
        <button  onClick={increaseNumber}>+</button>
        {counter}
        <button onClick={decreaseNumber}>-</button>
        <p>{status}</p>
        <p>Color : {color}</p>


        </>
    );

}

export default MultipleState;