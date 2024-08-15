import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import bgImg from "../assets/Home-bg.jpg";
import "../css/home.css";
import githubIcon from "../assets/logo.png";
import instgramIcon from "../assets/instagram.png";
import linkedinIcoon from "../assets/linkedin.png";

export default function Home() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    if (isImageLoaded) {
      const timer = setTimeout(() => {
        setIsTextVisible(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isImageLoaded]);

  return (
    <motion.div
      className="bg-gray-500  2xl:ml-4 relative h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isImageLoaded ? { opacity: 10 } : {}}
        transition={{ duration: 2 }}
        // initial={{ width: "0%", scale: 1 }}
        // animate={isImageLoaded ? { width: "100%", scale: 1 } : {}}
        // transition={{ duration: 3, }}
        className="absolute  h-screen w-fill"
      >
        <img
          src={bgImg}
          className="h-screen w-full opacity-90"
          alt=""
          onLoad={() => setIsImageLoaded(true)}
          style={{ display: isImageLoaded ? "block" : "none" }}
        />
      </motion.div>

      {isImageLoaded && isTextVisible && (
        <>
          <motion.div
            className="relative h-12 w-36 items-center justify-center cus-social"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <a
              href="https://github.com/Schinmay31"
              target="_blank"
              className="inline-block m-3"
            >
              <img
                src={githubIcon}
                alt="GitHub"
                className="h-5 2xl:h-6 w-auto opacity-90 hover:opacity-100"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/chinmay-sabnis-3ab528204/"
              target="_blank"
              className="inline-block m-3 "
            >
              <img
                src={linkedinIcoon}
                alt="LinkedIn"
                className="h-5 w-auto 2xl:h-6 opacity-70 hover:opacity-90"
              />
            </a>
            <a
              href="https://www.instagram.com/chinmay.00/"
              target="_blank"
              className="inline-block m-3"
            >
              <img
                src={instgramIcon}
                alt="Instagram"
                className="h-5 w-auto 2xl:h-6 opacity-70 hover:opacity-90"
              />
            </a>
          </motion.div>
          <motion.div
            className="relative h-40 w-80 2xl:h-52 2xl:mt-16  items-center justify-center cus-heading"
            initial={{
              scale: 0.5,
              opacity: 0.5,
              transition: {
                duration: 1,
              },
            }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                duration: 1,
              },
            }}
          >
            <h1 className="text-gray-300 text-2xl 2xl:text-5xl md:text-4xl font-bold">
              Chinmay <br /> Sabnis
            </h1>
            <p className="text-gray-300 2xl:text-lg 2xl:mt-5 mt-2">
              Web Developer Specializing in Backend Development
            </p>
          </motion.div>
          <motion.div
            className="relative h-16 w-4/12 flex 2xl:mt-4 text-gray-300 cus-personal-info"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative mr-6 h-16">
              <p className="text-gray-300 text-sm 2xl:text-lg opacity-90 font-black mt-1">
                Email:
              </p>
              <p className="text-gray-300 text-sm mt-1 2xl:text-lg opacity-60 hover:opacity-90 hover:cursor-pointer">
                sabnischinmay31@gmail.com
              </p>
            </div>
            <div className="relative 2xl:ml-7 h-16 w-48">
              <p className="text-gray-300 text-sm 2xl:text-lg font-black mt-1">
                Phone:
              </p>
              <p className="text-gray-300 text-sm 2xl:text-lg mt-1 opacity-60 hover:opacity-90 hover:cursor-pointer">
                +91 9325310329
              </p>
            </div>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}
