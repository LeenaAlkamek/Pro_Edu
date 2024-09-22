/* eslint-disable no-unused-vars */
import React from 'react'
import { FaPlay } from 'react-icons/fa';
// import HeroImg from '../../assets/kids.png';
import { motion } from 'framer-motion';
import { SlideRight } from '../../utility/animation';
import { SlideLeft } from '../../utility/animation';
import { SlideLefts } from '../../utility/animation';

const Hero = () => {
    return (
        <>
            <section>
                <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[550px] relative" >
                    {/* Brand Info */}
                    <div className="flex flex-col justify-center py-14 md:py-0 font-playfair">
                        <div className="text-center md:text-left space-y-6 ">
                            <motion.h1
                                variants={SlideRight(0.6)}
                                initial="hidden"
                                animate="visible"
                                className="text-5xl lg:text-5xl font-bold leading-relaxed xl:leading-normal">Creating the Future Start From <span className="text-secondary">  Here </span> {" "} </motion.h1>
                            <motion.p
                                variants={SlideRight(1.2)}
                                initial="hidden"
                                animate="visible"
                                className="text-gray-600 xl-max-w-[500px]">
                                Programmed Education for child achives the highest levels of creativity , ensures multiple intelligences , and aspires to create an entrepreneurial generation
                            </motion.p>
                            {/* button section */}
                            <motion.div
                                variants={SlideRight(1.5)}
                                initial="hidden"
                                animate="visible"
                                className="flex justify-center items-center gap-8 md:justify-start !mt-4">
                                <button className="primary-btn flex items-center gap-2 "> {" "} Order Now</button>
                                <button className="flex justify-center items-center gap-2 ">
                                    <FaPlay /> Watch Now
                                </button>
                            </motion.div>
                        </div>
                    </div>

                    {/* Hero Image */}
                    {/* <div className="flex justify-center items-center">
                        <motion.img
                           variants={SlideLefts(1.0)}
                            initial="hidden"
                            animate="visible"
                            src={HeroImg} alt="" className="w-[350px] md:w-[550px] xl:w-[700px] drop-shadow" />
                    </div> */}
                </div>
            </section>
        </>
    );
};

export default Hero