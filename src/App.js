import React from "react";
// import Navbar from "./components/navbar";
// import HomeSlider from "./components/homeslider";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import OurCompany from "./pages/OurCompany";
import Inquiry from "./pages/Inquiry";
import ContactUs from "./pages/ContactUs";

import { Route, Routes } from 'react-router-dom';


// function App() {
//   return (
//     <div>
//       <Navbar />
//       <HomeSlider />
//     </div>
//   );
// }

// export default App;

function App() {
  // let component
  // switch (window.location.pathname) {
  //   // case "/":
  //   //   component = <Home />
  //   //   break
  //   case "/services":
  //     component = <Services />
  //     break
  //   case "/gallery":
  //     component = <Gallery />
  //     break
  //   case "/ourcompany":
  //     component = <OurCompany />
  //     break
  //   case "/inquiry":
  //     component = <Inquiry />
  //     break
  //   case "/contactus":
  //     component = <ContactUs />
  //     break
  // }

  return (
    <>
      {/* <Navbar />
      <HomeSlider />  */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/ourcompany" element={<OurCompany />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </div>

    </>
  )

}
export default App