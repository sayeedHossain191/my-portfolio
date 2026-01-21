import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import bg1 from "../assets/banner/Black White Grayscale Portfolio Presentation.png";
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";

const Banner = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let interval;
    let timeout;
    const words = ["Sayed Hossain Sagor", "Frontend Developer"];
    const currentWord = words[wordIndex];

    let i = 0;

    interval = setInterval(() => {
      setDisplayText(
        currentWord
          .split("")
          .map((char, idx) =>
            idx <= i
              ? char
              : characters[Math.floor(Math.random() * characters.length)]
          )
          .join("")
      );

      i++;
      if (i > currentWord.length) {
        clearInterval(interval);
        timeout = setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 2000);
      }
    }, 60);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [wordIndex]);

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0"
        >
          <h1 className="text-3xl lg:text-6xl font-bold mb-4">
            Hi, I’m <br />
            <span
              className="
                    text-green-400
                    font-mono
                    inline-block
                    whitespace-nowrap
                    min-w-[22ch]
                    h-[1.2em]
                    leading-[1.2em]
                    text-left
                    align-bottom
                "
            >
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg lg:text-xl mb-6 text-gray-700 dark:text-gray-300"
          >
            I am a Frontend Developer (React.js & Node.js) focused on crafting
            exceptional digital experiences that are fast, accessible, visually
            appealing, and responsive.
          </motion.p>

          <motion.div className="flex flex-wrap gap-4 mb-12">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="glass-card px-8 py-4 rounded-full text-white font-semibold border border-white/20"
              href="#"
            >
              Download Resume
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="glass-card px-8 py-4 rounded-full text-white font-semibold border border-white/20"
            >
              Contact Me
            </motion.button>
          </motion.div>

          <motion.div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="glass-card p-3 rounded-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <social.icon className="w-5 h-5 text-white" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="w-6 h-6 text-white/60" />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
        >
          <img
            src={bg1}
            alt="Portfolio Banner"
            className="rounded-lg shadow-2xl max-w-full lg:max-w-md"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
