import React from "react";

interface Props {
  title: string;
  description: string;
}

const Heading = ({ title, description }: Props) => {
  return (
    <div className="mt-9 space-y-9">
      <h1 className="text-4xl leading-[40px] font-semibold"> {title} </h1>
      <h6 className="text-md">{description}</h6>
    </div>
  );
};

export default Heading;
