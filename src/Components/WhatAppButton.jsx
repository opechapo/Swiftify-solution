import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/+2349067399589"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        y: [0, -10, 0], // Bouncing effect (up and down)
        transition: {
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        },
      }}
    >
      <FaWhatsapp size={20} className="mr-2" />
      Chat on WhatsApp
    </motion.a>
  );
};

export default WhatsAppButton;
