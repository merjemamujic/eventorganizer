import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import slider1 from "../images/slider1.png";
import slider2 from "../images/slider2.png";
import slider3 from "../images/slider3.png";
import slider4 from "../images/slider4.png";
import slider5 from "../images/slider5.png";
import slider6 from "../images/slider6.png";


import "../homeslider.css";

function Slider() {
  return (
    <Carousel className="home__slider">
      <div>
        <img src={slider1} />
      </div>
      {/* <div>
        <img src={slider1} height="800px" width="1440px" />
      </div> */}
      <div>
        <img src={slider2} />
      </div>
      <div>
        <img src={slider3} />
      </div>
      <div>
        <img src={slider4} />
      </div>
      <div>
        <img src={slider5} />
      </div>
      <div>
        <img src={slider6}  />
      </div>
    </Carousel>
  );
}
export default Slider;