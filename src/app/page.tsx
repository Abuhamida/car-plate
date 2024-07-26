/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Work from "./component/Work";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="h-[700px] bg-cover w-full bg-center bg-no-repeat flex flex-col items-start justify-center px-20"
        style={{
          backgroundImage: "url('/images/pexels-albert-nunez-18065-88630.jpg')",
        }}
      >
        <div className="flex flex-col justify-center items-start gap-5">
          <motion.h1
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-5xl text-black"
          >
            welcome to our website{" "}
            <span className="text-[#722d23] font-bold font-sans">VELOX</span>{" "}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-4xl text-black"
          >
            we are here to help you
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="bg-[#722d23] px-6 py-3 rounded-full text-3xl text-white hover:bg-white hover:text-[#722d23] cursor-pointer transition-colors duration-700 ease-in-out"
          >
            <Link href={"/"}>let&apos;s try</Link>
          </motion.div>
        </div>
      </motion.div>
      <div className="flex flex-col items-start justify-center w-full px-24 py-10 gap-5">
        <h1 className="text-4xl font-sans font-semibold">
          What we do <span className="text-[#722d23] font-bold">VELOX</span>
        </h1>
        <div className="text-xl flex flex-col justify-center items-start ">
          <p>
            At VELOX, we revolutionize the way you interact with vehicle data.
            Our mission is to make car plate number recognition as seamless and
            accurate as possible. Leveraging the power of advanced Optical
            Character Recognition (OCR) technology, we provide:
          </p>

          <div className=" relative">
            <motion.ul className="pt-2 pl-4  flex flex-col justify-center items-start gap-3 leading-8 w-3/5">
              <motion.li
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "linear" }}
              >
                <span className=" font-bold">
                  Effortless Car Plate Recognition:{" "}
                </span>
                Simply upload an image, and let our sophisticated OCR system do
                the rest. Within moments, you&apos;ll have the car plate number at
                your fingertips.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: "linear" }}
              >
                <span className=" font-bold">
                  Enhanced Security Solutions:{" "}
                </span>{" "}
                Our technology is ideal for enhancing security in various
                applications, from gated communities to corporate parking lots.
                Know who&apos;s coming and going with precision.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6, ease: "linear" }}
              >
                <span className=" font-bold">Parking Management: </span>{" "}
                Streamline parking operations with automatic car plate
                detection. Our system ensures efficient and accurate vehicle
                tracking, reducing manual errors and saving time.
              </motion.li>
            </motion.ul>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5, ease: "linear" }}
              className="h-[400px] absolute top-0 -z-10 bg-center bg-cover right-2 w-5/12 rounded-2xl bg-no-repeat flex flex-col items-start justify-center px-20"
              style={{
                backgroundImage:
                  "url('/images/license-plate-recognition-system-500x500.png')",
              }}
            ></motion.div>
          </div>
        </div>
      </div>
      <Work />
    </main>
  );
}
