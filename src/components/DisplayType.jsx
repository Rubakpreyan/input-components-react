import React from "react";

const DisplayType = ({ info }) => {
  if (info === "&:hover" || info === "&:focus") {
    return <div className="text-sm text-gray-400 font-sans mt-8">{info}</div>;
  } else {
    return <div className="text-sm text-black font-sans mt-8">{info}</div>;
  }
};

export default DisplayType;
