import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen font-display bg-white text-dark-gray">
      <Header />
      <main className="flex-grow">
        <section
          className="relative min-h-[60vh] flex items-end bg-cover bg-center text-white"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url("/assets/images/hero-bg.jpg")`,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center md:text-left">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
                Your Vision, Our Print
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-2xl text-white">
                Swiftify Solutions is a leading printing company in Lagos,
                Nigeria, specializing in offset printing, large format printing,
                promotional items, and signage. We deliver high-quality,
                customized printing solutions to meet your business needs.
              </p>
              <button className="mt-8 rounded-lg bg-primary-blue text-white h-12 px-6 text-base font-bold shadow-lg hover:bg-secondary-blue transition-all transform hover:scale-105">
                Get a Quote
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
              <p className="mt-4 text-lg text-dark-gray">
                We offer a wide range of printing services to cater to diverse
                needs, ensuring top-notch quality and timely delivery.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col gap-4 bg-off-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 border border-light-gray">
                <div
                  className="w-full h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url("/assets/images/offset-printing.jpg")`,
                  }}
                ></div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-primary-blue">
                    Offset Printing
                  </h3>
                  <p className="mt-2 text-sm text-dark-gray">
                    High-volume, cost-effective printing for brochures, flyers,
                    and more.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 bg-off-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 border border-light-gray">
                <div
                  className="w-full h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url("/assets/images/large-format.jpg")`,
                  }}
                ></div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-primary-blue">
                    Large Format Printing
                  </h3>
                  <p className="mt-2 text-sm text-dark-gray">
                    Eye-catching banners, posters, and vehicle wraps.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 bg-off-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 border border-light-gray">
                <div
                  className="w-full h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url("/assets/images/promotional-items.jpg")`,
                  }}
                ></div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-primary-blue">
                    Promotional Items
                  </h3>
                  <p className="mt-2 text-sm text-dark-gray">
                    Customized merchandise to boost your brand visibility.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 bg-off-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 border border-light-gray">
                <div
                  className="w-full h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url("/assets/images/signage.jpg")`,
                  }}
                ></div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-primary-blue">
                    Industrial & Corporate Signage
                  </h3>
                  <p className="mt-2 text-sm text-dark-gray">
                    Durable and impactful signage for businesses and events.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-off-white py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-blue">
                Ready to Start Your Project?
              </h2>
              <p className="mt-4 text-lg text-dark-gray">
                Contact us today to discuss your printing needs. Our team is
                ready to assist you with a personalized solution.
              </p>
            </div>
            <div className="mt-8 max-w-xl mx-auto flex justify-center">
              <button className="rounded-lg bg-primary-blue text-white h-14 px-8 text-base font-bold shadow-md hover:bg-secondary-blue transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-blue">
                Meet Our Experts
              </h2>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3 sm:grid-cols-1">
              <div className="text-center">
                <div
                  className="mx-auto h-40 w-40 rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url("/assets/images/team1.jpg")` }}
                ></div>
                <h3 className="mt-6 text-lg font-semibold text-primary-blue">
                  Akinola Adebayo
                </h3>
                <p className="mt-1 text-secondary-blue">
                  Head of Offset Printing
                </p>
              </div>
              <div className="text-center">
                <div
                  className="mx-auto h-40 w-40 rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url("/assets/images/team2.jpg")` }}
                ></div>
                <h3 className="mt-6 text-lg font-semibold text-primary-blue">
                  Chidinma Okoro
                </h3>
                <p className="mt-1 text-secondary-blue">
                  Large Format Printing Specialist
                </p>
              </div>
              <div className="text-center">
                <div
                  className="mx-auto h-40 w-40 rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url("/assets/images/team3.jpg")` }}
                ></div>
                <h3 className="mt-6 text-lg font-semibold text-primary-blue">
                  Ibrahim Musa
                </h3>
                <p className="mt-1 text-secondary-blue">
                  Signage and Promotional Items Expert
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-off-white py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-blue">
                Why Choose Swiftify Solutions?
              </h2>
              <p className="mt-4 text-lg text-dark-gray">
                We are committed to delivering exceptional value to our clients
                through superior quality, efficient service, and competitive
                pricing.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="bg-white rounded-xl shadow-md p-8 border border-light-gray">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-blue/20 text-primary-blue">
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
                <h3 className="mt-6 text-lg font-semibold text-primary-blue">
                  High-Quality Printing
                </h3>
                <p className="mt-2 text-sm text-dark-gray">
                  We use state-of-the-art equipment and premium materials to
                  ensure the best results.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-8 border border-light-gray">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-blue/20 text-primary-blue">
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
                <h3 className="mt-6 text-lg font-semibold text-primary-blue">
                  Fast Turnaround
                </h3>
                <p className="mt-2 text-sm text-dark-gray">
                  Our streamlined processes and dedicated team ensure timely
                  delivery of your projects.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-8 border border-light-gray">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-blue/20 text-primary-blue">
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
                <h3 className="mt-6 text-lg font-semibold text-primary-blue">
                  Competitive Pricing
                </h3>
                <p className="mt-2 text-sm text-dark-gray">
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
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-blue">
                What Our Clients Say
              </h2>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
              <div className="bg-off-white p-8 rounded-xl shadow-md border border-light-gray">
                <div className="flex items-center gap-4">
                  <div
                    className="h-12 w-12 rounded-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url("/assets/images/client1.jpg")`,
                    }}
                  ></div>
                  <div>
                    <p className="font-semibold text-primary-blue">Ngozi Eze</p>
                    <p className="text-sm text-light-gray">2023-08-15</p>
                  </div>
                </div>
                <div className="flex mt-4 text-primary-blue">
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
                <p className="mt-4 text-dark-gray">
                  "Swiftify Solutions consistently delivers high-quality prints
                  with exceptional attention to detail. Their team is
                  professional and always meets our deadlines."
                </p>
              </div>
              <div className="bg-off-white p-8 rounded-xl shadow-md border border-light-gray">
                <div className="flex items-center gap-4">
                  <div
                    className="h-12 w-12 rounded-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url("/assets/images/client2.jpg")`,
                    }}
                  ></div>
                  <div>
                    <p className="font-semibold text-primary-blue">
                      Emeka Okeke
                    </p>
                    <p className="text-sm text-light-gray">2023-09-20</p>
                  </div>
                </div>
                <div className="flex mt-4 text-primary-blue">
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
                    className="text-light-gray"
                    fill="currentColor"
                    height="20"
                    viewBox="0 0 256 256"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"></path>
                  </svg>
                </div>
                <p className="mt-4 text-dark-gray">
                  "We've been using Swiftify Solutions for our large format
                  printing needs, and they always exceed our expectations. Their
                  service is reliable and efficient."
                </p>
              </div>
              <div className="bg-off-white p-8 rounded-xl shadow-md border border-light-gray">
                <div className="flex items-center gap-4">
                  <div
                    className="h-12 w-12 rounded-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url("/assets/images/client3.jpg")`,
                    }}
                  ></div>
                  <div>
                    <p className="font-semibold text-primary-blue">
                      Fatima Bello
                    </p>
                    <p className="text-sm text-light-gray">2023-10-25</p>
                  </div>
                </div>
                <div className="flex mt-4 text-primary-blue">
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
                <p className="mt-4 text-dark-gray">
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
    </div>
  );
};

export default Home;
