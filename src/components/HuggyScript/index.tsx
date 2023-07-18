// components/HuggyScript.js

import React, { useEffect } from "react";

const HuggyScript = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/HuggyChat/HuggyScript.js";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return null;
};

export default HuggyScript;
