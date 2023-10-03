import { faBars, faIndianRupeeSign, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import style from './Header.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const appIcon =require('../resources/appImg.png')
function Header(){

    return(
        <>
        <div id={style.header}>
            {/* left div */}
            <div id={style.leftDiv}>
                <div id={style.appIcon}><img src={appIcon} alt='none'/></div>
                <div id={style.appName}>Wynk Music</div>
            </div>
            {/* right div */}
            <div id={style.rightDiv}>
                {/* search bar  */}
                <div >
                    <form className={style.searchContainer}>
                        <FontAwesomeIcon id={style.searchIcon} icon={faMagnifyingGlass} />
                        <input id={style.searchBar} type="text" placeholder="Search Song" name="search"/>
                    </form>
                </div>
                {/* subscription div  */}
                <div id={style.userLogin}>
                    <FontAwesomeIcon id={style.userIcon} icon={faIndianRupeeSign} />
                    <p style={{margin:'auto'}}>Manage Subcription</p>
                </div>
                {/* user login div  */}
                <div id={style.userLogin}>
                    <FontAwesomeIcon id={style.userIcon} icon={faUser} /> 
                    <p style={{margin:'auto'}}>Login</p>
                </div>
                <FontAwesomeIcon id={style.menuIcon} icon={faBars} />
            </div>

        </div>
        </>
    )

}
export default Header;