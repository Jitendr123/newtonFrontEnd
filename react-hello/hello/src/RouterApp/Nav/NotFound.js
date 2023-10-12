import { useNavigate } from "react-router-dom"

function NotFound(){

    const navigate=useNavigate()
    
    return(
    <>
    <p>THe page you are looking for, not found</p>
    <button onClick={()=>{
        navigate("/")
    }}>click to go for Home Page</button>
    </>
    )

}
export default NotFound