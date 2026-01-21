import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0,0,0,0)", "rgba(0,0,0,0.5)"]
  );

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  const socialItems = [
    { icon: <FaGithub />, href: "https://github.com/sayeedHossain191" },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/sayeed-hossain/",
    },
  ];

  return (
    <motion.nav style={{ backgroundColor }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-white"
          >
            Sayeed<span className="text-[#70ff00]">Hossain</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={item.to}
                  className="group relative flex items-center gap-2 text-white hover:text-green-300 transition-colors py-2"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-white group-hover:w-full transition-all duration-300 rounded-full shadow-lg shadow-green-400/50" />
                </Link>
              </motion.div>
            ))}

            {socialItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: (navItems.length + index) * 0.1,
                }}
                whileHover={{ scale: 1.2 }}
                className="text-gray-300 hover:text-white text-xl"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden glass-card p-2 rounded-lg"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </motion.button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="glass-card mx-4 mb-4 rounded-2xl">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className="relative block px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 font-medium"
                >
                  {item.label}
                  <motion.span
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-[#70ff00] to-[#00ff85]"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ originX: 0 }}
                  />
                </Link>
              </motion.div>
            ))}

            <div className="flex gap-4 px-4 pt-2">
              {socialItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                  transition={{ delay: (navItems.length + index) * 0.1 }}
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-300 hover:text-white text-xl"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
