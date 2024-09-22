/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import BgImage from "./assets/bg1.png";
import Equipments from './components/Equipments/Equipments';
import Banner from './components/Banner/Banner';
import BImg1 from "./assets/BImg.png";
import BImg2 from "./assets/BImg2.png";
import TapComp from './components/Tab/TapComp';
import Testimonials from './components/Testimonials/Testimonials';
import Banner2 from './components/Banner/Banner2';
import Foooter from './components/Footer/Foooter';
Foooter

const BannerData = {
  image: BImg1,
  title: "The Importants To Learn You Children",
  subtitle: "The Importants To Learn You Children The Importants To Learn You Children The Importants To Learn You Children ",
  link: "#"
};

const Banner2Data = {
  image: BImg1,
  title: "The Importants To Learn You Children",
  subtitle: "The Importants To Learn You Children The Importants To Learn You Children The Importants To Learn You Children",
  link: "#"
};

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};
const App = () => {
  return (
    <div className="overflow-x-hidden">
      <div style={bgStyle}>
        <Navbar />
        <Hero />
      </div>
      <Equipments />
      <Banner {...BannerData} />
      <TapComp />
      <Banner {...Banner2Data} />
      <Testimonials />
      <Banner2/>
      <Foooter/>
    </div>

  )
}

export default App