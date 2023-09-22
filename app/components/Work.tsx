import Image from "next/image";
import React from "react";
import Title from "./common/Title";
import { client } from "@/utils/sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source: {}) {
  return builder.image(source);
}

interface ProjectProps {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  coverPhoto: {
    asset: "string";
  };
}

async function getProject() {
  const query = `*[_type == "project"]`;
  const data = await client.fetch(query);
  return data as ProjectProps[];
}

const Work = async () => {
  const projects = (await getProject()) as ProjectProps[];
  return (
    <div className="flex flex-col w-full py-12">
      {/* section title */}
      <Title title="View Works" />
      {/* portfolio projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 space-y-2 lg:space-y-0">
        {projects.map((project, index) => (
          <div className="cursor-pointer group" key={index}>
            <div className="relative">
              <Image
                src={urlFor(project.coverPhoto).url()}
                alt="download"
                className="w-full"
                width={350}
                height={261.11}
                priority
              />
            </div>
            <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:items-center justify-between py-4">
              <div className="text-[22px] lg:text-[28px] font-normal">
                {project.title}
              </div>
              <div className="flex items-center space-x-3">
                <span>View Project</span>
                <div className="w-[40px] h-[40px] bg-[#ACA0E8] rounded-full flex justify-center items-center">
                  <Image
                    className="transform transition-transform ease-in-out duration-300 group-hover:-rotate-45"
                    src="/arrow.svg"
                    alt="download"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
