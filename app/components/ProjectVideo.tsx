import React from "react";
// import Video from "next-video";
// import oneWing from "@/videos/OneWing-bottle_v2.mp4";
import { list } from "@vercel/blob";

interface Props {
  fileName: string;
}

const ProjectVideo = async ({ fileName }: Props) => {
  const { blobs } = await list({
    prefix: fileName,
    limit: 1,
  });
  console.log(blobs);
  const { url } = blobs[0];

  return (
    <div className="mt-8 w-[500px]">
      <video controls preload="none" arial-label="Video player">
        <source src={url} type="video/mp4" />
        Din webbläsare har inte support för video taggar.
      </video>
    </div>
  );
};

export default ProjectVideo;
