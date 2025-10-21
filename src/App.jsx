import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import OffsetPrinting from "./Services/OffsetPrinting";
import LargeFormatPrinting from "./Services/LargeFormatPrinting";
import PromotionalItems from "./Services/PromotionalItems";
import IndustrialCorporateSignage from "./Services/IndustrialCorporateSignage";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/services/:service" element={<ServiceDetail />} /> */}
        <Route path="/services/offset-printing" element={<OffsetPrinting />} />
        <Route
          path="/services/large-format-printing"
          element={<LargeFormatPrinting />}
        />
        <Route
          path="/services/promotional-items"
          element={<PromotionalItems />}
        />
        <Route
          path="/services/industrial-corporate-signage"
          element={<IndustrialCorporateSignage />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
