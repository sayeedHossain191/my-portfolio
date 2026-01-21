import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/sayeedHossain191",
      label: "GitHub",
    },
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/sayeed-hossain/",
      label: "LinkedIn",
    },
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
  ];

  const contactInfo = [
    { icon: FaLocationDot, text: "Dhaka, Bangladesh" },
    { icon: MdEmail, text: "sayeed.hossain.sagor@gmail.com" },
    { icon: FiPhone, text: "+8801747360201" },
  ];

  return (
    <footer className="bg-base-200 text-base-content py-12 px-6 sm:px-20 flex flex-col items-center gap-10">
      <motion.div
        className="flex gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="glass-card p-3 rounded-full hover:bg-white/20 transition-colors"
          >
            <social.icon className="w-5 h-5 text-white" />
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row gap-6 text-gray-300 items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {contactInfo.map((info, index) => (
          <div key={index} className="flex items-center gap-2">
            <info.icon className="w-5 h-5 text-white" />
            <span>{info.text}</span>
          </div>
        ))}
      </motion.div>

      <motion.div
        className="flex items-center gap-2 text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <span>Made by Sayeed Hossain Sagor</span>
        {/* <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div> */}
      </motion.div>

      <motion.p
        className="text-gray-500 text-sm text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        © {new Date().getFullYear()} All rights reserved.
      </motion.p>
    </footer>
  );
};

export default Footer;
