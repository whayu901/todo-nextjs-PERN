"use client";

import Lottie from "lottie-react";

import ScrollDownAnimation from "../../assets/lottie/scroll-down.json";
import SocialMedia from "@/shared/components/socialMedia";
import ListProjects from "@/shared/components/listProjects";

export default function Home() {
  return (
    <main>
      <section id="greeting" className="border-b-[1px] border-b-midnight">
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="text-center text-4xl">
            <p className="text-midnight">
              Designing With <span className="text-white">Purpose,</span>
            </p>
          </div>
          <div className="text-center mt-4 text-4xl">
            <p className="text-midnight">
              Building With <span className="text-white">Code.</span>
            </p>
          </div>

          <button className="mt-8 border px-5 py-1 rounded-xl hover:border-yellow-600 hover:shadow-md hover:shadow-yellow-600">
            <p className=" text-white">Say Hi 🙏</p>
          </button>

          <div className="mt-8">
            <Lottie animationData={ScrollDownAnimation} loop className="w-24" />
          </div>
        </div>
      </section>
      <section id="aboutme" className="border-b-[1px] border-b-midnight">
        <div className="container my-10">
          <div className="flex items-center justify-between">
            <p className="text-midnight text-xl">About Me</p>
          </div>
          <div className="mt-5">
            <p className="text-white text-3xl">
              Hi, I am Wahyu! Frontend developer with 5+ years experience of
              proven meaningfully contributions to teams of varying size and
              scope. With my results-driven mentality. Passionate about going
              the extra mile to ensure the customer is unquestionably satisfied
              with the product or service provided. With emphasis on scalable
              and well-documented code. Proficient with Flutter, React Native,
              Kotlin, VueJS, NodeJS and ReactJS.
            </p>
            <div className="flex justify-between lg:flex-row sm:flex-col items-start mt-10">
              <div className="w-[60%] md:w-full">
                <p className="text-white text-3xl">
                  I understand the importance of the a Pixel-perfect Website,
                  pride myself on producing high-quality websites. and i'm
                  comfortable working solo or as part of a team
                </p>
                <div className="mt-10 visible">
                  <p className="text-midnight text-xl mb-2">My Social Media</p>

                  <SocialMedia />
                </div>
              </div>
              <div className="sm:w-1/2 overflow-hidden w-full">
                <img
                  src={"/images/image-profile.png"}
                  alt="img-profile"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="overview-project" className="h-screen">
        <div className="container my-10">
          <p className="text-midnight text-xl">Featured Projects</p>
          <div className="pt-2 max-w-[50%]">
            <p className="text-white text-3xl">
              I craft digital solutions that showcase my passion and expertise
              in design and development
            </p>
          </div>

          <div className="pt-10">
            <ListProjects />
          </div>
        </div>
      </section>
    </main>
  );
}
