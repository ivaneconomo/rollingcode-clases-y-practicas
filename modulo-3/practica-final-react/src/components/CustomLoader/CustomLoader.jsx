import React from "react";
import { PulseLoader } from "react-spinners";

const CustomLoader = () => {
  return (
    <PulseLoader className="text-center" color="#123abc" loading={true} />
  );
};

export default CustomLoader;
