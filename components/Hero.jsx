import { FileText, Github, Send } from "lucide-react";
import Link from "next/link";
import {
    RiArrowDownSLine,
    RiBriefcase4Fill,
    RiLinkedinFill,
    RiTodoFill,
} from "react-icons/ri";
import Badge from "./Badge";
import DevImg from "./DevImg";
import { Button } from "./ui/button";

const Hero = () => {
    return (
        <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none backdrop-blur">
            <div className="container mx-auto">
                <div className="flex justify-between gap-x-8">
                    {/* text  */}
                    <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                        <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
                            Software Engineer
                        </div>
                        <h1 className="h1 mb-4">Hi, I'm Abishek</h1>
                        <p className="subtitle max-w-[490] mx-auto xl:mx-0">
                            Welcome! I'm a passionate software engineer with a
                            knack for crafting elegant solutions and pushing the
                            boundaries of technology. Specializing in Full Stack
                            Development, Software Development, and Coding, I
                            bring a wealth of experience in building robust
                            microservices, implementing automation testing
                            frameworks, and creating intuitive user interfaces.
                            Let's embark on a journey of innovation and
                            discovery together!
                        </p>
                        {/* buttons  */}
                        <div className="flex flex-col ga p-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                            <Link href={"/contact"}>
                                <Button className="gap-x-2">
                                    Contact me <Send size={18} />
                                </Button>
                            </Link>

                            <a
                                href="https://drive.google.com/file/d/1luDzcL22HLPrpWyOH5N1urDQotjCjFSz/view?usp=drive_link"
                                target="_blank"
                            >
                                <Button variant="secondary" className="gap-x-2">
                                    View Resume <FileText size={18} />
                                </Button>
                            </a>
                            <a
                                href="https://github.com/abishek-as"
                                target="_blank"
                            >
                                <Button variant="secondary" className="gap-x-2">
                                    GitHub <Github size={18} />
                                </Button>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/abishek-as"
                                target="_blank"
                            >
                                <Button variant="secondary" className="gap-x-2">
                                    LinkedIn{" "}
                                    <RiLinkedinFill
                                        size={18}
                                        className="mb-1"
                                    />
                                </Button>
                            </a>
                        </div>
                        {/* socials  */}
                        {/* <Socials
              containerStyles="flex gap-x-6 m-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            /> */}
                    </div>
                    {/* image  */}
                    <div className="hidden xl:flex relative">
                        {/* badge  */}
                        <Badge
                            containerStyles="absolute top-[24%] -left-[5rem]"
                            icon={<RiBriefcase4Fill />}
                            endCountNum={1.8}
                            badgeText="Years Of Experience"
                        />
                        {/* badge 2  */}
                        {/* <Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<RiTodoFill />}
              endCountNum={11}
              // endCountText={'k'}
              badgeText="Intuitive Projects"
            /> */}
                        {/* badge 3  */}
                        <Badge
                            containerStyles="absolute top-[55%] -right-8"
                            icon={<RiTodoFill />}
                            endCountNum={11}
                            // endCountText={'k'}
                            badgeText="Intuitive Projects"
                        />
                        <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2 "></div>
                        <DevImg
                            containerStyles="bg-hero_shape w-[550px] h-[500px] bg-no-repeat relative bg-bottom"
                            imgSrc="/hero/hero.png"
                        />
                    </div>
                </div>
                {/* icon   */}
                <div className="hidden md:flex absolute left-2/4 botton-44 xl:bottom-12 animate-bounce">
                    <RiArrowDownSLine className="text-3xl text-primary" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
