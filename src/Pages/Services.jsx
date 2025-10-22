import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import OffsetPrintingImage from "../assets/images/Offset Printing Image.jpg";
import LargeFormatPrintingImage from "../assets/images/Large Format Printing Image.jpg";
import PromotionalItemsImage from "../assets/images/Promotional Items Image.jpg";
import SignageImage from "../assets/images/Signage Image.jpg";
import OffsetPrintingImage1 from "../assets/images/Offset Printing Image 1.jpg";
import OffsetPrintingImage2 from "../assets/images/Offset Printing Image 2.jpg";
import LargeFormatPrintingImage1 from "../assets/images/Large Format Printing Image 1.jpg";
import LargeFormatPrintingImage2 from "../assets/images/Large Format Printing Image 2.jpg";
import PromotionalItemsImage1 from "../assets/images/Promotional Items Image 1.jpg";
import PromotionalItemsImage2 from "../assets/images/Promotional Items Image 2.jpg";
import SignageImage1 from "../assets/images/Signage Image 1.jpg";
import SignageImage2 from "../assets/images/Signage Image 2.jpg";

const Services = () => {
  const navigate = useNavigate();

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

  const handleServiceClick = (service) => {
    navigate(
      `/services/${service
        .toLowerCase()
        .replace(/ & /g, "-")
        .replace(/ /g, "-")}`
    );
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden font-display bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:py-20 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-black sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Swiftify Solutions offers a comprehensive suite of printing
              services tailored to meet the diverse needs of businesses in Lagos
              and beyond. From high-volume offset printing to eye-catching large
              format graphics, we deliver quality and precision in every
              project.
            </p>
          </div>

          {/* Comprehensive Printing Solutions Section */}
          <div className="mt-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Comprehensive Printing Solutions
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                We offer a wide range of printing services to cater to diverse
                needs, ensuring top-notch quality and timely delivery.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 bg-gray-300 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 border border-light-gray cursor-pointer group"
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
                    <h3 className="text-lg font-semibold text-gray-700 group-hover:text-gray-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-xl text-gray-200 dark:text-gray-400 flex-grow">
                      {service.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-light-gray">
                      <span className="text-l text-blue-600 font-medium group-hover:underline">
                        Learn More →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 space-y-16">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Offset Printing
                </h3>
                <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
                  Our offset printing services are ideal for large print runs,
                  ensuring consistent quality and cost-effectiveness. We handle
                  a wide range of materials, including brochures, flyers,
                  business cards, and more, with meticulous attention to detail.
                </p>
              </div>
              <div className="mt-8 lg:mt-0 lg:w-1/2">
                <div className="grid grid-cols-2 grid-rows-2 gap-4">
                  <div className="col-span-2 row-span-1 rounded-lg overflow-hidden">
                    <img
                      alt="Offset Printing Image 1"
                      className="w-full h-full object-cover"
                      src={OffsetPrintingImage1}
                    />
                  </div>
                  <div className="col-span-1 row-span-1 rounded-lg overflow-hidden">
                    <img
                      alt="Offset Printing Image 2"
                      className="w-full h-full object-cover"
                      src={OffsetPrintingImage2}
                    />
                  </div>
                  <div className="col-span-1 row-span-1 rounded-lg overflow-hidden bg-primary/10 flex items-center justify-center">
                    <p className="text-primary font-bold text-lg">
                      High Volume
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-16">
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Large Format Printing
                </h3>
                <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
                  Make a big impact with our large format printing services. We
                  produce vibrant and durable graphics for banners, posters,
                  billboards, and vehicle wraps, perfect for outdoor advertising
                  and promotional displays.
                </p>
              </div>
              <div className="mt-8 lg:mt-0 lg:w-1/2">
                <div className="grid grid-cols-2 grid-rows-2 gap-4">
                  <div className="col-span-1 row-span-1 rounded-lg overflow-hidden">
                    <img
                      alt="Large Format Printing Image 1"
                      className="w-full h-full object-cover"
                      src={LargeFormatPrintingImage1}
                    />
                  </div>
                  <div className="col-span-1 row-span-2 rounded-lg overflow-hidden">
                    <img
                      alt="Large Format Printing Image 2"
                      className="w-full h-full object-cover"
                      src={LargeFormatPrintingImage2}
                    />
                  </div>
                  <div className="col-span-1 row-span-1 rounded-lg overflow-hidden bg-primary/10 flex items-center justify-center">
                    <p className="text-primary font-bold text-lg">Big Impact</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Promotional Items
                </h3>
                <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
                  Boost your brand visibility with our custom promotional items.
                  We offer a variety of products, including branded pens, mugs,
                  t-shirts, and bags, all customizable with your logo and
                  design.
                </p>
              </div>
              <div className="mt-8 lg:mt-0 lg:w-1/2">
                <div className="grid grid-cols-2 grid-rows-2 gap-4">
                  <div className="col-span-2 row-span-1 rounded-lg overflow-hidden">
                    <img
                      alt="Promotional Items Image 1"
                      className="w-full h-full object-cover"
                      src={PromotionalItemsImage1}
                    />
                  </div>
                  <div className="col-span-1 row-span-1 rounded-lg overflow-hidden">
                    <img
                      alt="Promotional Items Image 2"
                      className="w-full h-full object-cover"
                      src={PromotionalItemsImage2}
                    />
                  </div>
                  <div className="col-span-1 row-span-1 rounded-lg overflow-hidden bg-primary/10 flex items-center justify-center">
                    <p className="text-primary font-bold text-lg">
                      Brand Boost
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-16">
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Signage
                </h3>
                <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
                  Enhance your business presence with professional signage
                  solutions. We create custom signs for both indoor and outdoor
                  use, including storefront signs, directional signs, and event
                  signage, tailored to your specific requirements.
                </p>
              </div>
              <div className="mt-8 lg:mt-0 lg:w-1/2">
                <div className="grid grid-cols-2 grid-rows-2 gap-4">
                  <div className="col-span-1 row-span-1 rounded-lg overflow-hidden">
                    <img
                      alt="Signage Image 1"
                      className="w-full h-full object-cover"
                      src={SignageImage1}
                    />
                  </div>
                  <div className="col-span-1 row-span-2 rounded-lg overflow-hidden">
                    <img
                      alt="Signage Image 2"
                      className="w-full h-full object-cover"
                      src={SignageImage2}
                    />
                  </div>
                  <div className="col-span-1 row-span-1 rounded-lg overflow-hidden bg-primary/10 flex items-center justify-center">
                    <p className="text-primary font-bold text-lg">Visibility</p>
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

export default Services;
