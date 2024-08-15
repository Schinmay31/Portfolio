import React from "react";
import { motion } from "framer-motion";
import "../css/contact.css";

export default function Contact() {
  const handleSubmit =()=>{
        console.log(this.firstName);
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="w-full h-screen  cus-conctact"
    >
      <motion.div 
      initial={{rotate:-2}}
      animate={{rotate:6,transition:{duration:0.5}} }
      className="w-1/3 h-2/3  relative    cus-form ">
        <div className="w-full h-3/4 lg:h-full relative  justify-center ">
        <p className="text-gray-700 ml-6 pt-3 lg:text-2xl lg:ml-12 lg:pt-10  text-xl  font-semibold">To Connect with Me! <br /> 
        <span className="text-sm lg:text-lg  text-gray-500 font-medium   mt-2  ">Fill this Form</span> 
        </p>
          <form action="">
          <div className="w-full h-10  top-3 lg:top-5   relative flex    ">
            <div className="w-2/5 lg:h-12 h-10 ml-5 lg:ml-10  rounded-md bg-white">
              <input
                className="w-full rounded-md h-10 lg:h-12 p-2 text-gray-600 leading-tight  focus:outline-none focus:shadow-outline"
                type="text"
                id="firstName"
                placeholder="Firstname"
              />
            </div>
            <div className="w-2/5 h-10 ml-6 lg:ml-7  lg:h-12 rounded-md bg-white ">
              <input
                className="w-full rounded-md h-10 lg:h-12 p-2 text-gray-600 leading-tight  focus:outline-none focus:shadow-outline"
                type="text"
                id="lastName"
                placeholder="Lastname"
              />
            </div>
          </div>
          <input
                className="w-5/6 rounded-md  h-10 lg:h-12 mt-8 lg:mt-14 lg:ml-10 ml-6 p-2 text-gray-600 leading-tight  focus:outline-none focus:shadow-outline"
                type="text"
                id="email"
                placeholder="Email"
              />

              <textarea
               name=""
                id=""
                placeholder="Enter Your Message Here"
                className="w-5/6 h-20 lg:h-28 lg:ml-10 lg:mt-8 ml-6 mt-5 rounded-md p-2 leading-tight text-gray-600  focus:outline-none focus:shadow-outline"
              
              ></textarea>
              <div className="w-1/4 h-8 lg:h-10 ml-36 lg:ml-52 lg:mt-5 mt-2 rounded-md border border-gray-400">
               <button className=" w-full text-gray-500  lg:text-lg text-sm h-full rounded-md hover:text-gray-700 duration-400 button"
               onClick={handleSubmit}
               >Submit</button>
              </div>
              </form>
              <div className="w-1/4 h-8  lg:h-10 ml-36 lg:ml-52   items-center relative">
              <p className="text-sm lg:text-lg text-gray-500 font-medium ml-10 lg:ml-16 lg:mt-4 mt-2 ">OR</p>
              </div>
              <p className="text-sm text-gray-500   lg:text-lg lg:ml-28 font-medium ml-16">email me at <span className="text-gray-800 text-md"> sabnischinmay31@gmail.com </span></p>
            </div>
        </motion.div>
      
    </motion.div>
  );
}
