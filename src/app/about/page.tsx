"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
export default function page() {
  const team = [
    {
      name: "Mohamed AbuHamida",
      role: "Frontend Developer",
      image: "/images/mohamed.png",
      linkedin: "https://www.linkedin.com/in/mohammed-abuhamida-969693220/",
      github: "https://github.com/Abuhamida",
      Facebook: "https://www.facebook.com/mohammed.abuhameda.3",
    },
    {
      name: "Ahmed Elsayed",
      role: "Backend Developer",
      image: "/images/ahmed.png",
      linkedin: "https://www.linkedin.com/in/ahmed-elsayed-0b3a9a1b3/",
      github: "",
      Facebook: "https://github.com/a4hmed4",
    },
    {
      name: "Rowyda ElShaer",
      role: "Deep learning developer",
      image: "/images/rowyda.png",
      linkedin: "https://www.linkedin.com/in/rowyda-elshaer-a37847225",
      github: "https://github.com/RowydaElshaer219",
      Facebook: "https://www.facebook.com/rowyda.abdelrehem/",
    },
  ];
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-24 gap-10 ">
      <motion.div
        className=" absolute -z-10 top-32 h-[500px] bg-cover w-1/2 right-2 bg-center bg-no-repeat flex flex-col items-start justify-center px-20"
        style={{
          backgroundImage: "url('/images/what-is-anpr.png')",
        }}
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: "linear" }}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3, ease: "linear" }}
        className=" px-20 py-10 flex flex-col justify-center items-start gap-5"
      >
        <h1 className="text-4xl font-sans font-bold ">
          About <span className="text-[#88321e]"> VELOX</span>
        </h1>
        <p className="w-3/5 text-xl leading-7 pl-4">
          Welcome to Velox! We're at the forefront of innovation, offering
          state-of-the-art solutions for car plate number recognition and
          vehicle data management. Our advanced OCR technology ensures seamless
          accuracy and efficiency, making vehicle information management easier
          than ever before. Dive into the future with us, where technology meets
          precision.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6, ease: "linear" }}
        className=" px-20 py-5 flex flex-col justify-center items-start gap-5"
      >
        <h1 className="text-4xl font-sans font-bold ">Our Mission</h1>
        <p className="w-3/5 text-xl leading-7 pl-4">
          At VELOX, our mission is clear: to revolutionize vehicle data
          management. We leverage cutting-edge OCR technology to deliver
          reliable and efficient car plate number detection and comprehensive
          vehicle data retrieval. Our goal is to enhance security, streamline
          parking management, and unlock valuable insights through sophisticated
          data analytics. We're here to pave the way for a smarter, more secure
          world.
        </p>
      </motion.div>
      <div className=" px-20 py-10 flex flex-col justify-center items-start gap-5 w-full">
        <h1 className="text-4xl font-sans font-bold ">Our Team</h1>
        <div className="w-full min-h-[300px]">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            className=" w-[1200px] black overflow-hidden min-h-[300px]"
          >
            {team.map((member, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -200 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.5 * index },
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.1, ease: "linear" },
                  }}
                  className="flex flex-col items-center cursor-pointer justify-center gap-5 shadow-xl border-gray-200 py-8 px-4 border rounded-2xl  "
                >
                  <img
                    src={member.image}
                    className="w-40 h-40 rounded-full"
                    alt={member.name}
                  />
                  <h1 className="text-3xl font-sans font-bold">
                    {member.name}
                  </h1>
                  <p className="text-xl font-sans font-semibold">
                    {member.role}
                  </p>
                  <div className="flex gap-5">
                    <Link
                      className="text-xl hover:text-[#782919] hover:scale-105"
                      href={member.linkedin}
                      target="_blank"
                    >
                      <FaLinkedinIn />
                    </Link>

                    <Link
                      className="text-xl hover:text-[#782919] hover:scale-105"
                      href={member.github}
                      target="_blank"
                    >
                      <FaGithub />
                    </Link>
                    <Link
                      className="text-xl hover:text-[#782919] hover:scale-105"
                      href={member.Facebook}
                      target="_blank"
                    >
                      <FaFacebookF />
                    </Link>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.6, ease: "linear" }}
      className=" px-20 py-10 flex flex-col justify-center items-center gap-5 w-full">
        <h1 className="text-4xl font-sans font-bold ">Get in Touch</h1>
        <p className="w-5/6 text-xl leading-7 pl-4 text-center">
          We'd love to hear from you! Whether you have questions, feedback, or
          need support, our dedicated team is here to assist. Reach out to us at
          <a href="support@carplatescanner.com" className="text-blue-700"> support@carplatescanner.com  </a>
           and let us know how we can help you
          achieve your goals. At Car Plate Scanner, your satisfaction is our
          priority.
        </p>
      </motion.div>
    </div>
  );
}
