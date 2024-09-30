import React from "react";
import Title from "./common/Title";

const skills = [
  "JavaScript | Typescript",
  "React | Next.js",
  "Node.js",
  "Postgres",
  "AWS",
  "Terraform",
  "Docker",
  "Kubernetes",
  "TailwindCss",
  "Golang",
];

const Skills = () => {
  return (
    <section className="space-y-6 pb-20">
      <Title title="Skills" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 md:gap-10 text-[18px]">
        {skills.map((skill, index) => (
          <div key={index}>{skill}</div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
