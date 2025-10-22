import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  FaLinkedin,
  FaInstagram,
  FaTiktok,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex min-h-screen flex-col font-display bg-off-white text-dark-gray">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary-blue">
                Contact Us
              </h1>
              <p className="mt-4 text-lg text-light-gray">
                Get in touch with Swiftify Solutions for your printing needs
              </p>
            </div>
            <div className="mt-12 prose prose-lg max-w-none text-dark-gray bg-white p-8 rounded-lg shadow-xl">
              <h3 className="text-lg font-bold text-center mb-6">
                Connect With Us
              </h3>
              <div className="flex flex-col gap-8">
                <a
                  href="https://wa.me/+2349067399589"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-600 hover:text-green-300"
                >
                  <FaWhatsapp size={24} />
                  <span>(+234)906-7399-589</span>
                </a>
                <a
                  href="mailto:info@swiftifysolution.com"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                >
                  <FaEnvelope size={24} />
                  <span>info@swiftifysolution.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/swiftify-solution"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                >
                  <FaLinkedin size={24} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://www.instagram.com/swiftify_solution"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-orange-600 hover:text-orange-300"
                >
                  <FaInstagram size={24} />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.tiktok.com/@swiftify_solution"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-black hover:text-grey-800"
                >
                  <FaTiktok size={24} />
                  <span>TikTok</span>
                </a>
                <div className="flex items-center gap-2 text-dark-gray">
                  <FaMapMarkerAlt size={24} />
                  <span>
                    Block F1 shop 373, HFP Eastline shopping complex, Abraham
                    Adesoya, Ajah Lagos
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
