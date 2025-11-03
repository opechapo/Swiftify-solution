import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { VapiWidget } from "@vapi-ai/client-sdk-react";
import "./styles/VapiWidget.css"; // ← NEW

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

      {/* RESPONSIVE + COMPACT VAPI WIDGET */}
      <VapiWidget
        className="z-50 fixed bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8"
        publicKey="6aee3d91-1969-4e06-afc6-cc7d9a7567a6"
        assistantId="a98f040f-60d4-4448-967e-4c09a36b1329"
        mode="hybrid"
        position="bottom-right"
        theme="dark"
        accentColor="#10B981"
        title="Swiftify Support"
        chatPlaceholder="Ask about printing, quotes, or book a call..."
        voiceShowTranscript={true}
        ctaTitle="Need Help?"
        ctaSubtitle="24/7 Printing Support"
      />
    </Router>
  );
}

export default App;
