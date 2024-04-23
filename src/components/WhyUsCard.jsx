import React from "react";

const WhyUsCard = ({ title, description }) => {
  return (
    <div>
      <h1 className="text-2xl my-3">{title}</h1>
      <p className="text-hoverBG">{description}</p>
    </div>
  );
};

export default WhyUsCard;
