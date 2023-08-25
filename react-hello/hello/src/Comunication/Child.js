function Child(props){
    const {name,childHandler}=props;
    return(
        <>
        <p>thank you for letting me know that i am your Child {name}</p>
        <button onClick={()=>{
            childHandler("i am in jhansi")//using the method of parent
        }}>Call parent</button>
        </>
    )
}
export default Child;