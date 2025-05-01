import React from "react";

const AiButton = () => {
  const phoneNumber = "994501234567";
  return (
    <>
      <a
        href={`https://www.jotform.com/agent/01966baf453d780c96782b6ac20f81cb5d4b`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          left: "10px",
          zIndex: 9999,
          backgroundColor: "#fff",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        }}
      >
        <img
          src="/Ai.png"
          alt="AI"
          style={{ height: "40px", width: "40px", borderRadius: "50%" }}
        />
      </a>
    </>
  );
};

export default AiButton;
