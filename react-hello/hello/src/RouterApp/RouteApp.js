import { Link, NavLink, Route, Routes } from "react-router-dom";
import About from "./Nav/About";
import Carrers from "./Nav/Carrers";
import Contact from "./Nav/Contact";
import Home from "./Nav/Home";
import NotFound from "./Nav/NotFound";
import style from './RouteApp.module.css'
import Animal from "./Animal/Animal";
import Mens from "./MensWear/Mens";
import TopWear from "./MensWear/TopWear";
import BottomWear from "./MensWear/BottomWear";
import RandomWear from "./MensWear/RandomWear";


function RouteApp(){
    return(
        <>
        <div>hello</div>

        <nav>
            <ul>
                <li> <Link to="/about">About</Link></li>
                <li> <Link to="/contact">Contact</Link></li>
                <li> <NavLink to="/carrers"
                    className={(props)=>{
                        const {isActive}=props
                        return isActive?`${style.activeLink}`:''}}>
                        Career</NavLink>
                </li>
                <li> <NavLink to="/animal?name=dog">
                    Animal to Dog</NavLink>
                </li> 
                <li> <NavLink to="/animal?name=cat">
                    Animal to Cat</NavLink>
                </li>   
                <li> <NavLink to="/mens"
                    className={(props)=>{
                        const {isActive}=props
                        return isActive?`${style.activeLink}`:''}}
                        >
                        Mens Wear</NavLink>
                </li>
            </ul>
        </nav>

        <Routes>
            {/* 1st way of routing */}
            <Route path="/" element={<Home />}>{""}</Route> 
            <Route path="/about" element={<About />}>{""}</Route> 
            <Route path="/contact" element={<Contact />}>{""}</Route> 
            <Route path="/carrers" element={<Carrers />}>{""}</Route> 
            <Route path="/*" element={<NotFound/>}>{""}</Route>

            {/* 2nd way of routing */}
            <Route path="/animal" element={<Animal/>}></Route>

            {/* 3rd way of routing */}
            <Route path="/mens" element={<Mens/>}>
                <Route path="topwear" element={<TopWear />}></Route>
                <Route path="bottomwear" element={<BottomWear />}></Route>
                <Route path=":id" element={<RandomWear />}></Route>
            </Route>

        </Routes>
        </>
    )
}
export default RouteApp;