/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { SlideUp } from '../../utility/animation'

const Banner = ({ image, title, subtitle, link }) => {
    return (
        <div className="container">
            <div className="bg-[#f4fbfc]   grid grid-cols-1  md:grid-cols-2 space-y-6 md:space-y-0 py-14">
                {/* Banner Image Section */}
                <div className="flex justify-center items-center">
                    <motion.img
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
                        src={image} alt="" className="w-[200px] md:max-w-[300px] xl:min-w-[400px] h-full object-cover    " />
                </div>
                {/* Banner Text Section  */}
                <div className=" flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px]" >
                    <motion.p
                        variants={SlideUp(0.5)}
                        initial="hidden"
                        whileInView={"visible"}
                        viewport={{ once: true }}
                        className="text-2xl lg:text-4xl font-bold capitalize font-playfair ">{title}</motion.p>
                    <motion.p
                        variants={SlideUp(0.7)}
                        initial="hidden"
                        whileInView={"visible"}
                        viewport={{ once: true }}
                    >{subtitle}</motion.p>

                    <motion.div
                        variants={SlideUp(0.9)}
                        initial="hidden"
                        whileInView={"visible"}
                        viewport={{ once: true }}
                        className="flex justify-center md:justify-start">
                        <button className="primary-btn">Explore More</button>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Banner