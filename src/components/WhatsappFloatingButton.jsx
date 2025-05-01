import React from "react";

const WhatsappFloatingButton = () => {
  const phoneNumber = "994502956995";
  return (
    <>
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "80px",
          left: "10px",
          zIndex: 9999,
          backgroundColor: "#25D366",
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
          src="/wp.svg"
          alt="WhatsApp"
          style={{ height: "24px", width: "24px" }}
        />
      </a>
    </>
  );
};

export default WhatsappFloatingButton;
