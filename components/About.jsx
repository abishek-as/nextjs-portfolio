import { skills } from "@/constants";
import { Button, Tooltip } from "@nextui-org/react";
import {
    Briefcase,
    Calendar,
    GraduationCap,
    HomeIcon,
    MailIcon,
    PhoneCall,
    User2,
} from "lucide-react";
import Image from "next/image";
import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const infoData = [
    {
        icon: <User2 size={20} />,
        text: "Abishek A S",
    },
    {
        icon: <PhoneCall size={20} />,
        text: "+91-8825352645",
    },
    {
        icon: <MailIcon size={20} />,
        text: "abishek.sankar@protonmail.com",
    },
    {
        icon: <Calendar size={20} />,
        text: "Born on 11 Nov, 2000",
    },
    {
        icon: <GraduationCap size={20} />,
        text: "Master of Technology in Software Engineering (Integrated)",
    },
    {
        icon: <HomeIcon size={20} />,
        text: "Neyveli, TamilNadu, India",
    },
];

const qualificationData = [
    {
        title: "education",
        data: [
            {
                university: "Vellore Institute of Technology, Chennai",
                qualification: "MTech Software Engineering (Integrated)",
                years: "2018 - 2023",
            },
            {
                university: "Jawahar Higher Secondary School, Neyveli",
                qualification: "H.S.C",
                years: "2016 - 2018",
            },
            {
                university: "Jawahar Higher Secondary School, Neyveli",
                qualification: "S.S.C",
                years: "2004 - 2016",
            },
            // {
            //   university: "LPU University",
            //   qualification: "Master of Computer Applications",
            //   years: "2024 - Present",
            // },
            // {
            //     university: 'IIT Patna',
            //     qualification: 'M.Tech in Cloud Computing',
            //     years:'2026- 2028',
            // },
        ],
    },

    {
        title: "experience",
        data: [
            {
                company: "Maersk Training",
                role: "Junior Business Analyst",
                years: "May 2024 - Present",
            },
            {
                company: "Maersk Training",
                role: "Software Engineer Intern",
                years: "Feb 2024 - Apr 2024",
            },
            {
                company: "Stryker",
                role: "R&D Intern",
                years: "Sep 2022 - July 2023",
            },
        ],
    },
];

