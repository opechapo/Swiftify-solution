import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-light-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-4">
          <NavLink
            to="/"
            className="text-sm text-dark-gray hover:text-secondary-blue transition-colors"
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className="text-sm text-dark-gray hover:text-secondary-blue transition-colors"
          >
            Services
          </NavLink>
          <NavLink
            to="/portfolio"
            className="text-sm text-dark-gray hover:text-secondary-blue transition-colors"
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/about"
            className="text-sm text-dark-gray hover:text-secondary-blue transition-colors"
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className="text-sm text-dark-gray hover:text-secondary-blue transition-colors"
          >
            Contact
          </NavLink>
        </div>
        <p className="text-sm text-light-gray">
          © 2024 Swiftify Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
