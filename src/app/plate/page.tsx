"use client";
import React, { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast, ToastContainer, ToastContent, ToastOptions } from 'react-toastify';

type ToastType = 'info' | 'success' | 'warning' | 'error' | 'default';

const notify = (message: string, type: ToastType) => {
  if (toast[type as keyof typeof toast]) {
    toast(message, { type: type });
  } else {
    toast(message); // fallback to default if type is not recognized
  }
};

export default function Plate() {
  const [oName, setOName] = useState("");
  const [cModel, setCModel] = useState("");
  const [cPlate, setCPlate] = useState("");
  const [mNumber, setMNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [image, setImage] = useState<FormData | null>(null);

  const handleUpload = async (e:any) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      setImage(formData);
      setLoading(true);

      try {
        // Simulate an upload process
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setLoading(false);
        
        setErrorMessage("");
      } catch (err) {
        setLoading(false);
        
        setErrorMessage("Failed to upload image");
        notify("Failed to upload image", "error");
      }
    } else {
      ;
      setErrorMessage("No file selected");
      notify("No file selected", "error");
    }
  };

  const handleCheck = () => {
    if (image) {
      setOName("Mohamed Ramadan");
      setCModel("BMW");
      setCPlate("س ج ط 2 5 9 4");
      setMNumber("363409673490659");
      notify("Data has been set successfully", "success");
    } else {
      
      setErrorMessage("No image selected");
      notify("No image selected", "error");
    }
  };

  // const notify = (message:string, type:string) => {
  //   toast[type](message);
  // };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-24 ">
      <div className=" relative w-full  ">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className=" absolute -z-10 top-44 lg:top-20 h-[200px] md:top-36 md:h-[350px] w-2/3 lg:h-[400px] bg-cover lg:w-1/3 right-0 lg:right-2 bg-center bg-no-repeat flex flex-col items-start justify-center px-20"
          style={{
            backgroundImage:
              "url('/images/license-plate-reading-camera-for-automatic-surveillance-of-vehicles-500x500.png')",
          }}
        ></motion.div>
        <div className="flex flex-col items-start w-full justify-center px-0 lg:px-10 pt-5 text-black ">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-3xl lg:text-5xl font-bold text-center w-full"
          >
            License Plate Recognition
          </motion.h1>
          <div className="">
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className=" text-lg lg:text-xl mt-4 w-1/2 pl-10 pt-20 leading-10"
            >
              VELOX system is a software that reads the license plate number of
              vehicles from an image or a video frame
              <span className=" text-sm"> (coming soon) </span> .
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className=" text-[#79281b] pl-10 py-2 px-2 font-sans font-semibold rounded-2xl text-xl"
            >
              Upload Image and try now
            </motion.h3>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center w-full">
          <div className="pl-20 pt-20 flex flex-col justify-center items-start w-full">
            <motion.input
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              type="file"
              className="w-full max-w-xs cursor-pointer "
              onChange={handleUpload}
            />
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            <motion.button
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              onClick={handleCheck}
              className=" cursor-pointer px-6 py-3 bg-[#79281b] text-white rounded-full hover:text-[#79281b] hover:bg-black font-bold text-lg transition-colors duration-300  "
            >
              Check
            </motion.button>
          </div>
        </div>
      </div>
      <div className=" relative w-full min-h-96">
        <div
          className=" absolute z-10  lg:top-10 h-[200px]  md:h-[350px] w-2/3 lg:h-[400px] bg-cover lg:w-1/3 right-0 lg:right-2 bg-center bg-no-repeat flex flex-col items-start justify-center px-20"
          style={{
            backgroundImage: "url('/images/plate.png')",
          }}
        ></div>
        <div className="flex flex-col justify-center items-start w-full">
          <div className="px-20 py-20">
            <h1 className="pl-2 text-black text-4xl font-sans font-bold">
              plate Information
            </h1>
          </div>
          <div className="px-20 w-full flex flex-col justify-center gap-10 text-black ">
            <div className="w-full flex flex-col lg:flex-row gap-20">
              {oName && (
                <div className="flex justify-start items-center gap-2  ">
                  <h1 className="text-3xl font-bold font-sans">Owner Name: </h1>

                  <h2 className="text-2xl font-semibold font-sans">{oName}</h2>
                </div>
              )}
              {cPlate && (
                <div className="flex justify-start items-center gap-2  ">
                  <h1 className="text-3xl font-bold font-sans">
                    plate Number:{" "}
                  </h1>

                  <h2 className="text-2xl font-semibold font-sans">{cPlate}</h2>
                </div>
              )}
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-20">
              {cModel && (
                <div className="flex justify-start items-center gap-2  ">
                  <h1 className="text-3xl font-bold font-sans">Car Model: </h1>

                  <h2 className="text-2xl font-semibold font-sans">{cModel}</h2>
                </div>
              )}
              {mNumber && (
                <div className="flex justify-start items-center gap-2  ">
                  <h1 className="text-3xl font-bold font-sans">
                    Motor number:{" "}
                  </h1>

                  <h2 className="text-2xl font-semibold font-sans">
                    {mNumber}
                  </h2>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
