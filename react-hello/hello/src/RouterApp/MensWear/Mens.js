import { NavLink, Outlet } from "react-router-dom"

function Mens(){

    return(
        <>
        <p>in mens section</p>
        <ul>
            <li>
                <NavLink to = 'topWear' > Top Wear </NavLink>
            </li>
            <li>
                <NavLink to = 'bottomWear' > Bottom Wear </NavLink>
            </li>
            <li>
                <NavLink to = '1' > Random Wear </NavLink>
            </li>
        </ul>
        <Outlet/>
        </>
    )
}
export default Mens