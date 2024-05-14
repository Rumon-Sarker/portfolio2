import React from 'react';
import { FaFacebook, FaLinkedin, FaMailBulk, FaMailchimp, FaPhoneVolume, FaTwitter, FaVoicemail } from 'react-icons/fa';
import { FaLocationPin, FaPhotoFilm } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <section className='w-full pt-20 h-auto border-b-2 border-black '>

            <div className='grid grid-cols-3 gap-5'>
                <div className='w-full h-full flex flex-col gap-6'>
                    <img className='w-32' src={""} alt="logo" />
                    <div className="flex gap-8">
                        <span className="bannerIocons"><FaFacebook /></span>
                        <span className="bannerIocons"><FaLinkedin /></span>
                        <span className="bannerIocons"><FaTwitter /></span>
                    </div>
                </div>
                <div className='w-full h-full'>
                    <h1 className='text-xl uppercase text-designColor tracking-wider'>
                        Quick Link
                    </h1>
                    <ul className='flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6'>
                        <li>
                            <Link
                                to='home'
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500} >
                                <span className='w-full text-lg hover:text-designColor group duration-300 cursor-pointer relative'>
                                    Home
                                    <span className='absolute h-[2px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'>
                                    </span>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='features'
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500} >
                                <span className='w-full text-lg hover:text-designColor group duration-300 cursor-pointer relative'>
                                    Features
                                    <span className='absolute h-[2px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'>
                                    </span>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='projects'
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500} >
                                <span className='w-full text-lg hover:text-designColor group duration-300 cursor-pointer relative'>
                                    Projects
                                    <span className='absolute h-[2px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'>
                                    </span>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='testaimonial'
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500} >
                                <span className='w-full text-lg hover:text-designColor group duration-300 cursor-pointer relative'>
                                    Testimonial
                                    <span className='absolute h-[2px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'>
                                    </span>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='w-full h-full'>
                    <h1 className='text-xl uppercase text-designColor tracking-wider'>
                        Inform
                    </h1>
                    <ul className='flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6'>
                        <li className='flex items-center gap-4'>
                            <span className='text-lg hover:text-designColor duration-300 cursor-pointer'>
                                <MdEmail />
                            </span>
                            <span>mdsrrumon1234@gmail.com</span>
                        </li>
                        <li className='flex items-center gap-4'>
                            <span className='text-lg hover:text-designColor duration-300 cursor-pointer'>
                                <FaPhoneVolume />
                            </span>
                            <span>017 8352 6467</span>
                        </li>
                        <li className='flex items-center gap-4'>
                            <span className='text-lg hover:text-designColor duration-300 cursor-pointer'>
                                <FaLocationPin />
                            </span>
                            <span>Dhaka,Bangladesh</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='py-20'>
                <h1 className='text-center text-gray-400'>#2024 - All right reserved by ###Md Rumon Sarker</h1>
            </div>
        </section>
    );
};

export default Footer;