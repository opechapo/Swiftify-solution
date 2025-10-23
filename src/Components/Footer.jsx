import { NavLink } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import swiftifyLogo from "../assets/images/swiftify-logo-image-cropped-favicon.jpg"; // Ensure this path matches your project

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About Section */}
          <motion.div
            className="flex flex-col items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={swiftifyLogo}
              alt="Swiftify Solution Logo"
              className="h-12 w-12 mb-4 object-contain"
            />
            <p className="text-sm">
              We are a premier printing company in Lagos, Nigeria, delivering
              cutting-edge offset printing, large format solutions, promotional
              merchandise, and corporate signage with unmatched precision and
              speed.
            </p>
            <div className="flex space-x-4 mt-4">
              <motion.a
                href="https://www.facebook.com/swiftifysolution"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaFacebookF size={20} />
              </motion.a>
              <motion.a
                href="https://www.twitter.com/swiftifysolution"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaTwitter size={20} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/swiftify_solution"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaInstagram size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/swiftify-solution"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaLinkedin size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `text-sm hover:text-blue-400 transition-colors ${
                      isActive ? "text-blue-400" : ""
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `text-sm hover:text-blue-400 transition-colors ${
                      isActive ? "text-blue-400" : ""
                    }`
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) =>
                    `text-sm hover:text-blue-400 transition-colors ${
                      isActive ? "text-blue-400" : ""
                    }`
                  }
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `text-sm hover:text-blue-400 transition-colors ${
                      isActive ? "text-blue-400" : ""
                    }`
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `text-sm hover:text-blue-400 transition-colors ${
                      isActive ? "text-blue-400" : ""
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <span className="text-sm">
                  123 Printing Lane, Ikeja, Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone />
                <span className="text-sm">+234 906 7399 589</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope />
                <span className="text-sm">info@swiftifysolution.com</span>
              </li>
              <li className="text-sm">
                Mon - Fri: 9am - 5pm | Sat: 10am - 3pm
              </li>
            </ul>
          </motion.div>

          {/* Services/Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-sm">Offset Printing</span>
              </li>
              <li>
                <span className="text-sm">Large Format Printing</span>
              </li>
              <li>
                <span className="text-sm">Promotional Items</span>
              </li>
              <li>
                <span className="text-sm">Industrial & Corporate Signage</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section with Copyright */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-sm">
            © 2025 Swiftify Solutions. All rights reserved. Powered by Swiftify
            Design Team in Lagos.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
