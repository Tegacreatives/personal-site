import { client } from "@/utils/sanity/client";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
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
  body: any;
}

const builder = imageUrlBuilder(client);

function urlFor(source: {}) {
  return builder.image(source);
}

const PortableTextComponent = {
  types: {
    image: ({ value }: { value: any }) => (
      <Image
        src={urlFor(value).url()}
        alt="Image"
        className="rounded-lg py-4 w-full"
        width={800}
        height={800}
      />
    ),
  },
};

async function getProject(slug: string) {
  const query = `*[_type == "project" && slug.current == "${slug}"][0]`;
  const data = await client.fetch(query, {
    next: {
      revalidate: 3,
    },
  });
  return data;
}
const ProjectPage = async ({ params }: { params: { slug: string } }) => {
  const data = (await getProject(params.slug)) as ProjectProps;
  return (
    <div className="flex flex-col items-center">
      <div className="text-[88px]">{data.title}</div>
      <div>{data.about}</div>
      <div className="pb-8 pt-1 prose">
        <PortableText value={data.body} components={PortableTextComponent} />
      </div>
    </div>
  );
};

export default ProjectPage;
