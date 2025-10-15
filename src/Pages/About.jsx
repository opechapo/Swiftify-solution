import Header from "../Components/Header";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col font-display bg-off-white text-dark-gray">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary-blue">
                About Swiftify Solutions
              </h1>
              <p className="mt-4 text-lg text-light-gray">
                Your Partner in Premium Printing
              </p>
            </div>
            <div className="mt-12 aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl bg-white">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url("/assets/images/about-bg.jpg")`,
                }}
              ></div>
            </div>
            <div className="mt-12 prose prose-lg max-w-none text-dark-gray bg-white p-8 rounded-lg shadow-xl">
              <p>
                Swiftify Solutions is a leading printing company based in Lagos,
                Nigeria, specializing in offset printing, large format printing,
                promotional items, and signage. With a commitment to quality and
                customer satisfaction, we deliver exceptional printing solutions
                tailored to meet the unique needs of our clients. Our
                state-of-the-art facility and experienced team ensure every
                project is executed with precision and care.
              </p>
            </div>
            <div className="mt-12 text-center">
              <a
                className="inline-flex items-center justify-center rounded-lg bg-secondary-blue/20 px-6 py-3 text-base font-bold text-secondary-blue transition-colors hover:bg-secondary-blue/30"
                href="/services"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
