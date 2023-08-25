import {useState} from 'react';
import styles from './IncreamentDecreamentComponent.css'
// import StudentDetails from '../StudentDetails/Student';

function IncreamentDecreamentComponent() {

    //states
    // multiple use state 
    const [counter,setCounter]=useState(0);
    const [operand,setOperand]=useState("neutral");


    //variable
    // var number=0;


    function increaseNumber(){
        // number++;
        // console.log(counter);
        setCounter((counter)=>counter= counter+1);
        setOperand("increament")
    }
    function decreaseNumber(){
        // number--;
        // console.log(number);
        // if(counter<=0){
        //     console.log('in if function')
        //     return
        // }else{
        //     console.log('in else function')
        //     setCounter(counter-1);
        // }

        setCounter(counter-1);
        setOperand("decreament");

    }

    //using another component multiple time
    // const students=[{name:'jitendra1',grade:3,year:2},
    //                 {name:'prafull',grade:7,year:3},
    //                 {name:'vivek',grade:9,year:1}]

    // console.log(students)



    return (
        <>
        <button  onClick={increaseNumber}>+</button>
        {/* <>{number}</> */}
        {counter}
        <button onClick={decreaseNumber}>-</button>
        {/* conditional rendering start */}
        {counter < 0 && <h3 className={styles.st} >value is negative</h3>} 
        {/* // above style is not working */}
        {/* instead of this we can use otherthing like this */}
        {counter > 0 ? (<h3 className={'st'} >value is positive</h3>):null }
        {/* // above style is working  */}

        <p>{operand}</p>

    {/* ------------------------------------------------------------- */}




        {/* conditioon rendering end */}
           
        {/* <StudentDetails name={"jitendra"} grade={'5'} year={2}></StudentDetails> */}
        {/* <StudentDetails name={"ayush"} grade={9} year={4}></StudentDetails>
        <StudentDetails name={'sangam'} grade={8} year={3}></StudentDetails> */}

        {/* DOUBT****** here why forEach is not working in place of map.*/}
        {/* {students.map(student=>{
            return (<StudentDetails name={student.name} grade={student.grade} year={student.year}></StudentDetails>)

        })} */}

        {/* ------------------------------------------- */}







        </>
    );

}

export default IncreamentDecreamentComponent;