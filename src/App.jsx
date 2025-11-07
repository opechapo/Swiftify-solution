import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { VapiWidget } from "@vapi-ai/client-sdk-react";
import "./Styles/VapiWidget.css"; // ← NEW

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
        className="z-30 fixed bottom-4 right-10 md:bottom-4 md:right-10 lg:bottom-4 lg:right-10"
        publicKey="6aee3d91-1969-4e06-afc6-cc7d9a7567a6"
        assistantId="a98f040f-60d4-4448-967e-4c09a36b1329"
        mode="hybrid"
        position="bottom-right"
        theme="dark"
        size="compact"
        accentColor="#1E88E5"
        start-button-text="Start"
        voice-show-transcript="true"
        end-button-text="End Call"
        title="Talk with Swiftify AI"
        chat-first-message="Hey, How can I help you today?"
        chatPlaceholder="Ask about printing or book a call..."
        voiceShowTranscript={true}
        ctaTitle="Swiftify AI ChatBox"
        ctaSubtitle="24/7 Printing Support"
      />
    </Router>
  );
}

export default App;
