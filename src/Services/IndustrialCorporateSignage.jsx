import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

// Import images from assets
import IndustrialHeroSection from "../assets/images/IndustrialHeroSection.jpg";
import AcrylicSigns from "../assets/images/IndustrialAcrylic.jpg";
import AluminumCompositePanels from "../assets/images/IndustrialAluminum.jpg";
import LEDSignBoards from "../assets/images/IndustrialLed.jpg";
import DirectionalSigns from "../assets/images/IndustrialDirectional.jpg";
import MonumentSigns from "../assets/images/IndustrialMonument.jpg";
import CompleteSignagePackage from "../assets/images/IndustrialComplete.jpg";
import IndustrialCTASection from "../assets/images/IndustrialCall.jpg";

const IndustrialCorporateSignage = () => {
  const { service } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  const signageProducts = [
    {
      name: "Acrylic Signs",
      description: "Premium 3D letter signs with LED illumination options.",
      type: "Interior/Exterior",
      features: [
        "3mm - 10mm acrylic",
        "LED halo lighting",
        "Brushed metal face",
        "Custom cut letters",
      ],
      durability: "10+ years",
      image: AcrylicSigns,
    },
    {
      name: "Aluminum Composite Panels",
      description: "Weatherproof signage panels for building facades.",
      type: "Exterior",
      features: [
        "4mm ACP panels",
        "Digital print",
        "UV resistant",
        "Easy installation",
      ],
      durability: "15+ years",
      image: AluminumCompositePanels,
    },
    {
      name: "LED Sign Boards",
      description: "High brightness LED signs for maximum visibility.",
      type: "Exterior",
      features: [
        "P10 LED modules",
        "IP65 waterproof",
        "Programmable content",
        "24/7 operation",
      ],
      durability: "5+ years",
      image: LEDSignBoards,
    },
    {
      name: "Directional Signs",
      description: "Clear wayfinding signage for offices and campuses.",
      type: "Interior",
      features: [
        "Brushed aluminum",
        "Vinyl lettering",
        "Braille options",
        "Modular design",
      ],
      durability: "Indoor use",
      image: DirectionalSigns,
    },
    {
      name: "Monument Signs",
      description: "Freestanding signs for business entrances.",
      type: "Exterior",
      features: [
        "Brick/stone base",
        "Illuminated face",
        "Custom dimensions",
        "Foundation included",
      ],
      durability: "20+ years",
      image: MonumentSigns,
    },
  ];

  // Function to handle image click and open modal
  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  // Function to close the modal
  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col min-h-screen font-display bg-white text-dark-gray">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="relative text-white py-20 overflow-hidden"
          style={{
            backgroundImage: `url(${IndustrialHeroSection})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <nav className="text-sm mb-4">
                <Link to="/" className="hover:text-white/80 transition-colors">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <span className="text-white/80">Signage</span>
              </nav>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                Industrial & Corporate Signage
              </h1>
              <p className="text-xl max-w-3xl mx-auto">
                Professional signage solutions that elevate your brand presence
                and guide your customers with style and durability.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
                Professional Signage Solutions
              </h2>
              <p className="text-lg text-dark-gray max-w-3xl mx-auto">
                From corporate lobbies to industrial complexes, our signage
                solutions combine beauty, functionality, and extreme durability.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🏢",
                  title: "Corporate Identity",
                  desc: "Elevate your brand with premium signage.",
                },
                {
                  icon: "🏭",
                  title: "Industrial Grade",
                  desc: "Built to withstand harsh environments.",
                },
                {
                  icon: "💡",
                  title: "LED Illumination",
                  desc: "24/7 visibility with energy efficiency.",
                },
                {
                  icon: "⚙️",
                  title: "Custom Fabrication",
                  desc: "From concept to installation.",
                },
                {
                  icon: "🔧",
                  title: "Easy Maintenance",
                  desc: "Modular designs for quick updates.",
                },
                {
                  icon: "📏",
                  title: "Any Size",
                  desc: "Small plaques to massive facades.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-primary-blue mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-dark-gray">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Signage Solutions Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-8">
                  Our Signage Solutions
                </h2>
                <div className="space-y-8">
                  {signageProducts.map((product, index) => (
                    <div
                      key={index}
                      className="group bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-300 border border-light-gray"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer transition-transform duration-300 group-hover:scale-105"
                        onClick={() => openImageModal(product.image)}
                      />
                      <div className="flex items-start justify-between mb-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            product.type === "Exterior"
                              ? "bg-red-100 text-red-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {product.type}
                        </span>
                        <span className="text-sm font-semibold text-green-600">
                          {product.durability}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-primary-blue mb-3 group-hover:text-blue-400 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-dark-gray mb-6">
                        {product.description}
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <div className="font-semibold text-secondary-blue mb-3">
                            Features:
                          </div>
                          <div className="space-y-2 text-sm">
                            {product.features.map((feature, i) => (
                              <div key={i} className="flex items-center">
                                <svg
                                  className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-3 pt-4 border-t">
                        <button className="flex-1 bg-primary-blue text-white py-3 px-6 rounded-lg font-semibold hover:bg-secondary-blue transition-colors">
                          Get Quote
                        </button>
                        <button className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Complete Signage Package Sidebar */}
              <div className="lg:sticky lg:top-20 self-start">
                <div
                  className="rounded-2xl p-8 text-white"
                  style={{
                    backgroundImage: `url(${CompleteSignagePackage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0"></div>
                  <div className="relative z-10">
                    <div className="text-5xl mb-6">🏢</div>
                    <h3 className="text-2xl font-bold mb-4">
                      Complete Signage Package
                    </h3>
                    <p className="mb-6">
                      From design to installation, we handle everything
                    </p>
                    <div className="space-y-3 mb-8">
                      <div className="flex justify-between">
                        <span>Design</span>
                        <span className="font-bold">✓ Included</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Fabrication</span>
                        <span className="font-bold">✓ Included</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Installation</span>
                        <span className="font-bold">✓ Included</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Warranty</span>
                        <span className="font-bold">5 Years</span>
                      </div>
                    </div>
                    <button className="w-full bg-white text-gray-900 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                      Free Site Survey
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action (CTA) Section */}
        <section
          className="bg-gray-900 text-white py-16 sm:py-24"
          style={{
            backgroundImage: `url(${IndustrialCTASection})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Your Sign, Our Expertise
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90 text-black">
              Complete signage solutions from concept to installation with
              industry-leading warranties and support.
            </p>
            <div className="grid md:grid-cols-3 gap-15 max-w-4xl mx-auto mb-12 text-left">
              <div>
                <div className="text-3xl mb-3">🎨</div>
                <h3 className="font-bold mb-2 text-black">Custom Design</h3>
                <p className="text-black">
                  Professional designers create signage that matches your brand
                  perfectly.
                </p>
              </div>
              <div>
                <div className="text-3xl mb-3">🏗️</div>
                <h3 className="font-bold mb-2 text-black">
                  Expert Installation
                </h3>
                <p className="text-black">
                  Certified installers ensure perfect placement and structural
                  integrity.
                </p>
              </div>
              <div>
                <div className="text-3xl mb-3">🛠️</div>
                <h3 className="font-bold mb-2 text-black">Maintenance</h3>
                <p className="text-black">
                  Regular maintenance and repair services keep your signage
                  looking new.
                </p>
              </div>
            </div>
            <Link
              to="/contact"
              className="bg-blue-400 px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 transition-all transform hover:scale-105 inline-block"
            >
              Schedule Consultation
            </Link>
          </div>
        </section>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={closeImageModal}
          >
            <div className="relative max-w-4xl w-full p-4">
              <img
                src={selectedImage}
                alt="Magnified Signage"
                className="w-full h-auto rounded-lg border-4 border-primary-blue shadow-2xl"
              />
              <button
                className="absolute top-2 right-2 bg-white text-gray-900 rounded-full p-2 hover:bg-gray-200 transition-colors"
                onClick={closeImageModal}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default IndustrialCorporateSignage;
