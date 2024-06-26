"use client";
import { FaHtml5, FaCss3Alt, FaJs, FaSass, FaReact, FaGitAlt, FaGithub, FaNodeJs, FaTerminal, FaNpm } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiRedux } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
// Component
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion"


export const about = {
    title: "Sobre mi",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quis!",
    info: [
        {
            fieldName: "Nombre",
            fieldValue: "Mauricio Oropeza",
        },
        {
            fieldName: "Numero",
            fieldValue: "+58 412-355-0465",
        },
        {
            fieldName: "Discord",
            fieldValue: "fakbo",
        },
        {
            fieldName: "Nacionalidad",
            fieldValue: "Venezolano",
        },
        {
            fieldName: "Email",
            fieldValue: "fakbodev@gmail.com",
        },

        {
            fieldName: "Freelancer",
            fieldValue: "Disponible",
        },
        {
            fieldName: "Lenguajes",
            fieldValue: "español/ingles",
        },


    ]
}


const experience = {
    title: "Experiencia",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, est?",
    items: [
        {
            company: "Freelancer",
            position: "Desarrollador Frontend",
            duration: "2023 - Actualmente",
        }
    ]
};

const education = {
    title: "Educacion",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, est?",
    items: [
        {
            institution: "Universidad Santiago mariño",
            name: "Ing en sistemas",
            duration: "2020 - Actualmente",
        },

        {
            institution: "Curso Online",
            name: "MDN Guie for Web Developer",
            duration: "2023-2024",
        },

        {
            institution: "Curso Online",
            name: "Estudio AutoDidacta",
            duration: "2023-2024",
        },

    ]
};

const skills = {
    title: "Mis Habilidades",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nihil.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "Html 5",
        },
        {
            icon: <FaCss3Alt />,
            name: "Css 3",
        },
        {
            icon: <FaJs />,
            name: "JavaScript",
        },
        {
            icon: <FaSass />,
            name: "Sass",
        },
        {
            icon: <FaReact />,
            name: "Reactjs",
        },
        {
            icon: <FaGitAlt />,
            name: "Git",
        },
        {
            icon: <FaGithub />,
            name: "Github",
        },
        {
            icon: <RiTailwindCssFill />,
            name: "Tailwindcss",
        },
        {
            icon: <SiTypescript />,
            name: "Typescript",
        },
        {
            icon: <SiRedux />,
            name: "Redux Toolkit",
        },
        {
            icon: <RiNextjsFill />,
            name: "Nextjs",
        },
        {
            icon: <TbBrandFramerMotion />,
            name: "Framer Motion",
        },
        {
            icon: <FaNodeJs />,
            name: "Nodejs",
        },
        {
            icon: <FaTerminal />,
            name: "Terminal",
        },
        {
            icon: <FaNpm />,
            name: "Node Package Manager"
        }

    ]
};
const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1, transition: {
                    delay: 2.4, duration: 0.4, ease: "easeIn"
                }
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >

            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experiencia</TabsTrigger>
                        <TabsTrigger value="education">Educacion</TabsTrigger>
                        <TabsTrigger value="skills">Habilidades</TabsTrigger>
                        <TabsTrigger value="about">Sobre mi</TabsTrigger>
                    </TabsList>

                    {/* Content */}

                    <div className="min-h-[70px] w-full">
                        {/* Experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-6">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map(({ company, position, duration }, i) => (
                                            <li
                                                key={i}
                                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                                            >
                                                <span className="text-accent">{duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{position}</h3>
                                                <div className="flex items-center gap-3">
                                                    {/* dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{company}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>



                        {/* Education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-6">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map(({ institution, name, duration, }, i) => (
                                            <li
                                                key={i}
                                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                                            >
                                                <span className="text-accent">{duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{institution}</h3>
                                                <div className="flex items-center gap-3">
                                                    {/* dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{name}</p>

                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* Skills */}
                        <TabsContent value="skills" className="w-full">
                            <div className="flex flex-col gap-[30px]">

                                <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                                    {skills.skillList.map(({ icon, name }, i) => (
                                        <li key={i}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">{icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="capitalize">{name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map(({ fieldName, fieldValue }, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center justify-center xl:justify-start gap-4"
                                        >
                                            <span className="text-white/60">{fieldName}</span>
                                            <span className="text-xl">{fieldValue}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume