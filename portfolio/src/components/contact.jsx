import React from "react";
import { motion } from "framer-motion";
import "../css/contact.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Contact() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://portfolio-server-tau-vert.vercel.app/contact",
        formData,
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) setIsSubmit(true);
      else console.log("error in form data");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="w-full h-screen   cus-conctact-2"
    >
      <div className="w-4/5 ml-32 top-20 2xl:top-36 2xl:ml-44 cus-box relative pb-3 2xl:pb-8 2xl:pt-8 pt-3 h-fill border-l-2 2xl:border-l-4 border-gray-700">
      <motion.div 
      initial={{ x: +100,rotate:+5, opacity: 0 }}
      animate={{ x: 0, rotate:0,opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-5/12 h-full 2xl:h-4/6 ml-4 2xl:ml-6   relative    cus-form ">
        
        {isSubmit ? (
        <div className="w-full h-full relative    pt-20 2xl:pb-20">
        <div className="w-11/12 ml-3 2xl:ml-5  h-1/2 justify cus-thankyou 2xl:pb-4   rounded-lg ">
          <h1 className="text-2xl 2xl:text-3xl font-bold text-gray-700 ml-3 2xl:ml-16 pt-1 2xl:pt-3  ">
            Thank You for Reaching Out!
          </h1>
          <div className="w-11/12 ml-3 h-full  mt-3 2xl:mt-5 ">
          <p className="text-md 2xl:text-lg text-gray-500 mb-2 pr-2  2xl:pl-7 ">
             I appreciate you taking the time to
            reach out to me. I'll review your message and get back to you as soon
            as possible!
          </p>
          <Link 
          to="/"
          className="  text-gray-500 w-fill h-fill p-2 ml-32 2xl:m-52  text-sm 2xl:text-lg   rounded-md hover:text-gray-700 duration-400 button">
           Go Back</Link>                                                                                                                 
          </div>
          
        </div>
      </div>
      ) : (
        <div className="w-full h-3/4  relative  justify-center ">
        <p className="text-gray-700 ml-6 pt-3 2xl:text-lg 2xl:ml-12 2xl:pt-10  text-xl  font-semibold">To Connect with Me! <br /> 
        <span className="text-sm 2xl:text-lg  text-gray-500 font-medium   mt-2  ">Fill this Form</span> 
        </p>
          <form action="" onSubmit={handleSubmit}>
          <div className="w-full h-10  top-3 :top-5   relative flex    ">
            <div className="w-2/5 2xl:h-12 h-10 ml-5 2xl:ml-10  rounded-md bg-white">
              <input
                className="w-full rounded-md h-10 2xl:h-12 p-2 text-gray-600 leading-tight  focus:outline-none focus:shadow-outline"
                type="text"
                id="firstName"
                placeholder="Firstname"
              />
            </div>
            <div className="w-2/5 h-10 ml-6 2xl:ml-7  2xl:h-12 rounded-md bg-white ">
              <input
                className="w-full rounded-md h-10 2xl:h-12 p-2 text-gray-600 leading-tight  focus:outline-none focus:shadow-outline"
                type="text"
                id="lastName"
                placeholder="Lastname"
              />
            </div>
          </div>
          <input
                className="w-5/6 rounded-md  h-10 2xl:h-12 mt-8 2xl:mt-14 2xl:ml-10 ml-6 p-2 text-gray-600 leading-tight  focus:outline-none focus:shadow-outline"
                type="text"
                id="email"
                placeholder="Email"
              />

                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter Your Message Here"
                  className="w-5/6 h-20 2xl:h-28 2xl:ml-10 2xl:mt-8 ml-6 mt-5 rounded-md p-2 leading-tight text-gray-600  focus:outline-none focus:shadow-outline"
                ></textarea>
                <div className="w-1/4 h-8 2xl:h-10 ml-36 2xl:ml-52 2xl:mt-5 mt-2 rounded-md border border-gray-400">
                  <button
                    className=" w-full text-gray-500  2xl:text- text-sm h-full rounded-md hover:text-gray-700 duration-400 button"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
              <div className="w-1/4 h-8  2xl:h-10 ml-36 2xl:ml-52   items-center relative">
                <p className="text-sm 2xl:text-lg text-gray-500 font-medium ml-10 2xl:ml-16 2xl:mt-4 mt-2 ">
                  OR
                </p>
              </div>
              <p className="text-sm text-gray-500   2xl:text-lg 2xl:ml-28 2xl:pb-3 font-medium ml-16">email me at <span className="text-gray-800 text-md"> sabnischinmay31@gmail.com </span></p>
            </div> 
      )}
      
       
        </motion.div>
      </div>
    </motion.div>
  );
}
