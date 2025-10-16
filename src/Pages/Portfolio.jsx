import Header from "../Components/Header";
import Footer from "../Components/Footer";
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

const Portfolio = () => {
  return (
    <div className="flex flex-col min-h-screen font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-text-light dark:text-text-dark">
              Our Portfolio
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-subtext-light dark:text-subtext-dark">
              Explore our diverse range of projects, showcasing our expertise in
              offset printing, large format printing, promotional items, and
              signage. Each project reflects our commitment to quality and
              client satisfaction.
            </p>
          </div>
          <div className="space-y-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-text-light dark:text-text-dark mb-8">
                Offset Printing
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group relative overflow-hidden rounded-lg">
                  <img
                    alt="Brochures for Tech Innovators"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    src={Portfolio1Image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-lg font-bold text-white">
                      Brochures for Tech Innovators
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">
                      High-quality brochures for a tech company
                    </p>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg">
                  <img
                    alt="Annual Reports for Financial Group"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    src={Portfolio2Image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-lg font-bold text-white">
                      Annual Reports for Financial Group
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">
                      Detailed annual reports for a financial institution
                    </p>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg">
                  <img
                    alt="Marketing Materials for Retail Chain"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    src={Portfolio3Image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-lg font-bold text-white">
                      Marketing Materials for Retail Chain
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">
                      Eye-catching marketing materials for a retail chain
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-text-light dark:text-text-dark mb-8">
                Large Format Printing
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group relative overflow-hidden rounded-lg">
                  <img
                    alt="Event Banners for Music Festival"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    src={Portfolio4Image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-lg font-bold text-white">
                      Event Banners for Music Festival
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">
                      Large format banners for a music festival
                    </p>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg">
                  <img
                    alt="Outdoor Signage for Restaurant"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    src={Portfolio5Image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-lg font-bold text-white">
                      Outdoor Signage for Restaurant
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">
                      Durable outdoor signage for a restaurant
                    </p>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg">
                  <img
                    alt="Trade Show Displays for Tech Company"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    src={Portfolio6Image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-lg font-bold text-white">
                      Trade Show Displays for Tech Company
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">
                      Professional trade show displays for a tech company
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-text-light dark:text-text-dark mb-8">
                Promotional Items
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group relative overflow-hidden rounded-lg">
                  <img
                    alt="Custom Branded Merchandise"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    src={Portfolio7Image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-lg font-bold text-white">
                      Custom Branded Merchandise
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">
                      Unique branded merchandise for a startup
                    </p>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg">
                  <img
                    alt="Corporate Gifts for Financial Firm"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    src={Portfolio8Image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-lg font-bold text-white">
                      Corporate Gifts for Financial Firm
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">
                      Elegant corporate gifts for a financial firm
                    </p>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg">
                  <img
                    alt="Promotional Items for Marketing Campaign"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    src={Portfolio9Image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-lg font-bold text-white">
                      Promotional Items Campaign
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">
                      Effective promotional items for a marketing campaign
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-text-light dark:text-text-dark mb-8">
                Signage
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group relative overflow-hidden rounded-lg">
                  <img
                    alt="Interior Signage for Office Building"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    src={Portfolio10Image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-lg font-bold text-white">
                      Interior Office Signage
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">
                      Modern interior signage for an office building
                    </p>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg">
                  <img
                    alt="Exterior Signage for Retail Store"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    src={Portfolio11Image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-lg font-bold text-white">
                      Exterior Retail Signage
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">
                      Attractive exterior signage for a retail store
                    </p>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg">
                  <img
                    alt="Wayfinding Signage for Shopping Mall"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    src={Portfolio12Image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-lg font-bold text-white">
                      Mall Wayfinding Signage
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">
                      Clear wayfinding signage for a shopping mall
                    </p>
                  </div>
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

export default Portfolio;
