"use client"; // Ensure this component runs on the client side (if using Next.js)

import React, { useEffect } from "react";

const FacebookOpener: React.FC = () => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "f") {
        window.open("https://www.facebook.com/tallinna.ylikool/#", "_blank");
      }
    };

    // Attach the keydown listener
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#1a202c",
        color: "white",
        fontSize: "20px",
      }}
    >
      <p>Press the <b>F</b> key to open the Facebook page.</p>
    </div>
  );
};

export default FacebookOpener;
