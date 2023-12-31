import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import HelloComponent from './HelloComponent';
// import Parent from './ChildrenProps/Parent'
// import Child from './ChildrenProps/Child';
// import IncreamentDecreamentComponent from './IncreamentDecreamentComponent/IncreamentDecrementComponent';
// import MultipleState from './MultipleState/MultipleState';
// import Parent from './Comunication/Parent';
// import NewParent from './Comunication/ChiildToChild/NewParent'
// import Forms from './Forms/Forms'
import PokemonInfoPage from './Pokemon/PokemonInfoPage';
import RouteApp from './RouterApp/RouteApp';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App name="jitendra" company="krenai" /> */}
    {/* <HelloComponent/> */}
    {/* <IncreamentDecreamentComponent/> */}
    {/* <MultipleState/> */}

    {/* child to parent and parent to child communiction */}
    {/* <Parent/> */}

    {/* child to child communication */}
    {/* <NewParent/> */}

    {/* forms */}

    {/* <Forms/> */}

    {/* POKEMON */}
    {/* <PokemonInfoPage /> */}

    <BrowserRouter>
    <RouteApp />
    </BrowserRouter>




  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
