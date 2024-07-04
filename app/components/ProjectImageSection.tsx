"use client";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { IImage } from "../models/IImage";
import ButtonWithArrow from "./ButtonWithArrow";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

interface Props {
  image: IImage;
}

const ProjectImageSection = ({ image }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const springY = useSpring(y, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const unsubscribe = y.onChange((latestValue) => {
      console.log("value of y: ", latestValue);
    });

    return () => unsubscribe();
  }, [y]);

  return (
    <>
      <section className="snap-start relative flex justify-center items-center min-h-screen border">
        <div ref={ref} className="relative columns-2 gap-4">
          <div
            style={{
              position: "relative",
              width: "300px",
              height: "400px",
            }}
            className="h-full"
          >
            <Image
              src={image.image}
              alt={image.alt}
              height={250}
              width={350}
              quality={95}
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <div
            style={{
              position: "relative",
              width: "150",
              height: "300",
            }}
            className="h-full"
          >
            <Image
              src={image.image2}
              alt={image.alt}
              height={300}
              width={150}
              quality={95}
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <div
            style={{
              position: "relative",
              width: "225px",
              height: "225px",
            }}
            className="h-full"
          >
            <Image
              src={image.image3}
              alt={image.alt}
              height={175}
              width={175}
              quality={95}
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <motion.h2
            style={{ y }}
            className="absolute top-64 left-[82%] whitespace-nowrap text-4xl text-slate-800 font-semibold font-lora"
          >
            {image.company}
          </motion.h2>
          <div className="absolute right-16 bottom-0">
            <ButtonWithArrow buttonText="Projekt" href={image.href} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectImageSection;
