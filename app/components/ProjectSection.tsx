import Image from "next/image";
import React from "react";
import ButtonWithArrow from "./ButtonWithArrow";
import ProjectImageMasonry from "./ProjectImageMasonry";

const ProjectSection = () => {
  return (
    <div className="relative overflow-x-hidden">
      <div className="grid grid-cols-2 mx-auto pt-8 pb-32 px-10 bg-slate-100 gap-2">
        <div className="flex flex-col justify-center max-w-[300px] ml-24 gap-6">
          <h4 className="uppercase tracking-widest">Projekt</h4>
          <p className="font-inter">
            Genom foto och video visar jag upp olika varumärkens kvaliteter på
            ett slående sätt, skapar ett bestående intryck hos beskådaren och
            fångar essensen av varje varumärke på ett unikt sätt.
          </p>
          <div className="flex flex-col gap-4">
            <div className="">
              <div className="flex flex-col gap-2">
                <ButtonWithArrow buttonText="Se Projekt" href="/projects" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative  mr-24">
          <ProjectImageMasonry />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
