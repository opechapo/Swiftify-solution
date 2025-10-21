import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const LargeFormatPrinting = () => {
  const { service } = useParams();

  const largeFormatProducts = [
    {
      name: "Vinyl Banners",
      description:
        "Durable outdoor banners for events, promotions, and advertising.",
      features: [
        "13oz vinyl material",
        "Grommets & hems",
        "Weatherproof",
        "Up to 16ft wide",
      ],
      size: "Any size up to 16ft x 50ft",
    },
    {
      name: "Backlit Film",
      description: "Illuminated signage for maximum visibility day and night.",
      features: [
        "Translucent material",
        "Perfect for light boxes",
        "High resolution",
        "Scratch resistant",
      ],
      size: "Custom sizes available",
    },
    {
      name: "Vehicle Wraps",
      description: "Complete or partial vehicle branding that turns heads.",
      features: [
        "3M or Avery vinyl",
        "5+ year durability",
        "Conforms to curves",
        "Removable option",
      ],
      size: "Full vehicle coverage",
    },
    {
      name: "Fabric Banners",
      description: "Premium fabric banners for indoor events and trade shows.",
      features: [
        "Polyester fabric",
        "Sewn edges & grommets",
        "Washable",
        "Lightweight",
      ],
      size: "Up to 10ft x 20ft",
    },
    {
      name: "Foam Board Signs",
      description:
        "Lightweight, rigid signs perfect for presentations and displays.",
      features: [
        "1/2 inch foam core",
        "Matte or gloss surface",
        "Easy to mount",
        "Indoor use",
      ],
      size: "Up to 4ft x 8ft",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen font-display bg-white text-dark-gray">
      <Header />
      <main className="flex-grow">
        <section className="relative bg-gradient-to-r from-orange-500 to-red-500 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <nav className="text-sm mb-4">
                <Link to="/" className="hover:text-white/80 transition-colors">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <span className="text-white/80">Large Format Printing</span>
              </nav>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                Large Format Printing
              </h1>
              <p className="text-xl max-w-3xl mx-auto">
                Eye-catching banners, posters, vehicle wraps, and signage that
                demand attention and deliver results.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-off-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
                Make a BIG Impact
              </h2>
              <p className="text-lg text-dark-gray max-w-3xl mx-auto">
                Our state-of-the-art large format printers deliver stunning
                visuals up to 16ft wide with vibrant colors and sharp details.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🎯",
                  title: "High Resolution",
                  desc: "1440 DPI printing for crystal clear graphics.",
                },
                {
                  icon: "🚚",
                  title: "Indoor & Outdoor",
                  desc: "UV resistant inks for long-lasting color.",
                },
                {
                  icon: "⚡",
                  title: "Fast Production",
                  desc: "Same day service available for most jobs.",
                },
                {
                  icon: "📏",
                  title: "Any Size",
                  desc: "From small posters to massive billboards.",
                },
                {
                  icon: "💪",
                  title: "Durable Materials",
                  desc: "Premium vinyls and fabrics built to last.",
                },
                {
                  icon: "🎨",
                  title: "Full Color",
                  desc: "CMYK + White ink for unlimited creativity.",
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

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
                  Our Large Format Solutions
                </h2>
                <div className="space-y-6">
                  {largeFormatProducts.map((product, index) => (
                    <div
                      key={index}
                      className="bg-off-white p-6 rounded-xl hover:shadow-md transition-shadow"
                    >
                      <h3 className="text-xl font-bold text-primary-blue mb-3">
                        {product.name}
                      </h3>
                      <p className="text-dark-gray mb-4">
                        {product.description}
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                        <div>
                          <div className="font-semibold text-secondary-blue mb-2">
                            Features:
                          </div>
                          {product.features.map((feature, i) => (
                            <div key={i} className="flex items-center mb-1">
                              <svg
                                className="w-4 h-4 text-green-500 mr-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              {feature}
                            </div>
                          ))}
                        </div>
                        <div>
                          <div className="font-semibold text-secondary-blue mb-2">
                            Sizes:
                          </div>
                          <div className="bg-primary-blue/10 p-3 rounded-lg">
                            <div className="text-sm font-semibold">
                              {product.size}
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className="bg-primary-blue text-white px-6 py-2 rounded-lg font-semibold hover:bg-secondary-blue transition-colors">
                        Order Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-blue to-secondary-blue rounded-2xl p-8 text-white text-center">
                  <div className="text-6xl mb-6">🚀</div>
                  <h3 className="text-2xl font-bold mb-4">
                    Vehicle Wrap Special
                  </h3>
                  <p className="mb-6">
                    Complete vehicle branding starting from
                  </p>
                  <div className="text-4xl font-bold mb-6">₦250,000</div>
                  <button className="bg-white text-primary-blue px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transform Your Brand with Large Format
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              From eye-catching banners to mobile billboards, make your message
              impossible to ignore.
            </p>
            <Link
              to="/contact"
              className="bg-white text-orange-500 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Start Your Project
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LargeFormatPrinting;
