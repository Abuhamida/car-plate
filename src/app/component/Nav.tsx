"use client";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Nav() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Check plate", href: "/plate" },
  ];
  const [navState, setNavState] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center lg:px-24 py-2 min-h-20 md:min-h-[5.5rem]  lg:min-h-24 border-b-2 border-black w-full px-10 fixed top-0 text-black bg-white z-50">
      <motion.div
        className="absolute top-7 md:left-20 left-2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{ duration: 0.5, ease: "linear" }}
      >
        <Link href="/">
          <Image
            src={"/images/velox.png"}
            width={400}
            height={400}
            alt="vradar"
            className=" w-28 md:w-32 lg:w-36"
          />
        </Link>
      </motion.div>

      {/* <label className="swap swap-rotate absolute top-7 md:right-20 right-20">
        <input type="checkbox" className="theme-controller" value="dark" />
        <svg
          className="swap-off h-10 w-10 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>

        <svg
          className="swap-on h-10 w-10 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>
      </label> */}

      <div className=" text-3xl md:text-4xl lg:text-5xl absolute top-7 right-2 md:right-16 lg:hidden transition-transform ease-in duration-700">
        {navState ? (
          <IoMdClose onClick={() => setNavState(!navState)} />
        ) : (
          <IoMenu onClick={() => setNavState(!navState)} />
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: navState ? 1 : 0, x: navState ? 0 : -100 }}
        transition={{ duration: 0.5 }}
        className={`${
          navState ? "flex" : "hidden"
        } lg:hidden h-screen overflow-hidden items-start flex-col justify-center w-full`}
      >
        <ul className="flex flex-col gap-32 font-bold font-sans text-2xl w-full">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: navState ? 1 : 0, x: navState ? 0 : -100 }}
              transition={{ duration: 1, delay: 0.3 * index }}
              className=" w-full"
            >
              <Link href={item.href}>{item.name}</Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <div className="hidden h-20 lg:flex md:flex-col justify-center items-center w-full">
        <ul className="flex gap-20 font-bold font-sans text-2xl ">
          {navItems.map((item, index) => (
            <motion.li
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.3 * index,
                  ease: "linear",
                },
              }}
              whileHover={{
                scale: 1.2,
                transition: {
                  duration: 0.0001,
                  delay: 0.0001,
                  ease: "easeInOut",
                },
              }} // Updated duration and removed delay
              key={index}
              className="hover:border-b border-l-blue-700 "
            >
              <Link href={item.href}>{item.name}</Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
