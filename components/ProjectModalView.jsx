import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FolderOpenDot } from "lucide-react";
import Image from "next/image";

export default function ProjectModalView({ project }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">
          <FolderOpenDot className="mr-2 h-6 w-6" /> Project Details
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{project.name}</DialogTitle>
          <DialogDescription>Project Details</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="relative w-full h-[180px] flex items-center justify-center bg-tertiary ">
            <Image
              className="shadow-2xl mr-3"
              src={project.image}
              width={500}
              height={100}
              alt=""
              priority
            />
          </div>
          <div className="p-6">{project.tools}</div>
        </div>
        <DialogFooter>
          <Button type="primary" size="sm">
            GitHub
          </Button>
          <Button type="primary" size="sm">
            Live Link
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
