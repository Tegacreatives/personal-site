import Image from "next/image";
import React from "react";
import Title from "./common/Title";

const About = () => {
  return (
    <section className="py-16">
      <Title title="About Me" />
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
        <div className="relative h-[600px] lg:h-full w-full">
          <Image
            src="/assets/headshot.png"
            alt="profile-image"
            priority
            className="w-full max-h-[70vh]"
            fill
          />
        </div>
        <div className="space-y-10">
          <div className="text-[26px] lg:text-[44px] font-normal lg:leading-[51.9px]">
            <span className="text-[#ACA0E8]">Hola!</span> My name is Tega
            Okorare, a developer with a passion for all things craft. I am
            currently working as a remote freelancer.
          </div>
          <div className="text-[18px] font-normal">
            Currently based somewhere on earth, I&apos;ve had the privilege of
            working with clients from around the world. This global perspective
            has enriched my design sensibilities and exposed me to diverse
            cultures and influences, which I incorporate into my work to create
            designs with a universal appeal.
          </div>
          <div className="text-[18px] font-normal">
            Whether you&apos;re an entrepreneur, a small business owner, or a
            fellow creative seeking a design partner, I&apos;m excited to embark
            on this creative journey with you. Let&apos;s collaborate and bring
            your vision to life!
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
