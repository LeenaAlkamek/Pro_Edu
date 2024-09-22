/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import React from 'react'
import { SlideLeft } from '../../utility/animation'

const Banner2 = () => {
    return (
        <div className="container my-14 ">
            <div className="bg-[#f4fbfc] py-14 md:py-24 flex justify-center items-center">
                {/* brand info */}
                <div className=" flex flex-col justify-center text-center space-y-8 lg:px-44 ">
                    <motion.h1
                        variants={SlideLeft(0.5)}
                        initial="hidden"
                        whileInView={"visible"}
                        viewport={{ once: true }}

                        className="text-2xl lg:text-3xl font-bold uppercase">Get 20% Discount On Your First Order , Are You Ready To Buy</motion.h1>
                    <motion.p
                        variants={SlideLeft(0.6)}
                        initial="hidden"
                        whileInView={"visible"}
                        viewport={{ once: true }}
                        className="">we will make sure you get the right and the best quality  of learning for your children</motion.p>

                    <motion.div
                        variants={SlideLeft(0.8)}
                        initial="hidden"
                        whileInView={"visible"}
                        viewport={{ once: true }}

                        className="flex justify-center gap-6">
                        <button className="primary-btn">Learn More</button>
                        <button className="border-2 border-secondary text-secondary font-bold px-5 rounded-lg">Stay in Touch</button>
                    </motion.div>
                </div>
            </div>

        </div>
    )
}

export default Banner2
