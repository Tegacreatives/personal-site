import React from "react";
import Title from "./common/Title";
import Image from "next/image";
import Accordion from "./Accordion";

const workPlaces = [
  {
    company: "Nigeria LNG",
    role: "Digital Innovation Intern",
    timeFrame: "2022",
    work: "Developed user interface for a new internal project management tool.",
  },

  // Add more Experience items here
];
const Experience = () => {
  return (
    <section className="w-full">
      <Title title="Experience" />
      <div className="items-center pb-10">
        <div className=" space-y-4">
          <Accordion workPlaces={workPlaces} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
