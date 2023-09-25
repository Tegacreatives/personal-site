import Image from "next/image";
import React from "react";
import Title from "./common/Title";

const About = () => {
  return (
    <section className="py-16">
      <Title title="About Me" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div
          className="bg-cover min-h-[330px] sma:min-h-[420px] md:min-h-[500px]"
          style={{
            backgroundImage: "url('./assets/tega.jpg')",
          }}
        ></div>
        <div className="space-y-10">
          <div className="text-[26px] lg:text-[44px] font-normal lg:leading-[51.9px]">
            <span className="text-[#ACA0E8]">Hola!</span> My name is Tega
            Okorare, a developer with a focus on building scalable and
            accessible web experiences and products.
          </div>
          <div className="text-[18px] font-normal">
            Currently based somewhere on earth, I&apos;ve had the privilege of
            working with multiple clients and companies. These experiences have
            shaped me into striving for simplicity and clarity in my work while
            finding ways to solve the challenging tasks it takes to build a
            product that puts a smile on the end user&apos;s face.
          </div>
          <div className="text-[18px] font-normal">
            On the side I do enjoy building small and large personal projects as
            a chance to learn new technologies and break things. When I&apos;m
            not building or trying to break things It&apos;s either moives,
            books or music like most other people, I think.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
