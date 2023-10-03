import BannerSlider from '../Banner/BannerSlider';
import Description from '../components/Description';
import Header from '../components/header'
import Navbar from '../components/Navbar'
import ToRedirectMobileApp from '../components/ToRedirectMobileApp';
import Details from '../Footer/Details';
import SongSlidder from '../Song/SongSlidder';
function Home(){
    
    return (
    <>
    <main>
        <Header />
        <Navbar/>
        <BannerSlider/>
        <SongSlidder titile="new release"/>
        <SongSlidder titile="top chart"/>
        <SongSlidder/>
        <SongSlidder/>
        <Description/>
        <ToRedirectMobileApp/>
        <Details/>
    </main>
    </>
    )
}
export default Home;