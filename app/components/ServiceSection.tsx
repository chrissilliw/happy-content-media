import { Camera, MoveRight, Video } from "lucide-react";
import Image from "next/image";
import React from "react";
import greenBottle from "@/public/images/green_bottle.jpg";

const ServiceSection = () => {
  return (
    <div className="relative overflow-x-hidden">
      <div className="grid grid-cols-2 mx-auto pt-32 pb-8 px-10 bg-slate-100 gap-32">
        <div className="relative min-w-10 min-h-[600px] ml-24">
          <Image
            src={greenBottle}
            alt="bottle"
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center max-w-[300px] mr-24 gap-8">
          <h2 className="text-3xl font-lora">
            Låt oss skapa några fantastiska saker för ditt varumärke
          </h2>
          <p className="font-inter">
            Vi kan hjälpa dig med produktbilder som visar upp ditt varumärkes
            kvaliteter och gör bestående intryck på din publik.{" "}
          </p>
          <div className="flex flex-col gap-4">
            <div className="">
              <h4 className="uppercase tracking-widest">Våra tjänster</h4>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between py-3 border-b-2 ">
                  <div className="flex w-auto gap-3">
                    <Camera />
                    <p>Foto</p>
                  </div>
                  <MoveRight />
                </div>

                {/* <div className="border-b-2"> */}
                <div className="flex justify-between py-3 border-b-2">
                  <div className="flex w-auto gap-3">
                    <Video />
                    <p>Video</p>
                  </div>
                  <MoveRight />
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
