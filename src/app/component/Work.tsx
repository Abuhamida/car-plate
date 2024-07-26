"use client";
import { title } from "process";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Work() {
  const data = [
    {
      title: "Image Upload",
      text: "Start by uploading a clear image of the car plate. Our system supports JPEG, PNG, and BMP formats for your convenience.",
    },
    {
      title: "Plate Recognition:",
      text: " Our advanced OCR technology will automatically recognize the car plate number and display it on the screen.",
    },
    {
      title: "Data Retrieval: ",
      text: "Once the car plate number is recognized, our system will retrieve the relevant data associated with the vehicle.",
    },
    {
      title: "Data Display",
      text: "The retrieved data will be displayed on the screen, providing you with the information you need at a glance.",
    },
    {
      title: "Email Notifications",
      text: "For added convenience, our system can send an email to the car owner with important information such as the location of the car. This feature is perfect for enhancing security and keeping car owners informed.",
    },
  ];
  return (
    <div className="flex flex-col items-start justify-center w-full px-24 py-10 gap-5 relative ">
      <div className="w-[1px] min-h-[25rem] h-fit  bg-black absolute left-[115px] -z-10 top-10 "></div>
      <div className=" ">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-center gap-1"
          >
            <div className="flex gap-7">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.2,
                  delay: 0.2 * index,
                  ease: "linear",
                }}
                className="text-center bg-[#86311f] rounded-full w-10 h-10 flex items-center justify-center text-white"
              >
                {index + 1}
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.2,
                  delay: 0.2 * index,
                  ease: "linear",
                }}
                className="text-3xl font-sans font-semibold"
              >
                {item.title}
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 * index, ease: "linear" }}
              className="text-lg pl-20 w-3/4 pb-5"
            >
              {item.text}
            </motion.p>
          </div>
        ))}

        <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6, ease: "linear" }}
        className="flex text-3xl pt-4 gap-2">
            <h1>You can try by upload car image  </h1>
            <Link href={'/plate'} className="text-[#86311f] hover:text-[#d72622] transition-colors duration-500 ease-out"> Now</Link>
        </motion.div>
      </div>
    </div>
  );
}
