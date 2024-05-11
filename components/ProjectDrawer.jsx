import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { FolderOpenDot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectDrawer({ project }) {
  const tools = project.tools;
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button size="sm">
          <FolderOpenDot className="mr-2 h-6 w-6" /> Project Details
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="p-2 w-full">
          <DrawerHeader></DrawerHeader>
          <div className="p-4 flex flex-row justify-between">
            <div>
              <Image
                className="shadow-2xl"
                src={project.image}
                width={project.width}
                height={project.height}
                alt=""
                priority
              />
            </div>
            <div className="p-4">
              <DrawerTitle className="text-4xl">{project.name}</DrawerTitle>
              <DrawerDescription className="text-xl mb-4">
                Project Details
              </DrawerDescription>
              <div>
                <span className="italic">Languages and Libraries used : </span>
                {tools.map((item, index) => (
                  <Badge key={index} className="m-1">
                    {item}
                  </Badge>
                ))}
              </div>
              <div className="mt-4 text-lg">
                <p className="italic text-base">Project Description : </p>
                {project.description}
              </div>
            </div>
          </div>
          <DrawerFooter className="mx-auto w-full max-w-sm flex flex-row">
            <Link href={project.github} target="_blank">
              <Button>GitHub</Button>
            </Link>
            <Link href={project.link} target="_blank">
              <Button>Live Link</Button>
            </Link>
            <DrawerClose asChild>
              <Button variant="destructive">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
