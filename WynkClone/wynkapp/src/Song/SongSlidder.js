import style from '../Song/SongSlidder.module.css'
function SongSlidder(){
    return(
        <>
        <div className={style.songContainer}>
            <div className={style.ContainerHeading}>
                <h2 className={style.title}>New Release</h2>
                <h4 className={style.more}>more</h4>
            </div>
            <div>
                <div className={style.squareContainer}>
                </div>
                <h2 className={style.songTitle}>Song Titile
                </h2>
            </div>

        </div>
        </>
    )
}
export default SongSlidder;