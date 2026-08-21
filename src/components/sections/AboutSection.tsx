import { Aboutsection } from "@/payload-types";
import React from "react";

function AboutSection({about}: {about: Aboutsection[]}) {
  return (
    <section className="px-4 border-x full-line-bottom relative">
      <h2 className="text-3xl font-semibold relative full-line-bottom ">
        About
      </h2>
      <div className="flex flex-col gap-4 py-4 font-mono text-sm ">
        {about?.map((paragraph, index) => (
          <p key={index} className="tracking-wide">
            {paragraph?.message}
          </p>
        ))}
      </div>
    </section>
  );
}

export default AboutSection;
