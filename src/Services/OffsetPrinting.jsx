import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

// Image imports
import OffBrochuresFlyers from "../assets/images/off Brochures & Flyers.jpg";
import OffBookletsCatalogs from "../assets/images/off Booklets & Catalogs.jpg";
import OffBusinessCards from "../assets/images/off Business Cards.jpg";
import OffPosters from "../assets/images/off Posters.jpg";
import OffCatalogs from "../assets/images/off Catalogs.jpg";

const OffsetPrinting = () => {
  const { service } = useParams();

  const offsetProducts = [
    {
      name: "Brochures & Flyers",
      description:
        "Multi-panel brochures and single-sheet flyers for marketing and promotions.",
      image: OffBrochuresFlyers,
      features: [
        "Full color printing",
        "Multiple folds available",
        "100gsm - 350gsm paper",
        "Custom sizes",
      ],
    },
    {
      name: "Booklets & Catalogs",
      description:
        "Professional catalogs, magazines, and booklets with perfect binding.",
      image: OffBookletsCatalogs,
      features: [
        "Saddle stitch or perfect binding",
        "High-quality gloss/matt paper",
        "Up to 300+ pages",
        "Custom covers",
      ],
    },
    {
      name: "Business Cards",
      description:
        "Premium business cards on thick cardstock with spot UV and foil options.",
      image: OffBusinessCards,
      features: [
        "300gsm - 450gsm cardstock",
        "Spot UV, foil stamping",
        "Rounded corners available",
        "Same day rush",
      ],
    },
    {
      name: "Posters",
      description: "Large format posters for indoor and outdoor advertising.",
      image: OffPosters,
      features: [
        "Up to A0 size",
        "170gsm - 250gsm art paper",
        "Matte or gloss lamination",
        "Weather resistant",
      ],
    },
    {
      name: "Catalogs",
      description:
        "Comprehensive product catalogs for businesses and retailers.",
      image: OffCatalogs,
      features: [
        "Perfect binding",
        "Full color throughout",
        "Custom page counts",
        "Bulk discounts",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen font-display bg-white text-dark-gray">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 to-blue-400 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <nav className="text-sm mb-4">
                <Link to="/" className="hover:text-white/80 transition-colors">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <span className="text-white/80">Offset Printing</span>
              </nav>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                Offset Printing
              </h1>
              <p className="text-xl max-w-3xl mx-auto">
                High-volume, cost-effective printing solutions for brochures,
                flyers, booklets, business cards, and more with unmatched
                quality and precision.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
                Why Choose Our Offset Printing?
              </h2>
              <p className="text-lg text-dark-gray max-w-3xl mx-auto">
                Perfect for large quantity orders with superior color accuracy
                and consistent quality across every print.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🎨",
                  title: "Superior Color Quality",
                  desc: "CMYK 4-color printing with precise color matching.",
                },
                {
                  icon: "⚡",
                  title: "Fast Turnaround",
                  desc: "From 24 hours for urgent jobs to 3-5 days for bulk.",
                },
                {
                  icon: "💰",
                  title: "Cost Effective",
                  desc: "Best value for quantities over 500 copies.",
                },
                {
                  icon: "📏",
                  title: "Custom Sizes",
                  desc: "Any size from business cards to large posters.",
                },
                {
                  icon: "♻️",
                  title: "Eco-Friendly",
                  desc: "Soy-based inks and recycled paper options.",
                },
                {
                  icon: "🔒",
                  title: "Quality Guarantee",
                  desc: "100% satisfaction or we reprint for free.",
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

        {/* Products Grid */}
        <section className="py-16 sm:py-24 bg-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
                Our Offset Printing Products
              </h2>
              <p className="text-lg text-dark-gray">
                Explore our comprehensive range of offset printing solutions
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offsetProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div
                    className="h-64 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${product.image})` }}
                  ></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary-blue mb-3 group-hover:text-blue-400 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-dark-gray mb-4">{product.description}</p>
                    <div className="space-y-2 mb-6">
                      {product.features.map((feature, i) => (
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
                    <button className="w-full bg-primary-blue text-white py-3 rounded-lg font-semibold hover:bg-secondary-blue transition-colors">
                      Get Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-800 text-white py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Print in Bulk?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get professional offset printing with fast turnaround and
              competitive pricing.
            </p>
            <div className="space-x-4">
              <Link
                to="/contact"
                className="bg-white text-primary-blue px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Get Instant Quote
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-primary-blue transition-colors"
              >
                Contact Sales Team
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OffsetPrinting;
