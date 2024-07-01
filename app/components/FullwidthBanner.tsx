import React from "react";
import Image from "next/image";

const FullwidthBanner = () => {
  return (
    <>
      <div className="w-full h-[500px] mt-8 bg-slate-300">
        {/* <Image src={}/> */}
      </div>
      <div className="my-14 flex justify-between">
        <h3 className="text-3xl w-[400px] leading-snug">
          Låt oss skapa några fantastiska content för ditt varumärke.
        </h3>
        <p className="w-[400px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris
        </p>
      </div>
    </>
  );
};

export default FullwidthBanner;
