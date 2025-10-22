import { useState } from "react";
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
  const [selectedItem, setSelectedItem] = useState(null);

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

  const handleImageClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

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
            {portfolioItems.map((section) => (
              <div key={section.category}>
                <h2 className="text-3xl font-bold tracking-tight text-text-light dark:text-text-dark mb-8">
                  {section.category}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {section.items.map((item, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-lg cursor-pointer"
                      onClick={() => handleImageClick(item)}
                    >
                      <img
                        alt={item.title}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        src={item.image}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-lg font-bold text-white">
                          {item.title}
                        </h3>
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
      </main>

      {/* Modal for enlarged image */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative bg-background-light dark:bg-background-dark p-6 rounded-lg max-w-3xl w-full mx-4">
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

      <Footer />
    </div>
  );
};

export default Portfolio;
