import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import WhatsAppButton from "../Components/WhatAppButton";
import HeroSectionBackground2 from "../assets/images/Hero Section Background2.jpg";
import HeroSectionBackground3 from "../assets/images/Hero Section Background3.jpg";
import HeroSectionBackground4 from "../assets/images/Hero Section Background4.jpg";
import OffsetPrintingImage from "../assets/images/Offset Printing Image.jpg";
import LargeFormatPrintingImage from "../assets/images/Large Format Printing Image.jpg";
import PromotionalItemsImage from "../assets/images/Promotional Items Image.jpg";
import SignageImage from "../assets/images/Signage Image.jpg";
import TeamMember1Image from "../assets/images/Team Member 1 Image.jpg";
import TeamMember2Image from "../assets/images/Team Member 2 Image.jpg";
import TeamMember3Image from "../assets/images/Team Member 3 Image.jpg";
import Client1Image from "../assets/images/Client 1 Image.jpg";
import Client2Image from "../assets/images/Client 2 Image.jpg";
import Client3Image from "../assets/images/Client 3 Image.jpg";
import Portfolio1Image from "../assets/images/Portfolio 1 Image.jpg";
import Portfolio2Image from "../assets/images/Portfolio 2 Image.jpg";
import Portfolio3Image from "../assets/images/Portfolio 3 Image.jpg";
import Portfolio4Image from "../assets/images/Portfolio 4 Image.jpg";
import Portfolio5Image from "../assets/images/Portfolio 5 Image.jpg";
import Portfolio6Image from "../assets/images/Portfolio 6 Image.jpg";
import Portfolio7Image from "../assets/images/Portfolio 7 Image.jpg";
import Portfolio8Image from "../assets/images/Portfolio 8 Image.jpg";
import Portfolio9Image from "../assets/images/Portfolio 9 Image.jpg";
import Portfolio10Image from "../assets/images/Portfolio 10 Image.jpg";
import Portfolio11Image from "../assets/images/Portfolio 11 Image.jpg";
import Portfolio12Image from "../assets/images/Portfolio 12 Image.jpg";

