import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Img1 from "../../../assets/home/01.jpg"
import Img2 from "../../../assets/home/02.jpg"
import Img3 from "../../../assets/home/03.png"
import Img4 from "../../../assets/home/04.jpg"
import Img5 from "../../../assets/home/05.png"
import Img6 from "../../../assets/home/06.png"


const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={Img1} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={Img2} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={Img3} />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src={Img4} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={Img5} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={Img6} />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
};

export default Banner;