import React, { useEffect, useState } from "react";

const Toogle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "bg-black" : "bg-white";
  }, [darkMode]);

  return (
    <>
      <button className="" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <div
        className={`w-full h-screen ${darkMode ? `bg-black` : `bg-white`}
        `}
      >
        sdfadf
      </div>
    </>
  );
};

export default Toogle;
