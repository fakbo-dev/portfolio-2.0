"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger }
    from "@/components/ui/tooltip";
import Image from "next/image";
import Image1 from "@/public/assets/p1.png";
import Image2 from "@/public/assets/p2.png";
import Image3 from "@/public/assets/p3.png";
import Image4 from "@/public/assets/p4.png";
import Image5 from "@/public/assets/p5.png"
// Component
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "DON Oscar",
        title: "Project 1",
        description: "Pagina principal para Negocio de carpinteria/ebanisteria",
        stack: [
            {
                name: "react"
            },
            {
                name: "tailwindcss"
            },
            {
                name: "nextjs"
            },
            {
                name: "shadcn ui"
            },
            {
                name: "scroll animation"
            },
        ],
        image: Image1,
        github: "https://github.com/fakbo-dev/D.O.N-Oscar-Landing-Page",
        live: "https://d-o-n-oscar-landing-page.vercel.app/",
    },
    {
        num: "02",
        category: "Pokedex api",
        title: "Project 2",
        description: "Una pokedex usando la api de pokeapi y recibiendo datos de un servidor externo.",
        stack: [
            {
                name: "react"
            },
            {
                name: "tailwindcss"
            },
            {
                name: "nextjs"
            },
            {
                name: "Fetching data from API"
            },
            {
                name: "react Hooks"
            },

        ],
        image: Image2,
        github: "https://github.com/fakbo-dev/pokedex-api-V2",
        live: "https://pokedex-api-v2.vercel.app/",
    },
    {
        num: "03",
        category: "Snake Game",
        title: "Project 3",
        description: "un simple juego de la serpiente hecho con typescript y intervalos de js sin usar canvas.",
        stack: [
            {
                name: "html5"
            },
            {
                name: "css3"
            },
            {
                name: "typescript"
            },
        ],
        image: Image3,
        github: "https://github.com/fakbo-dev/snake-game-with-ts",
        live: "https://snake-game-with-ts.vercel.app/",
    },
    {
        num: "04",
        category: "Portafolio",
        title: "Project 3",
        description: "mi portafolio que contiene todos mis conocimientos hecho con nextjs animado con framer motion y utilizando shadc ui para la interfaz de usuario.",
        stack: [
            {
                name: "nextjs"
            },
            {
                name: "tailwindcss"
            },
            {
                name: "framer motion"
            },
            {
                name: "react"
            },
        ],
        image: Image4,
        github: "https://github.com/fakbo-dev/portfolio-2.0",
        live: "https://portafolio-tau-bay-37.vercel.app/",
    },
    {
        num: "05",
        category: "Alpaca Generator",
        title: "Project 4",
        description: "Interfaz para crear tu propia foto de perfil personalizada de una alpaca con capacidad de descarga",
        stack: [
            {
                name: "react"
            },
            {
                name: "tailwindcss"
            },
            {
                name: "vite"
            },

        ],
        image: Image5,
        github: "https://github.com/fakbo-dev/alpaca-generator",
        live: "https://alpaca-generator-tawny.vercel.app/",
    }
]

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSliceChange = (swiper) => {
        // Get current slide index
        const currentIndex = swiper.activeIndex;
        // Update project state based on current slide index
        setProject(projects[currentIndex]);
    }
    return (

        <motion.section initial={{ opacity: 0 }} animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn", }
        }} className="min-h-[80vh] flex felx-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                            {/* outline num */}
                            {project.num}
                        </div>
                        {/* Project Category */}
                        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category}</h2>
                        {/* Project Description */}
                        <p className="text-white/60 ">{project.description}</p>
                        {/* Stack */}
                        <ul className="flex gap-4 flex-col md:flex-row lg:flex-row">
                            {project.stack.map(({ name }, i) => (
                                <li
                                    key={i}
                                    className="xl:text-xl text-base text-accent"
                                >
                                    {name}{i !== project.stack.length - 1 && ","}
                                </li>
                            ))}
                        </ul>
                        {/* Border */}
                        <div className="border border-white/20">
                        </div>
                        {/* button */}
                        <div className="flex items-center gap-4">
                            {/* Live project Button */}
                            <Link href={project.live} target="_blank">
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Projecto en vivo</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>

                            {/* Github Code */}
                            <Link href={project.github} target="_blank">
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Repositorio en github</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSliceChange}>
                            {projects.map(({ num, category, title, description, stack, image, github, live }, i) => (
                                <SwiperSlide
                                    key={i}
                                    className="w-full"
                                >
                                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                        {/* overlay */}
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                                        {/* image */}
                                        <div className="relative w-full h-full ">
                                            <Image src={project.image} fill className="object-cover"
                                                alt="project Image" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            {/* Slider buttons */}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnsStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work