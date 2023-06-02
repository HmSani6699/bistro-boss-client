import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import banner1 from '../../../assets/home/banner1.jpg';
import banner2 from '../../../assets/home/banner2.png';
import banner3 from '../../../assets/home/banner3.jpg';
import banner4 from '../../../assets/home/banner4.png';
import banner5 from '../../../assets/home/banner5.png';
import banner6 from '../../../assets/home/banner6.jpg';

const Banner = () => {
    return (
        <div >
            <Carousel className=" text-center">
                <div>
                    <img src={banner6} />
                </div>
                <div>
                    <img src={banner2} />
                </div>
                <div>
                    <img src={banner3} />
                </div>
                <div>
                    <img src={banner4} />
                </div>
                <div>
                    <img src={banner5} />
                </div>
                <div>
                    <img src={banner1} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;