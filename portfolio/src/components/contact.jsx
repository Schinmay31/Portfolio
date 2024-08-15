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
      className="w-1/3 h-3/4  relative    cus-form ">
        <div className="w-full h-3/4 :h-full relative  justify-center ">
        <p className="text-gray-700 ml-6 pt-3 :text-2xl :ml-12 :pt-10  text-xl  font-semibold">To Connect with Me! <br /> 
        <span className="text-sm :text-  text-gray-500 font-medium   mt-2  ">Fill this Form</span> 
        </p>
          <form action="">
          <div className="w-full h-10  top-3 :top-5   relative flex    ">
            <div className="w-2/5 :h-12 h-10 ml-5 :ml-10  rounded-md bg-white">
              <input
                className="w-full rounded-md h-10 :h-12 p-2 text-gray-600 leading-tight  focus:outline-none focus:shadow-outline"
                type="text"
                id="firstName"
                placeholder="Firstname"
              />
            </div>
            <div className="w-2/5 h-10 ml-6 :ml-7  :h-12 rounded-md bg-white ">
              <input
                className="w-full rounded-md h-10 :h-12 p-2 text-gray-600 leading-tight  focus:outline-none focus:shadow-outline"
                type="text"
                id="lastName"
                placeholder="Lastname"
              />
            </div>
          </div>
          <input
                className="w-5/6 rounded-md  h-10 :h-12 mt-8 :mt-14 :ml-10 ml-6 p-2 text-gray-600 leading-tight  focus:outline-none focus:shadow-outline"
                type="text"
                id="email"
                placeholder="Email"
              />

              <textarea
               name=""
                id=""
                placeholder="Enter Your Message Here"
                className="w-5/6 h-20 :h-28 :ml-10 :mt-8 ml-6 mt-5 rounded-md p-2 leading-tight text-gray-600  focus:outline-none focus:shadow-outline"
              
              ></textarea>
              <div className="w-1/4 h-8 :h-10 ml-36 :ml-52 :mt-5 mt-2 rounded-md border border-gray-400">
               <button className=" w-full text-gray-500  :text- text-sm h-full rounded-md hover:text-gray-700 duration-400 button"
               onClick={handleSubmit}
               >Submit</button>
              </div>
              </form>
              <div className="w-1/4 h-8  :h-10 ml-36 :ml-52   items-center relative">
              <p className="text-sm :text- text-gray-500 font-medium ml-10 :ml-16 :mt-4 mt-2 ">OR</p>
              </div>
              <p className="text-sm text-gray-500   :text- :ml-28 font-medium ml-16">email me at <span className="text-gray-800 text-md"> sabnischinmay31@gmail.com </span></p>
            </div>
        </motion.div>
      
    </motion.div>
  );
}
