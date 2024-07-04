"use client";
import React, { useEffect } from "react";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useSpring,
} from "framer-motion";
import wMiltonImage1 from "@/public/images/world_of_milton/image1.jpg";
import wMiltonImage2 from "@/public/images/world_of_milton/image2.jpg";
import wMiltonImage3 from "@/public/images/world_of_milton/image3.jpg";
import lipsImage1 from "@/public/images/lips_of_sweden/image1.webp";
import lipsImage2 from "@/public/images/lips_of_sweden/image2.webp";
import lipsImage3 from "@/public/images/lips_of_sweden/image3.webp";
import oneWingImage1 from "@/public/images/onewing/image1.png";
import oneWingImage2 from "@/public/images/onewing/image2.png";
import oneWingImage3 from "@/public/images/onewing/image3.png";
import ProjectImageSection from "@/app/components/ProjectImageSection";
import ProjectTest from "@/app/components/ProjectTest";

const ProjectPage = () => {
  const images = [
    {
      image: wMiltonImage1,
      image2: wMiltonImage2,
      image3: wMiltonImage3,
      alt: "World of Milton",
      company: "World of Milton",
      href: "/projects/world-of-milton",
    },
    {
      image: lipsImage1,
      image2: lipsImage2,
      image3: lipsImage3,
      alt: "Lips of Sweden",
      company: "Lips of Sweden",
      href: "/projects/lips-of-sweden",
    },
    {
      image: oneWingImage1,
      image2: oneWingImage2,
      image3: oneWingImage3,
      alt: "OneWing",
      company: "One Wing",
      href: "/projects/onewing",
    },
  ];

  return (
    <>
      <div className="relative snap-mandatory min-h-screen">
        {images.map((image, index) => (
          <ProjectImageSection key={index} image={image} />
        ))}
      </div>
      {/* </div> */}
      {/* <ProjectTest /> */}
    </>
  );
};

export default ProjectPage;
