"use client";
import React, { use } from "react";
import Image from "next/image";
import { title } from "process";
import { url } from "inspector";
import { useState, useEffect } from "react";

const data = [
  {
    id: 1,
    title: "Always fresh & always cripsy & always hot ",
    url: "/slide1.png",
  },
  {
    id: 2,
    title: "We deliver your order whenever you are in Kathmandu",
    url: "/slide2.png",
  },
  {
    id: 3,
    title: " Big fresh and Juicy pizza perfect for your party",
    url: "/slide3.jpg",
  },
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev == data.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]">
      <div className="h-1/2 flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
        {/* This is the Text Container */}
        <h1 className="text-4xl text-center uppercase p-4 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-4 px-8 rounded-xl ">
          {" "}
          Order Now{" "}
        </button>
      </div>
      <div className="w-full h-1/2 relative">
        {/* This is the image container */}
        <Image
          src={data[currentSlide].url}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
