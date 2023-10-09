import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import style from '../Banner/BannerSlider.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from 'react';
import Slider from 'react-slick';


function BannerSlider(){
    const [banners,setBanners]=useState();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    useEffect(()=>{
        fetch('https://academics.newtonschool.co/api/v1/music/song', {
            headers:{
                'projectId': '8nbih316dvO1'
            }
        }).then((response)=>response.json()).then((data)=>{
            console.log(data);
            setBanners(data.data);
        })
    },[])
    return(
        <>
            <div className={style.bannerContainer}>
                {/* <button className={style.prevBtn}><FontAwesomeIcon icon={faChevronLeft} /> </button>
                <button className={style.nextBtn}><FontAwesomeIcon icon={faChevronRight} /> </button> */}
                <Slider {...settings}>
                {/* {banners?.map((item) => 
                        <div className={style.banner} key={item._id}> 
                        <img className={style.banner} src={"https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cf94e447ae38c3e33a7253.jpg"} alt="not available"/>
                        <div>abc</div>
                    </div>
                )} */}
                 <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
                </Slider>
            </div>
        </>
    )

}
export default BannerSlider;