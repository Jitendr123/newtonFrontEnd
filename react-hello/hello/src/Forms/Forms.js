import { useState } from "react";
import style from './Form.css';


function Forms(){

    let defaultErrorState={
        fnameError:"",
        lnameError:"",
        emailError:"",
        phoneError:"",
        genderError:"",
        dobError:"",
        tcError:""
    }

    const [errorState,setErrorState]=useState(defaultErrorState);
    const [disableBtn,setDisabledBtn]=useState('false')
    const [user,setUser]=useState({
        fname:"",
        lname:"",
        email:"",
        phone:"",
        gender:"male",
        dob:"",
        tc:false
    })


    function submisionHandler(){
        
    }

    function errorHandler(val,key){
        let newkey=key+'Error' 
        val =val+"";
        let value=val+'';
        console.log(!!value.match(/[0-9]/),8888)
        if(val===""){
            console.log(val,key,'kkkk')
            setErrorState((oldErr)=>{
                return {
                    ...oldErr,
                    [newkey]:`${key} should not be empty.`
                }
            })
            setDisabledBtn(true)
        }
        else if(!!value.match(/[0-9]/)){
            setErrorState((oldErr)=>{
                return {
                    ...oldErr,
                    [newkey]:`${key} should be valid.`
                }
            })
            setDisabledBtn(true)
        }
        else if(!value.match(/[0-9]/)){
            setErrorState((oldErr)=>{
                return {
                    ...oldErr,
                    [newkey]:''
                }
            })
            setDisabledBtn(false)
        }
        console.log(disableBtn)
    }
    
    const onChangeHandler=(event,key)=>{
        console.log(event.target.value,"888",key);
        const val=event.target.value;
        setUser((olduser)=>{
            return {
                ...olduser,
                [key]:val
            }
        }
        )
        errorHandler(val,key);
        console.log(user);
    }

    return(
        <>
        <div>Form </div>
        <form onSubmit={submisionHandler}>
            <label>FirstName*</label>
            <input type="text"  onChange={(event)=>onChangeHandler(event,"fname")}></input><br></br>
            <div style={{color:"red"}}>{errorState.fnameError}</div>
            <label>LastName</label>
            <input type="text"  onChange={(event)=>onChangeHandler(event,"lname")}></input><br></br>
            <div style={{color:"red"}}>{errorState.lnameError}</div>
            <label>emil*</label>
            <input type="email"  onChange={(event)=>onChangeHandler(event,"email")}></input><br></br>
            <div style={{color:"red"}}>{errorState.emailError}</div>
            <label>Phone*</label>
            <input type="number"  onChange={(event)=>onChangeHandler(event,"phone")}></input><br></br>
            <div style={{color:"red"}}>{errorState.phoneError}</div>
            <label>Gender*</label>
            <select  onChange={(event)=>onChangeHandler(event,user.gender)}>
                <option value="male"> Male</option>
                <option value="female"> Female</option>
            </select><br></br>
            <div style={{color:"red"}}>{errorState.genderError}</div>
            <label>DOB*</label>
            <input type="date"  onChange={(event)=>onChangeHandler(event,user.dob)}></input><br></br>
            <div style={{color:"red"}}>{errorState.dobError}</div>
            <input type="checkbox" onChange={(event)=>onChangeHandler(event,user.tc)}></input>
            <label>*I accept all Terms and conditions</label><br></br>
            <div style={{color:"red"}}>{errorState.tcError}</div>
            <button disabled={disableBtn}>Submit</button>



        </form>
        </>
    )

}
export default Forms;