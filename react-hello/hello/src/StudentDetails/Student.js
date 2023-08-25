import  './Student.css'

function StudentDetails(props){
    const {name,grade,year}=props
    return(
        <>
        <div className={'row'}>
            <h1>{name}</h1>
            <h1>{ year}</h1>
            <h1>{grade<5?`fail-${grade}`:`pass- ${grade}`}</h1>
        </div>
        </>
    )
}
export default StudentDetails;