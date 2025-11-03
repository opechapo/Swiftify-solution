import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { VapiWidget } from "@vapi-ai/client-sdk-react"; // <-- Vapi SDK

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
      {/* ==== PAGE CONTENT ==== */}
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

      {/* ==== VAPI SUPPORT WIDGET (appears on every page) ==== */}
      <VapiWidget
        classname="z-50"
        publicKey="6aee3d91-1969-4e06-afc6-cc7d9a7567a6" // replace
        assistantId="a98f040f-60d4-4448-967e-4c09a36b1329" // replace (Swiftify Solution ID)
        mode="hybrid" // voice + chat
        position="bottom-right"
        theme="dark" // matches your dark UI
        accentColor="#10B981" // Tailwind emerald-500 (or your brand color)
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
