import React from "react";
import Button from "./Button";

const Card = ({ id, title, date, source, image, onClick }) => {
  return (
    <div className="w-80 h-auto bg-white rounded-md shadow-md grid grid-cols-1 gap-y-4 p-4">
      <img
        src={image ? image : "https://placehold.co/160"}
        className="w-full h-60 mx-auto"
        alt={title}
      />
      <h2 className="font-semibold text-lg overflow-hidden">{title}</h2>
      <p className="font-semibold">Date: {date}</p>
      <p className="font-semibold">Author: {source}</p>
      <div className="w-40 mx-auto">
        <Button id={id} label={"Details"} onClick={onClick} />
      </div>
    </div>
  );
};

export default Card;
