import React from "react";
import image1 from "@/public/images/world_of_milton/world_of_milton1.jpg";
import image2 from "@/public/images/world_of_milton/world_of_milton2.jpg";
import image3 from "@/public/images/world_of_milton/image3.jpg";
import image4 from "@/public/images/world_of_milton/world_of_milton4.jpg";
import Image from "next/image";

const ProjectImageMasonry = () => {
  const images = [
    { image: image1, alt: "image-1" },
    { image: image2, alt: "image-2" },
    { image: image3, alt: "image-3" },
    { image: image4, alt: "image-4" },
  ];
  return (
    <div className="columns-1 sm:columns-2 gap-4 py-10 md:py-20">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          alt={image.alt}
          className="mb-4 break-inside-avoid w-full object-cover"
        />
      ))}
    </div>
  );
};

export default ProjectImageMasonry;
