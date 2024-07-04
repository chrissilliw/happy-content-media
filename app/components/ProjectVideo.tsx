import React from "react";
import Video from "next-video";
import oneWing from "@/videos/OneWing-bottle_v2.mp4";

const ProjectVideo = () => {
  return (
    <div className="mt-8 w-[500px]">
      <Video src={oneWing} />
    </div>
  );
};

export default ProjectVideo;
