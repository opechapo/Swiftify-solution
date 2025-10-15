import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Services = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden font-display bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:py-20 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
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
                      src="/assets/images/offset-printing1.jpg"
                    />
                  </div>
                  <div className="col-span-1 row-span-1 rounded-lg overflow-hidden">
                    <img
                      alt="Offset Printing Image 2"
                      className="w-full h-full object-cover"
                      src="/assets/images/offset-printing2.jpg"
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
                      src="/assets/images/large-format1.jpg"
                    />
                  </div>
                  <div className="col-span-1 row-span-2 rounded-lg overflow-hidden">
                    <img
                      alt="Large Format Printing Image 2"
                      className="w-full h-full object-cover"
                      src="/assets/images/large-format2.jpg"
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
                      src="/assets/images/promotional-items1.jpg"
                    />
                  </div>
                  <div className="col-span-1 row-span-1 rounded-lg overflow-hidden">
                    <img
                      alt="Promotional Items Image 2"
                      className="w-full h-full object-cover"
                      src="/assets/images/promotional-items2.jpg"
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
                      src="/assets/images/signage1.jpg"
                    />
                  </div>
                  <div className="col-span-1 row-span-2 rounded-lg overflow-hidden">
                    <img
                      alt="Signage Image 2"
                      className="w-full h-full object-cover"
                      src="/assets/images/signage2.jpg"
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
