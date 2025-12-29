import React, { useState } from "react";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Programs from "./Component/Programs/Programs";
import Titel from "./Component/Titel/Titel";
import About from "./Component/About/About";
import Campus from "./Component/Campus/Campus";
import Testimonials from "./Component/Testimonials/Testimonials";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import Video from "./Component/Video/Video";


function App() {

  const [playState,setPlayState] = useState(false);
  return (
    <div>
      <Navbar />
      <Hero />
      <Titel subTitel="OUR PROGRAMS" Titel="What We Offer" />
      <Programs />
      <About setPlayState={setPlayState} />
      <Titel subTitel="Gallery" Titel="Campus Photos" />
      <Campus />
      <Titel subTitel="TESTIMONIALS" Titel="what Students Says" />
      <Testimonials />
      <Titel subTitel="CONTECT US" Titel="Get in Touch" />
      <Contact />
      <Footer />
      <Video playState={playState} setPlayState={setPlayState}/>
    </div>
  );
}

export default App;
