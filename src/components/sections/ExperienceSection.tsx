"use client";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import {DynamicIcon, IconName} from 'lucide-react/dynamic';
import { Experience } from "@/payload-types";

function ExperienceSection({experiences}: {experiences: Experience[]}) {
  const [openItem, setOpenItem] = useState("experience-1");
  const [openFreelanceItem, setOpenFreelanceItem] = useState("");
  const [openEducationItem, setOpenEducationItem] = useState("");
  const fulltime = experiences.filter((exp) => exp.duration && exp.duration.toLocaleLowerCase().includes("full time"));
  const freelance = experiences.filter((exp) => exp.duration && !exp.duration.toLocaleLowerCase().includes("full time"));
  return (
    <section className=" border-x  full-line-bottom relative">
      <h2 className=" text-3xl pl-4 font-semibold relative full-line-bottom ">
        Experience{" "}
      </h2>
      <div className=" full-line-bottom relative ">
        {fulltime.map((exp, index) => {
          const iconName = (exp?.icon?.toLocaleLowerCase() ?? "lightbulb") as IconName;
          return (
            <div key={index} className="relative pl-10">
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-5 h-full w-px bg-border" />
              )}

              <div className="absolute left-3 top-5 z-10">
                <div
                  className="flex size-6 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground  "
                  aria-hidden="true"
                >
                  <DynamicIcon name={iconName} className="size-4" />
                </div>
              </div>

              {/* Accordion */}
              <Accordion
                type="single"
                collapsible
                value={openItem}
                className="border-b-0"
                onValueChange={setOpenItem}
              >
                <AccordionItem value={`experience-${exp.id}`}>
                  <AccordionTrigger className="border-b-0">
                    <div className="flex-1 flex flex-col items-start justify-center py-4 pl-4 gap-1 h-full">
                      <h3 className="text-balance  font-medium text-base leading-snug flex gap-2 font-mono items-center justify-center">
                        {exp.company}
                        {exp.job ? (
                          <a
                            href={exp.href || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ArrowUpRight className="size-4 text-muted-foreground hover:text-primary" />
                          </a>
                        ) : (
                          <span className="   size-2 border-2 border-white animate-ping bg-green-500  dark:border-gray-800 rounded-full"></span>
                        )}
                      </h3>
                      <span className="text-muted-foreground font-normal text-sm">
                        {exp.duration}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 border-b-0!">
                    <div className="prose prose-sm max-w-none font-mono text-foreground prose-zinc dark:prose-invert prose-headings:font-sans prose-headings:font-semibold prose-headings:text-balance prose-h2:border-b prose-h2:border-edge prose-h2:pb-2 prose-h2:text-2xl prose-lead:text-base prose-a:font-medium prose-a:break-words prose-a:text-foreground prose-a:underline prose-a:underline-offset-4 prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:border-edge">
                      {exp.job ? (
                        <p>
                          I am a <strong>{exp.title}</strong> at {exp.company},
                          {exp.description}
                        </p>
                      ) : (
                        <p> {exp.description}</p>
                      )}
                      <ul>
                        {exp?.tasks?.map((feature, index) => (
                          <li key={index}>{feature?.task}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp?.badges?.map((badge, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center rounded-lg bg-zinc-50 px-1.5 py-0.5 font-mono text-xs text-muted-foreground dark:bg-zinc-900"
                          >
                            {badge?.badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          )
        })}
      </div>
      <div className="px-4 py-2   ">
        <h3 className="text-primary font-medium ">Freelancing</h3>
      </div>
      <div className=" full-line-bottom relative ">
        {freelance.map((freelancing, index) => {
          const iconName = (freelancing?.icon?.toLocaleLowerCase() ?? "lightbulb") as IconName;
          return (
            <div key={index} className="relative pl-10">
              {index !== freelance.length - 1 && (
                <div className="absolute left-6 top-5 h-full w-px bg-border" />
              )}

              <div className="absolute left-3 top-5 z-10">
                <div
                  className="flex size-6 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground  "
                  aria-hidden="true"
                >
                  <DynamicIcon name={iconName} className="size-4" />
                </div>
              </div>

              {/* Accordion */}
              <Accordion
                type="single"
                collapsible
                value={openFreelanceItem}
                className="border-b-0"
                onValueChange={setOpenFreelanceItem}
              >
                <AccordionItem value={`experience-${freelancing.id}`}>
                  <AccordionTrigger className="border-b-0">
                    <div className="flex-1 flex flex-col items-start justify-center py-4 pl-4 gap-1 h-full">
                      <h3 className="text-balance font-mono  font-medium text-base leading-snug flex gap-2 items-center justify-center">
                        {freelancing.company}

                        <a
                          href={freelancing?.href as string}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ArrowUpRight className="size-4 text-muted-foreground hover:text-primary" />
                        </a>
                      </h3>
                      <span className="text-muted-foreground font-normal text-sm">
                        {freelancing.duration}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 border-b-0!">
                    <div className="prose prose-sm max-w-none font-mono text-foreground prose-zinc dark:prose-invert prose-headings:font-sans prose-headings:font-semibold prose-headings:text-balance prose-h2:border-b prose-h2:border-edge prose-h2:pb-2 prose-h2:text-2xl prose-lead:text-base prose-a:font-medium prose-a:break-words prose-a:text-foreground prose-a:underline prose-a:underline-offset-4 prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:border-edge">
                      <p> {freelancing.description}</p>

                      <ul>
                        {freelancing?.tasks?.map((feature, index) => (
                          <li key={index}>{feature?.task}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {freelancing?.badges?.map((badge, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center rounded-lg bg-zinc-50 px-1.5 py-0.5 font-mono text-xs text-muted-foreground dark:bg-zinc-900"
                          >
                            {badge?.badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          )
        })}
      </div>
      <div className="px-4 py-2   ">
        <h3 className="text-primary font-medium ">Education</h3>
      </div>
      <div className=" full-line-bottom relative ">
        {educationData.map((institute, index) => (
          <div key={index} className="relative pl-10">
            {index !== educationData.length - 1 && (
              <div className="absolute left-6 top-5 h-full w-px bg-border" />
            )}

            <div className="absolute left-3 top-5 z-10">
              <div
                className="flex size-6 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground  "
                aria-hidden="true"
              >
                <institute.icon className="size-4" />
              </div>
            </div>

            {/* Accordion */}
            <Accordion
              type="single"
              collapsible
              value={openEducationItem}
              className="border-b-0"
              onValueChange={setOpenEducationItem}
            >
              <AccordionItem value={`experience-${index}`}>
                <AccordionTrigger className="border-b-0">
                  <div className="flex-1 flex flex-col items-start justify-center py-4 pl-4  gap-1 h-full">
                    <h3 className="text-balance font-mono  font-medium text-base leading-snug flex gap-2 items-center justify-center">
                      {institute.institution}

                    </h3>
                    <span className="text-muted-foreground font-normal text-sm">
                      {institute.duration}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 border-b-0!">
                  <div className="prose prose-sm max-w-none font-mono text-foreground prose-zinc dark:prose-invert prose-headings:font-sans prose-headings:font-semibold prose-headings:text-balance prose-h2:border-b prose-h2:border-edge prose-h2:pb-2 prose-h2:text-2xl prose-lead:text-base prose-a:font-medium prose-a:break-words prose-a:text-foreground prose-a:underline prose-a:underline-offset-4 prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:border-edge">
                    <p> {institute.description}</p>

                    <ul>
                      {institute.points.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                 
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;

export const DiscountIcon = ({
  size = 24,
  color = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <g xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor">
      <path
        strokeWidth="2"
        d="M10.51 3.665a2 2 0 0 1 2.98 0l.7.782a2 2 0 0 0 1.601.663l1.05-.058a2 2 0 0 1 2.107 2.108l-.058 1.049a2 2 0 0 0 .663 1.6l.782.7a2 2 0 0 1 0 2.981l-.782.7a2 2 0 0 0-.663 1.601l.058 1.05a2 2 0 0 1-2.108 2.107l-1.049-.058a2 2 0 0 0-1.6.663l-.7.782a2 2 0 0 1-2.981 0l-.7-.782a2 2 0 0 0-1.601-.663l-1.05.058a2 2 0 0 1-2.107-2.108l.058-1.049a2 2 0 0 0-.663-1.6l-.782-.7a2 2 0 0 1 0-2.981l.782-.7a2 2 0 0 0 .663-1.601l-.058-1.05A2 2 0 0 1 7.16 5.053l1.049.058a2 2 0 0 0 1.6-.663l.7-.782Z"
      />
      <path
        strokeLinejoin="round"
        strokeWidth="3"
        d="M9.5 9.5h.01v.01H9.5zm5 5h.01v.01h-.01z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m15 9l-6 6"
      />
    </g>
  </svg>
);

export const CoinIcon = ({ size = 24, color = "currentColor", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      d="M6 2h12v2H6V2zM4 6V4h2v2H4zm0 12V6H2v12h2zm2 2v-2H4v2h2zm12 0v2H6v-2h12zm2-2v2h-2v-2h2zm0-12h2v12h-2V6zm0 0V4h-2v2h2zm-9-1h2v2h3v2h-6v2h6v6h-3v2h-2v-2H8v-2h6v-2H8V7h3V5z"
    />
  </svg>
);

const educationData = [
  {
    duration: "2009 - 2012",
    institution: "Cagayan State University",
    icon: GraduationCap,
    description:
      "Graduated with a Bachelor of Science in Information Technology from Cagayan State University, Gonzaga Campus",
    points: [
      "Bachelor of Science in Information Technology",
      "Learning programming, data structures, and web development",
    ],
  },
];