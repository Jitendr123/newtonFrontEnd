import style from '../Style/NavBar.module.css'

function Navbar(){
    const songGener=['Trending Song','Old Song','New Song','Moods & Genre','Top Album','Top PlayList','Podcast']

    return(
        <>
        <div className={style.main}>
            <div className={style.main}>All</div>
            <div className={style.main}>
                {songGener.map((data,index)=><div key={index} className={style.gener}>{data}</div>)}
            </div>
        </div>
        </>
    )

}
export default Navbar;