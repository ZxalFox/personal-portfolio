import React from "react";
import skillsBG from "../public/bg-skills.png";
import cypress from "../public/icons/cypress.png";
import azureDevOps from "../public/icons/azure.png";
import bootstrap from "../public/icons/bootstrap.png";
import tailwind from "../public/icons/tailwind.png";
import ts from "../public/icons/ts.png";
import next from "../public/icons/next.png";
import react from "../public/icons/react.png";
import postgres from "../public/icons/postgre.png";
import rails from "../public/icons/rails.png";
import Image from "next/image";

const SkillsSection = () => {
  const techStack = [
    { name: "React.JS", level: 8, icon: react, adress: "https://react.dev/" },
    { name: "Next.JS", level: 7, icon: next, adress: "https://nextjs.org/" },
    {
      name: "Typescript",
      level: 7,
      icon: ts,
      adress: "https://www.typescriptlang.org/",
    },
    {
      name: "Ruby on Rails",
      level: 5,
      icon: rails,
      adress: "https://rubyonrails.org/",
    },
    {
      name: "PostgreSQL",
      level: 4,
      icon: postgres,
      adress: "https://www.postgresql.org/",
    },
  ];

  const otherTools = [
    {
      name: "Tailwind CSS",
      icon: tailwind,
      adress: "https://tailwindcss.com/",
    },
    { name: "Bootstrap", icon: bootstrap, adress: "https://getbootstrap.com/" },
    {
      name: "Azure DevOps",
      icon: azureDevOps,
      adress: "https://azure.microsoft.com/en-us/services/devops/",
    },
    { name: "Cypress", icon: cypress, adress: "https://www.cypress.io/" },
  ];

  return (
    <section
      id="skills"
      className="py-16 bg-top bg-cover bg-no-repeat"
      style={{ backgroundImage: `url('${skillsBG.src}')` }}
    >
      <div className="container mx-auto px-4 2xl:px-20 md:px-10 bg-orange-100 rounded-xl shadow-xl py-12">
        <div className="mb-12">
          <div className="text-center text-orange-800">
            <h2 className="text-4xl font-bold  mb-3 text-center ">
              My Tech Stack
            </h2>
            <p className="">
              {" "}
              These are the technologies I am most familiar with{" "}
            </p>
          </div>
          <div className="space-y-6 mt-10">
            {techStack.map((skill, index) => (
              <div key={index} className="flex gap-2 items-center">
                <a
                  className="flex justify-center p-1 w-24 hover:bg-orange-200 rounded-lg transition duration-300 hover:cursor-pointer"
                  href={skill.adress}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    width={500}
                    height={500}
                    src={skill.icon.src}
                    alt={skill.name}
                    className="w-12 h-12"
                  />
                </a>
                <div className="space-y-2 w-full">
                  <div className="flex justify-between">
                    <span className="text-orange-800 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-orange-600">{skill.level}/10</span>
                  </div>
                  <div className="w-full bg-orange-200 rounded-full h-3">
                    <div
                      className="bg-orange-600 h-3 rounded-full"
                      style={{ width: `${skill.level * 10}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center ">
            Other tools that i have experience with
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {otherTools.map((tool, index) => (
              <a
                key={index}
                href={tool.adress}
                target="_blank"
                rel="noreferrer"
                className="bg-orange-100 text-orange-900 p-4 rounded-lg text-center font-medium hover:bg-orange-200 hover:cursor-pointer transition duration-300 border border-orange-200"
              >
                <div className="flex items-center justify-center space-x-2 ">
                  <div>
                    <Image
                      width={500}
                      height={500}
                      src={tool.icon.src}
                      alt={tool.name}
                      className="w-12 h-12"
                    />
                  </div>
                  <span>{tool.name}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
