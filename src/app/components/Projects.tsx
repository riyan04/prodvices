import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


type ProjectType = {
  name: string,
  description: string,
  img?: string,
  github?: string,
  view?: string
}

const ProjectList: ProjectType[] = [
  {
    name: "pro1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ea tenetur ipsum, deleniti autem labore fugit. In blanditiis porro, error nostrum, minus numquam unde sit modi quia necessitatibus, facere amet.",
    img: "mongodb-icon-2.svg",
    github: "Githublink",
    view: "viewLink"
  },
  {
    name: "pro1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ea tenetur ipsum, deleniti autem labore fugit. In blanditiis porro, error nostrum, minus numquam unde sit modi quia necessitatibus, facere amet.",
    img: "",
    github: "Githublink",
    view: "viewLink"
  },
  {
    name: "pro1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ea tenetur ipsum, deleniti autem labore fugit. In blanditiis porro, error nostrum, minus numquam unde sit modi quia necessitatibus, facere amet.",
    img: "nest.svg",
    github: "Githublink",
    view: "viewLink"
  },
  {
    name: "pro1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ea tenetur ipsum, deleniti autem labore fugit. In blanditiis porro, error nostrum, minus numquam unde sit modi quia necessitatibus, facere amet.",
    
    github: "Githublink",
    view: "viewLink"
  },
  {
    name: "pro1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ea tenetur ipsum, deleniti autem labore fugit. In blanditiis porro, error nostrum, minus numquam unde sit modi quia necessitatibus, facere amet.",
    img: "",
    github: "Githublink",
    view: "viewLink"
  },
] 

const Projects = () => {
  return (
    <div className="my-5">
    <div className="flex items-center justify-center">
      <h1 className=" text-4xl mb-5 font-bold">Projects</h1>
    </div>
    <div className="  grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {
        ProjectList.map((project, index) => (
          <Card key={index} className=" w-full bg-slate-100 border-none">
        <CardContent>
          {(project.img)
            ? (
              <Image src={project.img} alt="proImage" width={200} height={100} />
            )
            : (
              <div className=" w-full h-[200px] bg-red-500">
                Image
              </div>
            )
          }
          
        </CardContent>
        <div className=" px-7">
          <Separator />
        </div>
        <CardHeader>
          <CardTitle>
          <h1 className=" text-2xl font font-semibold">{project.name}</h1>
          </CardTitle>
          <CardDescription>
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <div className=" flex items-center gap-4">
            <Button>
              <FaExternalLinkAlt />
            </Button>
            <Button>
              <FaGithub />
            </Button>
          </div>
        </CardFooter>
      </Card>
        ))
      }
      

    </div>
    </div>
  )
}

export default Projects