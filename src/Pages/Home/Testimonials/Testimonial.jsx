import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { useEffect, useState } from "react";


const Testimonial = () => {

    const [reviews, setReviews] = useState([]);

    useEffect( () =>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

    return (
        <section>
            <SectionTitle
                subheading={"What Our Client say"}
                heading={"TESTIMONIALS"}
            ></SectionTitle>
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                        >
                            <div className="m-24">
                                <p>{review.details}</p>
                                <h3 className="text-2xl text-orange-400">{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonial;