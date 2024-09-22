/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { ProductData } from '../../mockData/data'
import { motion } from 'framer-motion'

const TapComp = () => {
    const [ActiveTab, setActiveTab] = useState("All");
    const tabs = ["All", "Taiz", "Aden", "Sana'a"];
    const filterdCards = ActiveTab == "All" ? ProductData : ProductData.filter((card) => card.category == ActiveTab);

    return (
        <>
            <div className="container my-12 md:my-16">
                {/* Tabs button Section */}
                <div className="flex space-x-4 mb-4 p-6">
                    {
                        tabs.map((tab) => (
                            <button key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`py-2 px-4 rounded ${ActiveTab == tab ? "bg-secondary text-white" : "bg-gray-200 text-gray-600"}`}
                            >
                                {tab}
                            </button>
                        ))
                    }
                </div>

                {/* Tabs Card Section  */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        filterdCards.map((card) => (
                            <motion.div
                                id={card.id}
                                key={card.id}
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{  delay: 0.2 }}
                                className="p-4 border rounded shadow-sm space-y-2">
                                <img src={card.image} alt="" className="h-[200px] w-full object-cover"/>
                                <p className="text-xl font-semibold ">{card.title}</p>
                                <p className="text-gray-500">{card.category}</p>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default TapComp
