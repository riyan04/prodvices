'use client'
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

type ProjectType = {
  name: string;
  description: string;
  img?: string;
  github?: string;
  view?: string;
};

const ProjectList: ProjectType[] = [
  {
    name: "Workman",
    description:
      "A product management app designed to make your workflow productive and organized",
    img: "/workmanss.png",
    github: "https://github.com/riyan04/workman",
    view: "https://workman-beta.vercel.app/",
  },
  {
    name: "Craftboard",
    description:
      "A creative brainstorming white board app for collaborative flow of ideas, design mockups and workflow visualization",
    img: "/craftboardss.png",
    github: "https://github.com/riyan04/craftboard",
    view: "https://craftboard.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className="my-5 px-4">
      <div className="flex items-center justify-center">
        <h1 className="text-4xl mb-5 font-bold">Projects</h1>
      </div>
      <div className="mt-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {ProjectList.map((project, index) => (
          <Card
            key={index}
            className="w-full hover:scale-105 transition ease-in-out border-none hover:shadow-2xl"
          >
            <CardContent>
              {project.img ? (
                <Image
                  className="shadow-md rounded-lg"
                  src={project.img}
                  alt="proImage"
                  width={300}
                  height={200}
                  layout="responsive"
                />
              ) : (
                <div className="w-full h-[150px] bg-red-500 flex items-center justify-center text-white font-bold">
                  No Image
                </div>
              )}
            </CardContent>
            <div className="px-5">
              <Separator />
            </div>
            <CardHeader>
              <CardTitle>
                <h1 className="text-2xl font-semibold">{project.name}</h1>
              </CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <div className="w-full flex justify-end items-center gap-5">
                {project.view && (
                  <Button
                    variant="ghost"
                    className="hover:bg-slate-300"
                    onClick={() => window.open(project.view, "_blank")}
                  >
                    <FaExternalLinkAlt />
                  </Button>
                )}
                {project.github && (
                  <Button
                    variant="ghost"
                    className="hover:bg-slate-300"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <FaGithub />
                  </Button>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
