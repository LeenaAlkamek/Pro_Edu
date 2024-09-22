/* eslint-disable no-unused-vars */
import React from 'react'
import { FaDumbbell, FaFacebook, FaInstagram, FaLink, FaLinkedinIn } from 'react-icons/fa'
import logo from '../../assets/logo.png';
import { HiLocationMarker } from 'react-icons/hi';

const Foooter = () => {
    return (
        <div className="bg-gradient-to-r from-[#ffffff] to-[#0CF3CC] rounded-t-3xl">
            <div className="container">
                <div className="grid md:grid-cols-4 md:gap-4 py-5 border-t-2 border-gray-300/10 ">
                    {/* Brand info section */}
                    <div className="py-8  space-y-4">
                        <div className="text-xl flex items-center gap-2 font-bold uppercase">
                            <img src={logo} alt="" className="w-[60px] md:w-[80px] xl:w-[90px] " />
                            <div>
                                <p>Programmed</p>
                                <p className="text-secondary">Education</p>
                            </div>
                        </div>
                        <p className="px-5">
                            Education Education Education Education fjw jdfnskn f ek ke ejkfn dfjei lkdjfwpoek
                        </p>
                        <div className=" px-5 flex items-center justify-start gap-5 !mt-6">
                            <a href="#">
                                <HiLocationMarker className="text-3xl" />
                            </a>
                            <a href="#">
                                <FaInstagram className="text-3xl" />
                            </a>
                            <a href="#">
                                <FaFacebook className="text-3xl" />
                            </a>
                            <a href="#">
                                <FaLinkedinIn className="text-3xl" />
                            </a>
                        </div>
                    </div>
                    {/* Footer Section */}
                    <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 md:ml-14">
                        <div className="py-11 px-4 ">
                            <h1 className="sm:text:xl text-xl font-bold sm:text-left text-justify mb-5 ">Important Links</h1>
                            <ul className="flex flex-col gap-3">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Services</a>
                                </li>
                                <li>
                                    <a href="#">Login</a>
                                </li>
                            </ul>
                        </div>
                        <div className="py-11 px-4 ">
                            <h1 className="sm:text:xl text-xl font-bold sm:text-left text-justify mb-5 ">Company Links</h1>
                            <ul className="flex flex-col gap-3">
                                <li>
                                    <a href="#">Our Service</a>
                                </li>
                                <li>
                                    <a href="#">Contacr</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>

                            </ul>
                        </div>             <div className="py-11 px-4 ">
                            <h1 className="sm:text:xl text-xl font-bold sm:text-left text-justify mb-5 ">Resources</h1>
                            <ul className="flex flex-col gap-3">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Services</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Copyright Section */}
                <div className="text-center py-6 border-t-2 border-gray-500/10">
                    <span className="text-sm text-gray-500 opacity-80">@copyright 2024 Eng. Leena Alkamel</span>
                </div>
            </div>
        </div>
    )
}

export default Foooter
