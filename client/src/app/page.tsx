"use client";

import Lottie from "lottie-react";

import ScrollDownAnimation from "../../assets/lottie/scroll-down.json";
import SocialMedia from "@/shared/components/socialMedia";

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

          <button className="mt-8 border px-5 py-1 rounded-xl  hover:border-yellow-600 hover:shadow-md hover:shadow-yellow-600">
            <p className=" text-white">Say Hi 🙏</p>
          </button>

          <div className="mt-8">
            <Lottie animationData={ScrollDownAnimation} loop className="w-24" />
          </div>
        </div>
      </section>
      <section id="aboutme" className="h-screen mt-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <p className="text-midnight text-xl">About Me</p>
            <div>
              <SocialMedia />
            </div>
          </div>
          <div className="mt-5">
            <p className="text-white text-2xl font-semibold">
              Hi, I am Wahyu! Frontend developer with 5+ years experience of
              proven meaningfully contributions to teams of varying size and
              scope. With my results-driven mentality. Passionate about going
              the extra mile to ensure the customer is unquestionably satisfied
              with the product or service provided. With emphasis on scalable
              and well-documented code. Proficient with Flutter, React Native,
              Kotlin, VueJS, NodeJS and ReactJS.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
