import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import style from '../Banner/BannerSlider.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function BannerSlider(){
    return(
        <>
        <div className={style.bannerContainer}>
            <div className={style.banner}>
                <button className={style.prevBtn}><FontAwesomeIcon icon={faChevronLeft} /> </button>
                hello
                <button className={style.nextBtn}><FontAwesomeIcon icon={faChevronRight} /> </button>
            </div>
        </div>
        </>
    )

}
export default BannerSlider;