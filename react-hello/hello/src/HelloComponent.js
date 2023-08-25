import React from "react";
// import  { useState } from "react";
// import App from "./App";
import Parent from "./ChildrenProps/Parent";
import Child from "./ChildrenProps/Child";

//1. online one export default component exists in a module.
const HelloComponent = () => {
    // const [name,setName]=useState("Jitendra");
    // function changeName(){
    //     setName("Ayush");
    // }

return (
    <>
    <div>
        <h1>Hello, I am a functional component!</h1>
        {/* <button onClick={changeName}>Change Name</button><br></br> */}
        {/* <App name={name} company="krenai" /> */}
        {/* <IncreamentDecreamentComponent/> */}
    </div>
    
    <Parent name={"Jitendra"}>
    <Child></Child>
    </Parent>
    </>
);
}
export default HelloComponent;

// const HelloComponents = () => {

//     return (
//         <div>
//             <h1>Hello, I am a functional component!</h1>
//         </div> 
//     );
//     }
//     export default HelloComponents;


// import React, { Component } from 'react';

// class MyComponent extends Component {

// render() {

// return (

// <div>

// <h1>Hello, I am a class component!</h1>

// </div>

// );

// }

// }

// export default MyComponent;



// import React from 'react';

// import MyComponent from './MyComponent'; // Adjust the import path as per your project structure

// const App = () => {

// return (

// <div>

// <h1>Hello, I am the App component!</h1>

// <MyComponent />

// </div>

// );

// };

// export default App;

