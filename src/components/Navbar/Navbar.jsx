import React from 'react';
import { NavbarMenu } from '../../mockData/data';
// import { FaDumbbell } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import ResponsiveMenu from './ResponsiveMenu';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <nav>
                <div className="container flex justify-between items-center py-6">
                    {/* {Logo Section} */}
                    <div className="text-lg flex items-center gap-2 font-medium uppercase">
                        <img src={logo} alt="" className="w-[50px] md:w-[65px] xl:w-[80px] " />
                        <p>Programmed</p>
                        <p className="text-secondary"> Education</p>
                    </div>
                    {/* {Menu Section} */}
                    <div className="hidden md:block">
                        <ul className="flex items-center gap-6 text-gray-400">
                            {
                                NavbarMenu.map((item) => {
                                    return (
                                        <li key={item.key}>
                                            <a href={item.link} className="inline-block py-1 px-3 hover:text-secondary font-semibold">{item.title}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    {/* {Icons Section} */}
                    <div className="flex items-center gap-4">
                        <button className="text-xl hover:bg-secondary hover:text-white rounded-full p-1 duration-200">
                            <CiSearch />
                        </button>
                        <button className="text-xl hover:bg-secondary hover:text-white rounded-full p-1 duration-200">
                            <PiShoppingCartThin />
                        </button>
                        <button className=" hover:bg-secondary text-secondary font-semibold  hover:text-white rounded-md border-2 border-secondary px-6 py-2 duration-200 hidden md:block ">
                            Login
                        </button>
                    </div>

                    {/* Mobile hamburger Menu Section */}
                    <div className="md:hidden"
                        onClick={() => setOpen(!open)}
                    >
                        <MdMenu className="text-4xl" />
                    </div>
                </div>
            </nav>

            {/* Mobile sidebar Section */}
            <ResponsiveMenu open={open} />
        </>
    )
}

export default Navbar
