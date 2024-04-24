import React from "react";

const WhyUsCard = ({ title, description }) => {
  return (
    <div>
      <h1 className="text-2xl text-center md:text-start my-3">{title}</h1>
      <p className="text-center md:text-start text-hoverBG">{description}</p>
    </div>
  );
};

export default WhyUsCard;
