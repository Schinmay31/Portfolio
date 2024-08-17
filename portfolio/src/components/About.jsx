import React from "react";
import { motion } from "framer-motion";
import "../css/contact.css";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="w-full h-fit cus-conctact"
    >
      <div className="w-full h-9/12 cus-about mb-10 2xl:mb-20">
        <div className="w-3/4 h-5/6    ml-24 2xl:ml-32 pt-16 2xl:pt-32 ">
          <div className="border-l-2 2xl:border-l-4 border-gray-700 w-full pt-3 pb-3 2xl:pt-4 2xl:pb-5 h-9/12">
            <div className="w-2/4  h-1/3 ml-2 2xl:ml-4  mt-3 ">
              {" "}
              <motion.h1
                className="text-4xl 2xl:text-5xl text-gray-700 font-extrabold"
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                CHINMAY <br /> SABNIS
              </motion.h1>
              <motion.p
                className="text-xl text-gray-500 mt-3 2xl:mt-5 font-thin"
                initial={{ x: +400, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Web Developer Specializing in Backend Development
              </motion.p>
            </div>
            <motion.div
              className="w-4/5 h-1/2   ml-2 2xl:ml-4 "
              initial={{ y: +30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
              <p className="text-md 2xl:text-lg text-gray-600 mt-2 2xl:mt-5 text-justify font-thin">
                I'm a passionate MERN stack developer with a strong foundation
                in building dynamic, responsive web applications. With expertise
                in MongoDB, Express.js, React.js, and Node.js, I thrives on
                creating efficient, scalable solutions that meet the needs of
                both users and businesses. My commitment to clean, maintainable
                code and a deep understanding of data structures and algorithms
                allows them to tackle complex problems with ease. Particularly
                drawn to backend development, I enjoys designing robust server
                architectures and optimizing database interactions to ensure
                seamless, high-performance applications.
              </p>
            </motion.div>
          </div>
        </div>
      </div>


{/*  */}
      <div className="w-full h-5/6  relative cus-conctact  ">
        <div className="w-3/4 h-5/6  mt-10 border-l-2 2xl:border-l-4 border-gray-700 ml-24 2xl:ml-32 2xl:pt-5 2xl:pb-5 pt-3 pb-3  ">
          <div className="w-4/5 h-1/3  ml-2 2xl:ml-4  ">
            {" "}
            <motion.h1 
            className="text-3xl 2xl:text-4xl  text-gray-700 font-bold"
            initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >Skills
            
            </motion.h1>
            <motion.div
              initial={{ x: +400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
            <p className="text-lg 2xl:text-xl text-gray-500 mt-3 2xl:mt-4 font-thin">
              Programming Languages :{" "}
              <span className="text-gray-700">
                {" "}
                Javascript, Typescript, Java, C++
              </span>
            </p>
            <p className="text-lg 2xl:text-xl 2xl:mt-3 text-gray-500 mt-2 font-thin">
              Frontend Technologies :{" "}
              <span className="text-gray-700">
                {" "}
                React, Tailwind CSS, HTML, CSS
              </span>
            </p>
            <p className="text-lg 2xl:text-xl 2xl:mt-3 text-gray-500 mt-2 font-thin">
              Backend Technologies :{" "}
              <span className="text-gray-700">
                {" "}
                Node.js, Express.js, REST-API
              </span>
            </p>
            <p className="text-lg 2xl:text-xl 2xl:mt-3 text-gray-500 mt-2 font-thin">
              Database :{" "}
              <span className="text-gray-700"> MongoDB, PostgreSQL, MySQL</span>
            </p>
            <p className="text-lg 2xl:text-xl 2xl:mt-3 text-gray-500 mt-2 font-thin">
              Deployments and Infrastructure :{" "}
              <span className="text-gray-700">
                {" "}
                Git, GitHub, Vercel, AWS, Docker
              </span>
            </p>
            <p className="text-lg 2xl:text-xl 2xl:mt-3 text-gray-500 mt-2 font-thin">
              Web Dev Tools :{" "}
              <span className="text-gray-700"> Postman, Hyperterminal</span>
            </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="w-full h-3/6 cus-conctact  ">
        <div className="w-3/4 h-1/6 mt-14 2xl:mt-20  2xl:ml-32 ml-24  ">
          <div className="w-4/5 h-1/3 border-l-2 border-gray-700 2xl:border-l-4   2xl:pt-5 2xl:pb-5   pt-3 pb-3  ">
            {" "}
            <motion.h1 
            className="text-3xl 2xl:text-4xl 2xl:ml-4 ml-2 text-gray-700 font-bold "
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            >
            Education
            </motion.h1>
            <motion.p
             className="text-lg 2xl:text-xl ml-2 2xl:ml-4 text-gray-600 mt-3 2xl:mt-4 font-thin"
             initial={{ x: +400, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ duration: 1 }}
             >
              Bachelor of Engineering (B.E.){" "}
              <span className="text-md ml-16">CGPA : 7.68</span>
            </motion.p>
            <motion.p
             className="text-lg 2xl:text-xl ml-2 2xl:ml-4  text-gray-500 mt-2 2xl:mt-3 font-thin"
             initial={{ x: +400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
             >
              Dr. D. Y. Patil College of Enginerring, Akurdi, Pune
            </motion.p>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="w-full mt-14 2xl:mt-20 h-5/6 cus-conctact  ">
        <div className="w-3/4 h-5/6  border-l-2 2xl:border-l-4 border-gray-700 ml-24 2xl:ml-32 pt-3 pb-3  ">
          <div className="w-4/5 h-1/3  2xl:ml-4 ml-2  ">
            {" "}
            <motion.h1
             className="text-3xl  text-gray-700 font-bold"
             initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
             >
              My Coding Profiles
              </motion.h1>
            <p className="text-lg text-gray-600 mt-3 2xl:mt-4 font-thin">
            LeetCode :{" "}
              <span className="text-gray-500">
                {" "}
                <a href="https://leetcode.com/u/chinmay31/" target="_blank" className="underline ">chinmay31</a>
              </span>
            </p>

            <p className="text-lg text-gray-600 mt-2 2xl:mt-3 font-thin">
            GeeksforGeeks :{" "}
              <span className="text-gray-500">
                {" "}
                <a href="https://www.geeksforgeeks.org/user/chinmaysabnis31/" target="_blank" className="underline ">chinmaysabnis31</a>
              </span>
            </p>

            <p className="text-lg text-gray-600 mt-2 2xl:mt-3 font-thin">
            HackerRank :{" "}
              <span className="text-gray-500">
                {" "}
                <a href="https://www.hackerrank.com/profile/chinmaysabnis31" target="_blank" className="underline ">chinmaysabnis31</a>
              </span>
            </p>

           
            
           
          </div>
        </div>
        <div className="h-10 2xl:h-20"></div>
      </div>
      
    </motion.div>
  );
}
