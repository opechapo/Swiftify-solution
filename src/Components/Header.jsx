import { NavLink } from "react-router-dom";
import { useState } from "react";
import swiftifyLogo from "../assets/images/swiftify-logo-image-cropped.jpg"; // Adjust path if needed
import {
  FaLinkedin,
  FaInstagram,
  FaTiktok,
  FaEnvelope,
  FaWhatsapp,
  FaTimes,
  FaBars,
} from "react-icons/fa";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white backdrop-blur-sm border-b border-light-gray">
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src={swiftifyLogo}
              alt="Swiftify Solution Logo"
              className="h-8 w-8 object-contain"
            />
            <h2 className="text-xl font-bold text-blue-500">
              Swiftify Solution
            </h2>
          </NavLink>
          <nav className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-blue-400"
                    : "text-blue-400 hover:text-blue-600"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-blue-400"
                    : "text-blue-400 hover:text-blue-600"
                }`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-blue-400"
                    : "text-blue-400 hover:text-blue-600"
                }`
              }
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-blue-400"
                    : "text-blue-400 hover:text-blue-600"
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-blue-400"
                    : "text-blue-400 hover:text-blue-600"
                }`
              }
            >
              Contact Us
            </NavLink>
          </nav>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleModal}
              className="hidden md:flex items-center justify-center rounded-lg bg-white text-primary-blue h-10 px-5 text-sm font-bold shadow-sm hover:bg-secondary-blue hover:text-white transition-colors"
            >
              Contact Us
            </button>
            <button
              className="md:hidden text-blue-500 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-light-gray">
            <nav className="flex flex-col items-center gap-4 py-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? "text-blue-400"
                      : "text-blue-400 hover:text-blue-600"
                  }`
                }
                onClick={toggleMobileMenu}
              >
                Home
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? "text-blue-400"
                      : "text-blue-400 hover:text-blue-600"
                  }`
                }
                onClick={toggleMobileMenu}
              >
                Services
              </NavLink>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? "text-blue-400"
                      : "text-blue-400 hover:text-blue-600"
                  }`
                }
                onClick={toggleMobileMenu}
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? "text-blue-400"
                      : "text-blue-400 hover:text-blue-600"
                  }`
                }
                onClick={toggleMobileMenu}
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? "text-blue-400"
                      : "text-blue-400 hover:text-blue-600"
                  }`
                }
                onClick={toggleMobileMenu}
              >
                Contact Us
              </NavLink>
              <button
                onClick={toggleModal}
                className="text-sm font-medium text-blue-400 hover:text-blue-600 transition-colors"
                onClick={() => {
                  toggleModal();
                  toggleMobileMenu();
                }}
              >
                Contact Us (Social)
              </button>
            </nav>
          </div>
        )}
      </header>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FaTimes size={24} />
            </button>
            <h3 className="text-lg font-bold text-center mb-6">
              Connect With Us
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="https://www.linkedin.com/company/swiftify-solution"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
              >
                <FaLinkedin size={24} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/swiftify_solution"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
              >
                <FaInstagram size={24} />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.tiktok.com/@swiftify_solution"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
              >
                <FaTiktok size={24} />
                <span>TikTok</span>
              </a>
              <a
                href="mailto:contact@swiftifysolution.com"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
              >
                <FaEnvelope size={24} />
                <span>contact@swiftifysolution.com</span>
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
              >
                <FaWhatsapp size={24} />
                <span>+1 (234) 567-890</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
