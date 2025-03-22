import React, { useRef } from "react";

const AnimatedButton = () => {
  const buttonRef = useRef(null);

  const animate = () => {
    const button = buttonRef.current;
    if (button) {
      button.style.transform = "scale(1.2)";
      button.style.transition = "transform 0.3s ease-in-out";
      setTimeout(() => {
        button.style.transform = "scale(1)";
      }, 300);
    }
  };

  return (
    <button ref={buttonRef} onClick={animate} style={{ fontSize: "20px", padding: "10px 20px" }}>
      Click Me
    </button>
  );
};

export default AnimatedButton;
