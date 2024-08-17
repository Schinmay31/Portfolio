import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import elika1Img from "../assets/elika-1.png";
import elika2Img from "../assets/elika-2.png";
import elika3Img from "../assets/elika-3.png";
import socailbeeImg from "../assets/social-bee1.png";
import codehub1Img from "../assets/codehub-1.png";
import codehub2Img from "../assets/codehub-2.png";
import codehub3Img from "../assets/codehub-3.png";
import "../css/contact.css";

const images = [elika1Img, elika2Img, elika3Img];
const codeHubImg = [codehub1Img, codehub2Img, codehub3Img];

export default function Projects() {
  const [currImg, setCurrImg] = useState(0);
  const [currChImg, setCurrChImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrImg((prevImg) => (prevImg + 1) % images.length);
      setCurrChImg((prevImg2) => (prevImg2 + 1) % codeHubImg.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div className=" w-full h-screen">
      <div className=" w-full h-5/6  flex cus-conctact">
        <motion.div className="w-1/2 h-5/6 ml-1 2xl:ml-7 mt-14">
          <div className="h-fill w-full pb-4   ml-16 border-l-2   border-gray-700">
            <div className="w-full h-9 mt-7 flex ">
              <div className="h-8 w-3/5 mt-4">
                <motion.h2
                  className=" text-2xl md:text-2xl 2xl:text-3xl ml-2  text-gray-700 font-semibold"
                  initial={{ y: -40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  Elika Engginerring
                </motion.h2>
              </div>
              <div className="h-8 w-1/5 ml-20  ">
                <motion.p
                  className="text-sm mt-4 2xl:text-md text-gray-500"
                  initial={{ y: -40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  JUN 2024
                </motion.p>
              </div>
            </div>
            <div className="w-full h-6  ">
              <motion.h4
                className="text-sm 2xl:text-lg ml-2 mt-5 2xl:mt-3 text-gray-600"
                initial={{ x: 150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Backend Developer
              </motion.h4>
            </div>
            <motion.div
              className="w-full h-9"
              initial={{ x: 250, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h4 className="text-sm ml-2 2xl:text-lg  mt-1 2xl:mt-4   text-gray-600">
                Project Link :{" "}
                <a
                  href="https://elikaengineering.com/"
                  target="_blank"
                  className="underline"
                >
                  elikaengineering.com
                </a>
              </h4>
            </motion.div>
            <div className="w-5/6 h-fill md:text-sm 2xl:mt-2 ml-2 text-gray-600 2xl:text-gray-500 ">
              <motion.p
                className="2xl:text-lg 2xl:font-thin text-justify "
                initial={{ y: +40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {" "}
                Developed a comprehensive website for a client’s business,
                integrating an email verification system, a fully accessible
                admin panel, and dynamic job management features. The platform
                allows for seamless activation, deactivation, updating, and
                deletion of job postings, with the ability to download user data
                into Excel and perform soft deletes. The solution was tailored
                to meet the client's specific requirement of allowing
                authenticated users to apply for jobs without a traditional
                login/signup process.
              </motion.p>
            </div>
            <div className="w-5/6 h-6 mt-7   2xl:mt-9 ml-2 text-sm text-gray-600">
              <motion.p
                className="2xl:text-lg 2xl:mt-10"
                initial={{ y: +40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Client : Elika Engginerring{" "}
              </motion.p>
            </div>
          </div>
        </motion.div>
        <motion.div className="w-1/2 h-5/6 ml-1 mt-14"
          initial={{ y: -70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="w-11/12   h-3/5 ml-5 mt-11 border shadow-md rounded-md border-gray-400">
            <AnimatePresence mode="wait">
              <motion.img
                key={currImg}
                src={images[currImg]}
                alt=""
                className="w-full  2xl:h-fill rounded-md object-cover"
               
              />
            </AnimatePresence>
          </div>
          <div className="w-max h-7 mt-8 ml-5 ">
            <p className=" mt-1 text-sm 2xl:text-lg text-gray-600">
              Technologies Used : nodeJs, ExpressJs, MongoDB, ReactJs,
              Tailwind-CSS, AWS-S3
            </p>
          </div>
        </motion.div>
      </div>

      {/* 2 */}

      <div className=" w-full h-4/6 flex cus-conctact">
        <motion.div className="w-1/2 h-full ml-1  mt-4 2xl:ml-7">
          <div className="h-fill w-full ml-16 pb-4 border-l-2 border-gray-700">
            <div className="w-full h-9 mt-2 flex ">
              <div className="h-8 w-3/5 ">
                <motion.h2 
                className=" text-2xl md:text-2xl 2xl:text-3xl ml-2 mt-4  text-gray-700 font-semibold"
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                >
                  SocialBee
                </motion.h2>
              </div>
              <div className="h-8 w-1/5 ml-20 ">
                <p className="text-sm  mt-4 2xl:text-md  text-gray-500">
                  DEC 2023
                </p>
              </div>
            </div>
            <div className="w-full h-6  ">
              <h4 className="text-sm ml-2 mt-5 2xl:text-lg 2xl:mt-3 text-gray-600">
                Backend Developer
              </h4>
            </div>
            <div className="w-full h-9">
              <h4 className="text-sm ml-2 2xl:text-lg 2xl:mt-4 mt-1    text-gray-600">
                Project Link :{" "}
                <a
                  href="https://github.com/Schinmay31/SocialBee-server"
                  target="_blank"
                  className="underline"
                >
                  Github Link
                </a>
              </h4>
            </div>
            <div className="w-5/6 h-fill text-sm  2xl:mt-2  ml-2 text-gray-600 ">
              <p className="2xl:text-lg 2xl:text-gray-500 text-justify">
                {" "}
                Created a dynamic social media app featuring essential
                functionalities for user engagement. The platform allows users
                to log in or sign up, upload photos, and interact with content
                through likes and comments. Additionally, users can follow or
                unfollow others, enabling a customizable social experience. This
                app provides a robust foundation for social interaction and
                content sharing, tailored to enhance user connectivity and
                engagement.
              </p>
            </div>
            <div className="w-5/6 h-6 mt-7 ml-2 text-sm 2xl:text-lg text-gray-600">
              <p className="2xl:mt-10">Client : Personal Project </p>
            </div>
          </div>
        </motion.div>

        <motion.div className="w-1/2 h-5/6 ml-1 mt-4 ">
          <motion.div
            className="w-11/12  h-fill ml-5 mt-7 border shadow-md rounded-md border-gray-400"
            initial={{ y: -70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={socailbeeImg}
              className="w-full h-full rounded-md object-cover"
              alt=""
            />
          </motion.div>
          <div className="w-max h-7 mt-8 ml-5 ">
            <p className=" mt-1 text-sm 2xl:text-lg text-gray-600">
              Technologies Used : ReactJs, nodeJs, ExpressJs, MongoDB, AWS
            </p>
          </div>
        </motion.div>
      </div>

      {/* 3 */}

      <div className=" w-full h-5/6 flex cus-conctact">
        <div className="w-1/2 h-5/6 ml-1 2xl:ml-7 mt-5">
          <div className="h-fill w-full ml-16 pb-4 border-l-2 border-gray-700">
            <div className="w-full h-9 mt-7 flex ">
              <div className="h-8 w-3/5">
                <motion.h2 
                className=" text-2xl mt-3 md:text-2xl 2xl:text-3xl ml-2  text-gray-700 font-semibold"
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                >
                  CodeHub
                </motion.h2>
              </div>
              <div className="h-8 w-1/5 ml-20 ">
                <p className="text-sm mt-4 2xl:text-md text-gray-500">
                  DEC 2022
                </p>
              </div>
            </div>
            <div className="w-full h-6  ">
              <h4 className="text-sm ml-2 mt-5 2xl:mt-3 2xl:text-lg text-gray-600">
                Fullstack Developer
              </h4>
            </div>
            <div className="w-full h-9">
              <h4 className="text-sm ml-2 mt-1 2xl:text-lg  2xl:mt-4  text-gray-600">
                Project Link :{" "}
                <a
                  href="https://github.com/Schinmay31/CodeHub"
                  target="_blank"
                  className="underline"
                >
                  Github Link
                </a>
              </h4>
            </div>
            <div className="w-5/6 h-fill text-sm  ml-2 2xl:mt-2 text-gray-600 ">
              <p className="2xl:text-lg 2xl:text-gray-500 text-justify">
                {" "}
                Developed CodeHUB, a web-based online compiler that enables
                users to write and execute code from any device. Supporting
                multiple programming languages including C, C++, Java, and
                Python, CodeHUB leverages Node.js for robust server-side
                processing and the Compilex library for efficient code
                compilation.
              </p>
            </div>
            <div className="w-5/6 h-6 mt-7 ml-2 text-sm 2xl:text-lg text-gray-600">
              <p className="2xl:mt-10">Client : Personal Project </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-5/6 ml-1 mt-4 ">
          <div className="w-11/12  h-3/5 ml-5 mt-9 border shadow-md rounded-md border-gray-400">
            <AnimatePresence mode="wait">
              <motion.img
                key={currChImg}
                src={codeHubImg[currChImg]}
                alt=""
                className="w-full h-full rounded-md object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>
          <div className="w-max h-7 mt-8 ml-5 ">
            <p className=" mt-1 text-sm 2xl:text-lg text-gray-600">
              Technologies Used : nodeJs, ExpressJs, EJS, HTML, CSS, JS
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
