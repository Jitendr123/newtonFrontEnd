import { useSearchParams } from "react-router-dom";
import Dog from './Dog'
import Cat from "./Cat";

function Animal(){
    const param=useSearchParams();
    console.log(param)
    const animalToDisplay = param[0].get("name");
    console.log(animalToDisplay)
    return(
        <>
        <p>hey i am animal</p>
        {animalToDisplay==='dog' && <Dog />}
        {animalToDisplay==='cat' && <Cat />}
        {animalToDisplay!=='dog' && animalToDisplay !=='cat' && (<p>no animal is present here according to your choice</p>)}
        </>
    )
}
export default Animal;