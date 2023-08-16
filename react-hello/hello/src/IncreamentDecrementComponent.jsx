import {useState} from 'react';

function IncreamentDecreamentComponent() {

    //states
    const [counter,setCounter]=useState(0);


    //variable
    // var number=0;


    function increaseNumber(){
        // number++;
        // console.log(number);
        setCounter(counter+1);

    }
    function decreaseNumber(){
        // number--;
        // console.log(number);
        setCounter(counter-1);
    }
    return (
        <>
        <button onClick={increaseNumber}>+</button>
        {/* <>{number}</> */}
        {counter}
        <button onClick={decreaseNumber}>-</button>
        </>
    );

}

export default IncreamentDecreamentComponent;