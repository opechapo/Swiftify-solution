import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <div className="flex min-h-screen flex-col font-display bg-off-white text-dark-gray">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary-blue">
                Contact Us
              </h1>
              <p className="mt-4 text-lg text-light-gray">
                Get in touch with Swiftify Solutions for your printing needs
              </p>
            </div>
            <div className="mt-12 prose prose-lg max-w-none text-dark-gray bg-white p-8 rounded-lg shadow-xl">
              <p>
                We're here to help you bring your vision to life. Reach out to
                us via phone, email, or the form below to discuss your project
                requirements.
              </p>
              <form className="mt-8 space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-dark-gray"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-lg border-light-gray shadow-sm focus:border-secondary-blue focus:ring focus:ring-secondary-blue focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-dark-gray"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-lg border-light-gray shadow-sm focus:border-secondary-blue focus:ring focus:ring-secondary-blue focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-dark-gray"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="mt-1 block w-full rounded-lg border-light-gray shadow-sm focus:border-secondary-blue focus:ring focus:ring-secondary-blue focus:ring-opacity-50"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-primary-blue text-white h-12 px-6 text-base font-bold shadow-lg hover:bg-secondary-blue transition-all"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
