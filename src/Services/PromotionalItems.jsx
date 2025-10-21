import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const PromotionalItems = () => {
  const { service } = useParams();

  const promoItems = [
    {
      name: "Branded Mugs",
      description: "Custom printed ceramic or plastic mugs for your brand.",
      category: "Drinkware",
      minOrder: "50 pieces",
      features: [
        "11oz or 15oz capacity",
        "Dishwasher safe",
        "Full color print",
        "Same day proof",
      ],
    },
    {
      name: "T-Shirts & Polos",
      description: "Custom apparel with screen printing or DTG printing.",
      category: "Apparel",
      minOrder: "25 pieces",
      features: [
        "100% cotton",
        "DTG or screen print",
        "Sizes S-5XL",
        "Rush service available",
      ],
    },
    {
      name: "USB Flash Drives",
      description: "Preloaded promotional USB drives with your content.",
      category: "Tech",
      minOrder: "100 pieces",
      features: [
        "4GB - 128GB capacity",
        "Data preloading",
        "Retractable or swivel",
        "Engraving option",
      ],
    },
    {
      name: "Eco Bags",
      description: "Reusable tote bags made from recycled materials.",
      category: "Bags",
      minOrder: "100 pieces",
      features: [
        "420D recycled polyester",
        "Full color print",
        "20L capacity",
        "Custom handles",
      ],
    },
    {
      name: "Power Banks",
      description: "Branded portable chargers for mobile devices.",
      category: "Tech",
      minOrder: "50 pieces",
      features: [
        "5000mAh - 20000mAh",
        "Fast charging",
        "LED display",
        "Multi-device",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen font-display bg-white text-dark-gray">
      <Header />
      <main className="flex-grow">
        <section className="relative bg-gradient-to-r from-green-500 to-emerald-600 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <nav className="text-sm mb-4">
                <Link to="/" className="hover:text-white/80 transition-colors">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <span className="text-white/80">Promotional Items</span>
              </nav>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                Promotional Products
              </h1>
              <p className="text-xl max-w-3xl mx-auto">
                Custom branded merchandise that keeps your business top of mind
                with every use.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
                Boost Your Brand Visibility
              </h2>
              <p className="text-lg text-dark-gray max-w-3xl mx-auto">
                High-quality promotional items customized to your brand with
                fast turnaround and competitive pricing.
              </p>
            </div>

            {/* Category Filter - Simplified */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                "All",
                "Drinkware",
                "Apparel",
                "Tech",
                "Bags",
                "Stationery",
              ].map((cat) => (
                <button
                  key={cat}
                  className="px-6 py-2 rounded-full font-semibold transition-all bg-off-white hover:bg-primary-blue hover:text-white"
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {promoItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center bg-cover bg-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all"></div>
                    <div className="relative z-10 text-center">
                      <div className="text-6xl mb-4">☕</div>
                      <div className="text-2xl font-bold">{item.name}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          item.category === "Tech"
                            ? "bg-purple-100 text-purple-800"
                            : item.category === "Apparel"
                            ? "bg-blue-100 text-blue-800"
                            : item.category === "Drinkware"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {item.category}
                      </span>
                      <span className="text-sm text-secondary-blue font-semibold">
                        Min: {item.minOrder}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-primary-blue mb-3 group-hover:text-blue-400 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-dark-gray mb-4">{item.description}</p>
                    <div className="space-y-2 mb-6">
                      {item.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm">
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
                    <div className="flex gap-2">
                      <button className="flex-1 bg-primary-blue text-white py-3 rounded-lg font-semibold hover:bg-secondary-blue transition-colors">
                        Customize
                      </button>
                      <button className="px-4 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
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
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Make Every Touchpoint Count
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Promotional products have 85% recall rate compared to 22% for TV
              ads. Your brand stays visible 24/7.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">85%</div>
                <div>Brand Recall</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">2.5x</div>
                <div>ROI vs Digital</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">12+ months</div>
                <div>Usage Duration</div>
              </div>
            </div>
            <Link
              to="/contact"
              className="bg-white text-green-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Design Your Campaign
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PromotionalItems;
