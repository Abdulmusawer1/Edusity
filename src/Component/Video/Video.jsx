import React from "react";
import video from "../../assets/college-video.mp4";

const Video = ({ playState, setPlayState }) => {
  if (!playState) return null; // ⬅️ کلیدی‌ترین خط

  return (
    <div
      onClick={() => setPlayState(false)}
      className="fixed top-0 left-0 w-full h-full bg-black/90 z-[100]
      flex items-center justify-center"
    >
      <video
        onClick={(e) => e.stopPropagation()}
        className="w-[90%] max-w-[900px] h-auto border-4 border-white"
        src={video}
        autoPlay
        controls
      />
    </div>
  );
};

export default Video;
