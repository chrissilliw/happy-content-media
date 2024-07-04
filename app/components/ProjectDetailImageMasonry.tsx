import React from "react";
import { IImage } from "../models/IImage";
import imageList from "../data/imageList";
import Image from "next/image";

interface Props {
  companyName: string;
}

const ProjectDetailImageMasonry = ({ companyName }: Props) => {
  const companyImages = imageList.filter(
    (item) => item.company === companyName
  );

  if (companyImages.length === 0) {
    return <p>Hitta inga bilder för {companyName}</p>;
  }
  return (
    <div className="flex gap-4">
      {companyImages.map((company, index) => (
        <div key={index} className="mt-20 flex justify-between gap-10">
          {company.images.map((image, index) => (
            <div key={index} className="min-w-[400px]">
              <Image src={image} alt={company.alt} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProjectDetailImageMasonry;
