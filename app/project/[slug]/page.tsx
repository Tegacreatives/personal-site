import { client } from "@/utils/sanity/client";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectProps {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  about: string;
  coverPhoto: {
    asset: "string";
  };
  services: string[];
  liveLink: string;
  github: string;
  technologies: string[];
  showcase: string[];
  body: any;
}

const builder = imageUrlBuilder(client);

function urlFor(source: {}) {
  return builder.image(source);
}

const PortableTextComponent: any = {
  types: {
    image: ({ value }: { value: any }) => (
      <Image
        src={urlFor(value).url()}
        alt="Image"
        className="rounded-lg py-4 w-full"
        width={720}
        height={720}
        priority
      />
    ),
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: { children: string }) => (
      <li className="list-disc pb-2 text-lg lg:text-xl">{children}</li>
    ),
  },

  block: {
    // Customize block types with ease
    h4: ({ children }: { children: string }) => (
      <h4 className="pt-10 pb-2 text-2xl">{children}</h4>
    ),
  },
};

async function getProject(slug: string) {
  const query = `*[_type == "project" && slug.current == "${slug}"][0]`;
  const data = await client.fetch(query, {
    next: {
      revalidate: 3600,
    },
  });

  return data;
}
const ProjectPage = async ({ params }: { params: { slug: string } }) => {
  const data = (await getProject(params.slug)) as ProjectProps;
  return (
    <div
      className="flex flex-col max-w-[2180px] mx-[40px] md:mx-[100px] 
    lg:mx-[180px] m-auto border-b-white border-b"
    >
      <div className="flex flex-col pb-16">
        <div className="text-[40px] lg:text-[80px]">{data.title}</div>
        <div className="lg:max-w-[80vw] lg:text-[30px]">{data.about}</div>
      </div>
      <div className="flex flex-row items-start justify-between w-full">
        <div className="underline">
          <Link href={data.liveLink} target="_blank">
            Live Site
          </Link>
        </div>
        <div className="underline">
          <Link href={data.github} target="_blank">
            Github
          </Link>
        </div>
        <div className="space-y-3 pb-10">
          <div className="text-[18px]">Services Provided</div>
          <div className="text-white/70">
            <ul>
              {data.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="relative w-full py-5">
          <Image
            src={urlFor(data.coverPhoto).url()}
            alt="download"
            className="rounded-lg py-4 w-full"
            width={2200}
            height={800}
            priority
          />
        </div>
      </div>
      <div className="pb-8 pt-1 prose text-[20px]">
        <PortableText value={data.body} components={PortableTextComponent} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {data.showcase.map((item, index) => (
          <div key={index} className="relative w-full">
            <Image
              src={urlFor(item).url()}
              alt="download"
              className="rounded-lg py-4 w-full"
              width={2200}
              height={800}
              priority
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 items-start w-full lg:space-x-44 py-10">
        <div className="text-[40px] lg:leading-7">Technologies</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 sm:gap-16 md:gap-24 text-[20px]">
          {data.technologies.map((tech, index) => (
            <div key={index}>{tech}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