const Home = () => {
  const navigate = useNavigate();
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const heroImages = [
    HeroSectionBackground2,
    HeroSectionBackground3,
    HeroSectionBackground4,
  ];

  const portfolioItems = [
    {
      category: "Offset Printing",
      items: [
        {
          title: "Brochures for Tech Innovators",
          description: "High-quality brochures for a tech company",
          image: Portfolio1Image,
        },
        {
          title: "Annual Reports for Financial Group",
          description: "Detailed annual reports for a financial institution",
          image: Portfolio2Image,
        },
        {
          title: "Marketing Materials for Retail Chain",
          description: "Eye-catching marketing materials for a retail chain",
          image: Portfolio3Image,
        },
      ],
    },
    {
      category: "Large Format Printing",
      items: [
        {
          title: "Event Banners for Music Festival",
          description: "Large format banners for a music festival",
          image: Portfolio4Image,
        },
        {
          title: "Outdoor Signage for Restaurant",
          description: "Durable outdoor signage for a restaurant",
          image: Portfolio5Image,
        },
        {
          title: "Trade Show Displays for Tech Company",
          description: "Professional trade show displays for a tech company",
          image: Portfolio6Image,
        },
      ],
    },
    {
      category: "Promotional Items",
      items: [
        {
          title: "Custom Branded Merchandise",
          description: "Unique branded merchandise for a startup",
          image: Portfolio7Image,
        },
        {
          title: "Corporate Gifts for Financial Firm",
          description: "Elegant corporate gifts for a financial firm",
          image: Portfolio8Image,
        },
        {
          title: "Promotional Items Campaign",
          description: "Effective promotional items for a marketing campaign",
          image: Portfolio9Image,
        },
      ],
    },
    {
      category: "Signage",
      items: [
        {
          title: "Interior Office Signage",
          description: "Modern interior signage for an office building",
          image: Portfolio10Image,
        },
        {
          title: "Exterior Retail Signage",
          description: "Attractive exterior signage for a retail store",
          image: Portfolio11Image,
        },
        {
          title: "Mall Wayfinding Signage",
          description: "Clear wayfinding signage for a shopping mall",
          image: Portfolio12Image,
        },
      ],
    },
  ];

  const handleServiceClick = (service) => {
    navigate(
      `/services/${service
        .toLowerCase()
        .replace(/ & /g, "-")
        .replace(/ /g, "-")}`
    );
  };

  const handleImageClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const services = [
    {
      name: "Offset Printing",
      description:
        "High-volume, cost-effective printing for brochures, flyers, and more.",
      image: OffsetPrintingImage,
      route: "offset-printing",
    },
    {
      name: "Large Format Printing",
      description: "Eye-catching banners, posters, and vehicle wraps.",
      image: LargeFormatPrintingImage,
      route: "large-format-printing",
    },
    {
      name: "Promotional Items",
      description: "Customized merchandise to boost your brand visibility.",
      image: PromotionalItemsImage,
      route: "promotional-items",
    },
    {
      name: "Industrial & Corporate Signage",
      description: "Durable and impactful signage for businesses and events.",
      image: SignageImage,
      route: "industrial-corporate-signage",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen font-display bg-white text-dark-gray relative">
      <Header isModalOpen={isModalOpen} toggleModal={toggleModal} />
      <main className="flex-grow">
        <section className="relative min-h-[85vh] flex items-end bg-cover bg-center text-black overflow-hidden">
          <div className="absolute inset-0">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                  index === currentHeroImage ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  backgroundImage: `url(${image})`,
                }}
              />
            ))}
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center md:text-left relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent drop-shadow-lg">
                Your Vision, Our Print
              </h1>
              <p className="mt-4 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto md:mx-0 text-black leading-relaxed drop-shadow-md">
                Swiftify Solutions is a premier printing powerhouse, delivering
                cutting-edge offset printing, large format solutions,
                promotional merchandise, and corporate signage with unmatched
                precision and speed. Transform your brand with our world-class
                printing excellence.
              </p>
              <button
                onClick={toggleModal}
                className="mt-8 rounded-lg bg-blue-400 text-white h-12 px-6 text-base font-bold shadow-lg hover:bg-secondary-blue transition-all transform hover:scale-105 cursor-pointer"
              >
                Contact Us Now
              </button>
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-400">
                Comprehensive Printing Solutions
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                We offer a wide range of printing services to cater to diverse
                needs, ensuring top-notch quality and timely delivery.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 bg-blue-200 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                  onClick={() => handleServiceClick(service.name)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleServiceClick(service.name);
                    }
                  }}
                >
                  <div
                    className="w-full h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url(${service.image})` }}
                  ></div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-lg font-semibold text-primary-blue group-hover:text-blue-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-sm text-dark-gray flex-grow">
                      {service.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-400">
                      <span className="text-xs text-secondary-blue font-medium group-hover:underline">
                        Learn More →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Portfolio Section */}
        <section className="py-16 sm:py-24 bg-off-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-400">
                Our Portfolio
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                Explore our diverse range of projects, showcasing our expertise
                in offset printing, large format printing, promotional items,
                and signage.
              </p>
            </div>
            <div className="mt-12 space-y-16">
              {portfolioItems.map((section) => (
                <div key={section.category}>
                  <h3 className="text-2xl font-semibold text-blue-400 mb-8">
                    {section.category}
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {section.items.map((item, index) => (
                      <div
                        key={index}
                        className="group relative overflow-hidden rounded-lg cursor-pointer bg-white shadow-md"
                        onClick={() => handleImageClick(item)}
                      >
                        <img
                          alt={item.title}
                          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                          src={item.image}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6">
                          <h4 className="text-lg font-bold text-white">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-300 mt-1">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Modal for enlarged image */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="relative p-6 rounded-lg max-w-3xl w-full mx-4">
              <button
                className="absolute top-2 right-2 text-4xl text-white hover:text-gray-300"
                onClick={closeModal}
              >
                &times;
              </button>
              <img
                alt={selectedItem.title}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                src={selectedItem.image}
              />
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-bold text-white">
                  {selectedItem.title}
                </h3>
                <p className="text-lg text-white mt-2">
                  {selectedItem.description}
                </p>
              </div>
            </div>
          </div>
        )}
        <section className="bg-gray-100 py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-700">
                Why Choose Swiftify Solutions?
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We are committed to delivering exceptional value to our clients
                through superior quality, efficient service, and competitive
                pricing.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="bg-blue-700 rounded-xl shadow-md p-8">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-emerald-500/20 text-emerald-500">
                  <svg
                    fill="currentColor"
                    height="28"
                    viewBox="0 0 256 256"
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">
                  High-Quality Printing
                </h3>
                <p className="mt-2 text-sm text-gray-100">
                  We use state-of-the-art equipment and premium materials to
                  ensure the best results.
                </p>
              </div>
              <div className="bg-blue-700 rounded-xl shadow-md p-8">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-emerald-500/20 text-emerald-500">
                  <svg
                    fill="currentColor"
                    height="28"
                    viewBox="0 0 256 256"
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
                  </svg>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">
                  Fast Turnaround
                </h3>
                <p className="mt-2 text-sm text-gray-100">
                  Our streamlined processes and dedicated team ensure timely
                  delivery of your projects.
                </p>
              </div>
              <div className="bg-blue-700 rounded-xl shadow-md p-8">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-emerald-500/20 text-emerald-500">
                  <svg
                    fill="currentColor"
                    height="28"
                    viewBox="0 0 256 256"
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM240,56H16a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H240a8,8,0,0,0,8-8V64A8,8,0,0,0,240,56ZM193.65,184H62.35A56.78,56.78,0,0,0,24,145.65v-35.3A56.78,56.78,0,0,0,62.35,72h131.3A56.78,56.78,0,0,0,232,110.35v35.3A56.78,56.78,0,0,0,193.65,184ZM232,93.37A40.81,40.81,0,0,1,210.63,72H232ZM45.37,72A40.81,40.81,0,0,1,24,93.37V72ZM24,162.63A40.81,40.81,0,0,1,45.37,184H24ZM210.63,184A40.81,40.81,0,0,1,232,162.63V184Z"></path>
                  </svg>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">
                  Competitive Pricing
                </h3>
                <p className="mt-2 text-sm text-gray-100">
                  We offer cost-effective solutions without compromising on
                  quality.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-700">
                What Our Clients Say
              </h2>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
              <div className="bg-blue-700 p-8 rounded-xl shadow-md">
                <div className="flex items-center gap-4">
                  <div
                    className="h-12 w-12 rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${Client1Image})` }}
                  ></div>
                  <div>
                    <p className="font-semibold text-white">Ngozi Eze</p>
                    <p className="text-sm text-gray-100">2023-08-15</p>
                  </div>
                </div>
                <div className="flex mt-4 text-emerald-500">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      fill="currentColor"
                      height="20"
                      viewBox="0 0 256 256"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                    </svg>
                  ))}
                </div>
                <p className="mt-4 text-gray-100">
                  "Swiftify Solutions consistently delivers high-quality prints
                  with exceptional attention to detail. Their team is
                  professional and always meets our deadlines."
                </p>
              </div>
              <div className="bg-blue-700 p-8 rounded-xl shadow-md">
                <div className="flex items-center gap-4">
                  <div
                    className="h-12 w-12 rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${Client2Image})` }}
                  ></div>
                  <div>
                    <p className="font-semibold text-white">Emeka Okeke</p>
                    <p className="text-sm text-gray-100">2023-09-20</p>
                  </div>
                </div>
                <div className="flex mt-4 text-emerald-500">
                  {[...Array(4)].map((_, i) => (
                    <svg
                      key={i}
                      fill="currentColor"
                      height="20"
                      viewBox="0 0 256 256"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                    </svg>
                  ))}
                  <svg
                    className="text-gray-300"
                    fill="currentColor"
                    height="20"
                    viewBox="0 0 256 256"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"></path>
                  </svg>
                </div>
                <p className="mt-4 text-gray-100">
                  "We've been using Swiftify Solutions for our large format
                  printing needs, and they always exceed our expectations. Their
                  service is reliable and efficient."
                </p>
              </div>
              <div className="bg-blue-700 p-8 rounded-xl shadow-md">
                <div className="flex items-center gap-4">
                  <div
                    className="h-12 w-12 rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${Client3Image})` }}
                  ></div>
                  <div>
                    <p className="font-semibold text-white">Fatima Bello</p>
                    <p className="text-sm text-gray-100">2023-10-25</p>
                  </div>
                </div>
                <div className="flex mt-4 text-emerald-500">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      fill="currentColor"
                      height="20"
                      viewBox="0 0 256 256"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                    </svg>
                  ))}
                </div>
                <p className="mt-4 text-gray-100">
                  "The promotional items we ordered from Swiftify Solutions were
                  a huge hit at our event. The quality was excellent, and the
                  team was a pleasure to work with."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {/* <WhatsAppButton /> Add the WhatsApp button here */}
    </div>
  );
};

export default Home;
