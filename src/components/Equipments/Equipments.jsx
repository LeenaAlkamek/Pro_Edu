/* eslint-disable no-unused-vars */
import React from 'react'
import { GrYoga } from 'react-icons/gr'
import { FaDumbbell } from 'react-icons/fa'
import { GiGymBag } from 'react-icons/gi'
import { motion } from 'framer-motion';
import { SlideLeft } from '../../utility/animation'
import { BiBook, BiMath } from 'react-icons/bi';
import { FcMindMap } from 'react-icons/fc';

const EquipmentsData = [
  {
    id: 1,
    title: "math Equipments",
    desc: "  math Equipments math Equipments",
    icon: <BiBook />,
    delay: 0.3,
  },
  {
    id: 2,
    title: "math Equipments",
    desc: "   math Equipments math Equipments",
    icon: <BiMath />,
    delay: 0.6,
  },
  {
    id: 3,
    title: "math Equipments",
    desc: "  math Equipments math Equipments",
    icon: <FcMindMap/>,
    delay: 0.9,
  },
]

const Equipments = () => {
  return (
    <div>
      <div className="container py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair">
          <div className="space-y-2 p-4">
            <h1 className="text-3xl md:text-4xl font-bold">What We Offer For You</h1>
            <p className="text-gray-500"> Progammed Education Progammed Education.</p>
          </div>
          {
            EquipmentsData.map((item) => {
              return (
                <motion.div
                  variants={SlideLeft(item.delay)}
                  initial="hidden"
                  whileInView="visible"
                  key={item.id}
                  className=" bg-gray-100 space-y-2 p-6 hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)] ">
                  <div className="text-4xl">{item.icon}</div>
                  <p className="text-2xl font-semibold">{item.title}</p>
                  <p className="text-gray-500">{item.desc}</p>
                </motion.div>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}

export default Equipments