const skillData = [
    {
        title: "skills",
        data: [
            {
                name: "HTML , CSS, JavaScript ",
            },
            {
                name: "React , Next , Bootstrap",
            },
            {
                name: "Typescript ,Tailwind , Sass CSS ",
            },
            {
                name: "Redux, MUI , shadcn-UI, Prisma ",
            },
        ],
    },
    {
        title: "tools",
        data: [
            {
                imgPath: "/about/vscode.svg",
            },
            {
                imgPath: "/about/docker.svg",
            },
            {
                imgPath: "/about/firebase.svg",
            },
        ],
    },
];

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    };
    //  console.log(getData(qualificationData , 'experience'))
    return (
        <section className="xl:h-[860px] pb-12 pt-1 xl:py-24 ">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto pt-2">
                    About Me
                </h2>
                <div className="flex flex-col xl:flex-row">
                    {/* image  */}
                    <div className="hidden xl:flex flex-1 relative">
                        <DevImg
                            containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[560px] h-[500px] bg-no-repeat relative"
                            imgSrc="/hero/hero.png"
                        />
                    </div>
                    {/* tabs  */}
                    <div className="flex-1">
                        <Tabs defaultValue="personal">
                            <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                                <TabsTrigger
                                    className="w-[162px] xl:w-auto"
                                    value="personal"
                                >
                                    Personal Info
                                </TabsTrigger>
                                <TabsTrigger
                                    className="w-[162px] xl:w-auto"
                                    value="qualifications"
                                >
                                    Background
                                </TabsTrigger>
                                <TabsTrigger
                                    className="w-[162px] xl:w-auto"
                                    value="skills"
                                >
                                    Skills
                                </TabsTrigger>
                            </TabsList>
                            {/* tabs content  */}
                            <div className="text-lg mt-12 xl:mt-8">
                                {/* personal  */}
                                <TabsContent value="personal">
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-4">
                                            Dynamic software engineer driven by
                                            innovation and excellence.
                                        </h3>
                                        <p className="subtitle max-w-xl max-auto xl:mx-0">
                                            I excel in developing intuitive,
                                            full-stack websites using
                                            cutting-edge technology to deliver
                                            dynamic and engaging user
                                            experiences.
                                        </p>
                                        {/* icons  */}
                                        <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                            {infoData.map((item, index) => {
                                                return (
                                                    <div
                                                        className="flex items-center gap-x-4 mx-auto xl:mx-0"
                                                        key={index}
                                                    >
                                                        <div className="text-primary ">
                                                            {item.icon}
                                                        </div>
                                                        <div>{item.text}</div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        {/* languages  */}
                                        <div className="flex  flex-col gap-y-2">
                                            <div className="text-primary">
                                                Languages Skill
                                            </div>
                                            {/* <div className="border-b border-border"> */}
                                            English, Tamil
                                            {/* </div> */}
                                        </div>
                                    </div>
                                </TabsContent>
                                {/* qualifications  */}
                                <TabsContent value="qualifications">
                                    <div>
                                        <h3 className="h3 mb-8 text-center xl:text-left">
                                            My Awesome Journey
                                        </h3>
                                        {/* experience and education wrapper  */}
                                        <div className="grid md:grid-cols-2 gap-y-8">
                                            {/* experience  */}
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <Briefcase />
                                                    <h4 className="capitalize font-medium">
                                                        {
                                                            getData(
                                                                qualificationData,
                                                                "experience"
                                                            ).title
                                                        }
                                                    </h4>
                                                </div>
                                                {/* list  */}
                                                <div className="flex flex-col gap-y-8">
                                                    {getData(
                                                        qualificationData,
                                                        "experience"
                                                    ).data.map(
                                                        (item, index) => {
                                                            const {
                                                                company,
                                                                role,
                                                                years,
                                                            } = item;
                                                            return (
                                                                <div
                                                                    className="flex gap-x-8 group"
                                                                    key={index}
                                                                >
                                                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                    </div>
                                                                    <div>
                                                                        <div className=" font-semibold text-xl leading-none mb-2">
                                                                            {
                                                                                company
                                                                            }
                                                                        </div>
                                                                        <div className="text-lg leading-none text-muted-foreground mb-4">
                                                                            {
                                                                                role
                                                                            }
                                                                        </div>
                                                                        <div className="text-base font-medium">
                                                                            {
                                                                                years
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                            {/* education  */}
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <GraduationCap size={28} />
                                                    <h4 className="capitalize font-medium">
                                                        {
                                                            getData(
                                                                qualificationData,
                                                                "education"
                                                            ).title
                                                        }
                                                    </h4>
                                                </div>
                                                {/* list  */}
                                                <div className="flex flex-col gap-y-8">
                                                    {getData(
                                                        qualificationData,
                                                        "education"
                                                    ).data.map(
                                                        (item, index) => {
                                                            const {
                                                                university,
                                                                qualification,
                                                                years,
                                                            } = item;
                                                            return (
                                                                <div
                                                                    className="flex gap-x-8 group"
                                                                    key={index}
                                                                >
                                                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                    </div>
                                                                    <div>
                                                                        <div className=" font-semibold text-xl leading-none mb-2">
                                                                            {
                                                                                university
                                                                            }
                                                                        </div>
                                                                        <div className="text-lg leading-none text-muted-foreground mb-4">
                                                                            {
                                                                                qualification
                                                                            }
                                                                        </div>
                                                                        <div className="text-base font-medium">
                                                                            {
                                                                                years
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="skills">
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-7">
                                            Tools I Use Everyday <br />{" "}
                                            Languages, Libraries, Databases, Dev
                                            Tools
                                        </h3>
                                        {/* skills  */}
                                        <div className="mb-16">
                                            <div className="border-b border-border mb-4"></div>
                                            {/* Skill List  */}
                                            <div className="mt-10 flex flex-wrap sm:gap-12 gap-4 justify-center items-center">
                                                {skills.map((skills) => (
                                                    <div
                                                        className="block-container w-20 h-20"
                                                        key={skills.name}
                                                    >
                                                        <div className="rounded-xl " />
                                                        <Tooltip
                                                            content={
                                                                skills.name
                                                            }
                                                            className="border border-primary bg-transparent text-primary rounded-md"
                                                        >
                                                            <Button className="border backdrop-blur-2xl dark:bg-zinc-800/10 dark:border-neutral-800/60 rounded-xl flex justify-center items-center h-20 w-20">
                                                                <Image
                                                                    src={
                                                                        skills.imageUrl
                                                                    }
                                                                    alt={
                                                                        skills.name
                                                                    }
                                                                    // className="w-1/2 h-1/2 object-contain"
                                                                    className="w-16 h-16 object-contain"
                                                                />
                                                            </Button>
                                                        </Tooltip>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
