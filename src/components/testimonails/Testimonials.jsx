import Slider from "react-slick";
import Title from "../Layouts/Title";

const Testimonials = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <section id="testaimonial" className="w-full py-20  border-b-2 border-b-black">
            <Title title="What clients say" desc="Testimonials" />
            <div className="max-w-6xl mx-auto">
                <Slider {...settings}>
                    <div className="w-full  bg-red-500">
                        {/* <div className="w-full h-[500px] flex justify-between">
                            <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-ahadowOne">
                            </div>
                            <div className="w-[60%] h-full border">

                            </div>
                        </div> */}
                    </div>

                </Slider>
            </div>
        </section >
    );
};

export default Testimonials;