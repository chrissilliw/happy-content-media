import MarginWrapperComponent from "@/app/components/MarginWrapperComponent";
import ProjectDetailImageMasonry from "@/app/components/ProjectDetailImageMasonry";
import ProjectVideo from "@/app/components/ProjectVideo";
import React from "react";

const ProjectDetailPage = () => {
  return (
    <>
      {" "}
      <MarginWrapperComponent>
        <div className="w-full h-[600px] mt-8 bg-slate-300 mb-20">
          {/* <Image src={}/> */}
        </div>
        <div className="flex justify-between gap-36 m-auto max-w-[1200px] w-[80%]">
          <div className=" w-[20%]">
            <h3 className="uppercase">Service</h3>
            <p>Videoproduktion, Foto</p>
          </div>
          <div className="w-[80%]">
            <h2 className="text-3xl font-semibold font-lora mb-4">
              Lips of Sweden
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p>
              Lorem ipsum dolor sit amet. Consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>
        </div>
        <ProjectVideo />
        <ProjectDetailImageMasonry companyName="Lips of Sweden" />

        <div className="columns-1 sm:columns-2 gap-10">{}</div>
      </MarginWrapperComponent>
    </>
  );
};

export default ProjectDetailPage;
