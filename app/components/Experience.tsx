import React from "react";
import Title from "./common/Title";
import Accordion from "./Accordion";

const workPlaces = [
  {
    company: "Mastersoft Technology",
    role: "Full-Stack Developer",
    timeFrame: "2023 - Current",
    work: [
      "Developed and maintained 5+ web applications using React, Node.js, and Postgres, improving client satisfaction rates by 25%",
      "Led a team of 4 developers in delivering an LMS platform, completing the project 2 weeks ahead of schedule and 10% under budget",
      "Implemented CI/CD pipelines using Jenkins, reducing deployment time by 40% and improving code quality",
      "Organized and conducted monthly training sessions on modern web development for trainees",
      "Optimized database queries and implemented caching strategies, resulting in a 50% reduction in average page load time",
    ],
  },
  {
    company: "Rooks (Part-Time)",
    role: "Co-founder & Full-Stack Developer",
    timeFrame: "2022 - 2023",
    work: [
      "Co-founded and developed an e-commerce platform from the ground up, attracting over 100 active users within the first 3 months of launch",
      "Designed and implemented the full technology stack using React for frontend and Node.js for backend ensuring scalability for future growth",
      "Integrated Paystack as a secure payment gateway, ensuring PCI compliance and enabling seamless transactions, which resulted in a 95% success rate in payment processing.",
      "Developed a robust error-handling mechanism for third-party API interactions, reducing error rates by 20% and improving overall system reliability.",
      "Gained hands-on experience in business operations, including customer service, marketing, and financial management",
    ],
  },
  {
    company: "Nigeria LNG",
    role: "Digital Innovation Intern",
    timeFrame: "2022",
    work: [
      "Developed a user interface for an internal project management tool using React and Bootstrap, improving team collaboration and reducing project delays by 15%.",
      "Participated in bi-weekly code reviews with senior developers, providing feedback to improve code quality and adherence to best practices.",
      "Migrated critical financial calculations from Excel to Python, reducing analysis time by 30% and enhancing data accuracy, allowing the finance department to make quicker, more informed decisions.",
      "Collaborated with cross-functional teams, including business analysts and project managers, to gather requirements and ensure the tool met the specific needs of each department.",
    ],
  },
  {
    company: "I.S.T.H",
    role: "Technical Support",
    timeFrame: "2020 - 2022",
    work: [
      "Provided network troubleshooting and resolved connectivity issues for over 100 staff members, reducing downtime by 20% and ensuring minimal disruption to daily operations.",
      "Performed website updates and maintenance using WordPress and PHP, improving website loading times by 14% and ensuring content was mobile-friendly.",
      "Implemented a regular backup schedule and performed data recovery for critical systems, safeguarding the organization against data loss and ensuring a 100% recovery success rate during incidents.",
    ],
  },
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
