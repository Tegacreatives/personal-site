import React from "react";
import Title from "./common/Title";
import Accordion from "./Accordion";

const workPlaces = [
  {
    company: "Rooks",
    role: "Full-Stack Developer",
    timeFrame: "2022 - Current",
    work: [
      "Developed responsive e-commerce platform with over 200 users",
      "Integrated secure payment gateway for seamless and secure payments",
      "Implemented robust error handling for third-party APIs",
    ],
  },
  {
    company: "Nigeria LNG",
    role: "Digital Innovation Intern",
    timeFrame: "2022",
    work: [
      "Developed user interface for a new internal project management tool.",
      "Participated in code reviews and provided feedback to other developers.",
      "Streamlined analysis processes by migrating critical calculations from Excel to Python.",
    ],
  },
  {
    company: "I.S.T.H",
    role: "Technical Support",
    timeFrame: "2020 - 2022",
    work: [
      "Offered network troubleshooting assistance to staff members, ensuring minimal disruptions in daily operations.",
      "Performed website updates and maintenance, contributing to an up-to-date and user-friendly online presence for the organization.",
    ],
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
