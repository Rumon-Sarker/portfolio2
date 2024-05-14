import React, { useState } from 'react'
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from "../Layouts/Title";
import { testimonailsImg1, testimonialsIcon, testimonialsImg2, testimonialsImg3 } from "../../assets";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
            onClick={onClick}
        >
            <HiArrowRight />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
            onClick={onClick}
        >
            <HiArrowLeft />
        </div>
    );
}

const Testimonials = () => {
    const [dotActive, setDocActive] = useState(0);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: (prev, next) => {
            setDocActive(next);
        },
        appendDots: (dots) => (
            <div
                style={{
                    borderRadius: "10px",
                    padding: "10px",
                }}
            >
                <ul
                    style={{
                        display: "flex",
                        gap: "15px",
                        justifyContent: "center",
                        marginTop: "20px",
                    }}
                >
                    {" "}
                    {dots}{" "}
                </ul>
            </div>
        ),
        customPaging: (i) => (
            <div
                style={
                    i === dotActive
                        ? {
                            width: "12px",
                            height: "12px",
                            color: "blue",
                            background: "#ff014f",
                            borderRadius: "50%",
                            cursor: "pointer",
                        }
                        : {
                            width: "12px",
                            height: "12px",
                            color: "blue",
                            background: "gray",
                            borderRadius: "50%",
                            cursor: "pointer",
                        }
                }
            ></div>
        ),
    };

    return (
        <section
            id="testaimonial"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            <div className="flex justify-center items-center text-center">
                <Title title="WHAT CLIENTS SAY" desc="Testimonial" />
            </div>
            <div className="max-w-6xl mx-auto">
                {/* ================ Slider One ================== */}
                <Slider {...settings}>
                    <div className="w-full">
                        <div className="w-full h-auto flex flex-col lg:flex-row justify-between">
                            <div className="w-full lg:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-ahadowOne flex flex-col md:flex-row lg:flex-col gap-8 justify-center md:justify-start lg:justify-center">
                                <img
                                    className="h-72 md:h-32 lg:h-72 rounded-lg object-cover"
                                    src={testimonailsImg1}
                                    alt="testimonialOne"
                                />
                                <div className="w-full flex flex-col justify-end">
                                    <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                                        Dhaka,Bangladesh
                                    </p>
                                    <h3 className="text-2xl font-bold">@ Shakwat Hossin</h3>
                                    <p className="text-base tracking-wide text-gray-500">
                                        COO of BNF Group
                                    </p>
                                </div>
                            </div>
                            <div className="w-full lg:w-[60%] h-full flex flex-col justify-between">
                                <img className="w-20 lg:w-32" src={testimonialsIcon} alt="quote" />
                                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lg:p-8 flex flex-col justify-center gap-4 lg:gap-8">
                                    <div className="flex justify-between lg:items-center py-6 border-b-2 border-b-gray-900">
                                        <div>
                                            <h3 className="text-xl lg:text-2xl font-medium tracking-wide">
                                                Travel Mobile App Design.
                                            </h3>
                                            <p className="text-base text-gray-400 mt-3">
                                                Mar 26, 2022 - Aug 30, 2023
                                            </p>
                                        </div>
                                        <div className="text-yellow-500 flex gap-1">
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                        </div>
                                    </div>
                                    <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                                        I've never met a web developer who truly cares about their clients' success like Rick does.I've never met a web developer who truly cares about their clients' success like Rick does.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="w-full h-auto flex flex-col lg:flex-row justify-between">
                            <div className="w-full lg:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-ahadowOne flex flex-col md:flex-row lg:flex-col gap-8 justify-center md:justify-start lg:justify-center">
                                <img
                                    className="h-72 md:h-32 lg:h-72 rounded-lg object-cover"
                                    src={testimonialsImg2}
                                    alt="testimonialOne"
                                />
                                <div className="w-full flex flex-col justify-end">
                                    <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                                        India
                                    </p>
                                    <h3 className="text-2xl font-bold">@ Shonchita Shen</h3>
                                    <p className="text-base tracking-wide text-gray-500">
                                        Operation Officer
                                    </p>
                                </div>
                            </div>
                            <div className="w-full lg:w-[60%] h-full flex flex-col justify-between">
                                <img className="w-20 lg:w-32" src={testimonialsIcon} alt="quote" />
                                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lg:p-8 flex flex-col justify-center gap-4 lg:gap-8">
                                    <div className="flex justify-between lg:items-center py-6 border-b-2 border-b-gray-900">
                                        <div>
                                            <h3 className="text-xl lg:text-2xl font-medium tracking-wide">
                                                Web App Design.
                                            </h3>
                                            <p className="text-base text-gray-400 mt-3">
                                                Mar 4, 2023 - Aug 30, 2023
                                            </p>
                                        </div>
                                        <div className="text-yellow-500 flex gap-1">
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                        </div>
                                    </div>
                                    <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                                        I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="w-full h-auto flex flex-col lg:flex-row justify-between">
                            <div className="w-full lg:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-ahadowOne flex flex-col md:flex-row lg:flex-col gap-8 justify-center md:justify-start lg:justify-center">
                                <img
                                    className="h-72 md:h-32 lg:h-72 rounded-lg object-cover"
                                    src={testimonialsImg3}
                                    alt="testimonialOne"
                                />
                                <div className="w-full flex flex-col justify-end">
                                    <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                                        uk
                                    </p>
                                    <h3 className="text-2xl font-bold">@Ronibita</h3>
                                    <p className="text-base tracking-wide text-gray-500">
                                        Operation Officer
                                    </p>
                                </div>
                            </div>
                            <div className="w-full lg:w-[60%] h-full flex flex-col justify-between">
                                <img className="w-20 lg:w-32" src={testimonialsIcon} alt="quote" />
                                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lg:p-8 flex flex-col justify-center gap-4 lg:gap-8">
                                    <div className="flex justify-between lg:items-center py-6 border-b-2 border-b-gray-900">
                                        <div>
                                            <h3 className="text-xl lg:text-2xl font-medium tracking-wide">
                                                Agency Mobile App Design.
                                            </h3>
                                            <p className="text-base text-gray-400 mt-3">
                                                Mar 4, 2018 - Aug 30, 2021 test
                                            </p>
                                        </div>
                                        <div className="text-yellow-500 flex gap-1">
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                        </div>
                                    </div>
                                    <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                                        After Rick optimized our website, our traffic increased. We can't thank them enough!After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default Testimonials;