import React from "react";

const IconText = ({ icon: Icon, text, hoverEffect = true }) => {
  return (
    <div
      className="group flex flex-row items-center space-x-2 hover:scale-110"
    >
      <Icon className={hoverEffect ? "group-hover:text-orange-500" : ""} />
      <span className={`font-bold ${hoverEffect ? "group-hover:text-orange-500" : ""}`}>
        {text}
      </span>
    </div>
  );
};

export default IconText;