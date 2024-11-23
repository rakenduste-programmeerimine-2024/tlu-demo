"use client"; // Ensure this component runs on the client side

import React from "react";
import YouTube from "react-youtube";

const App: React.FC = () => {
  const videoId = "7x1lXTapzyo"; // Extracted from the YouTube URL

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0, // no autoplay
      start: 0, // Start at 0 seconds
    },
  };

  const onPlayerReady = (event: any) => {
    console.log("Video is ready");
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-900 text-white"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#1a202c",
        color: "white",
      }}>
      <div
        style={{
          padding: "20px",
          backgroundColor: "white",
          color: "#1a202c",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "24px", marginBottom: "16px" }}>YouTube Player</h1>
        <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />
      </div>
    </div>
  );
};

export default App;
