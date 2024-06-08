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
import Image1 from "@/public/assets/thumb1.png";
import Image2 from "@/public/assets/thumb2.png";
import Image3 from "@/public/assets/thumb3.png";

// Component
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "frontend Project",
        title: "Project 1",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, in?",
        stack: [
            {
                name: "html 5"
            },
            {
                name: "css 3"
            },
            {
                name: "JavaScript"
            },
        ],
        image: Image1,
        github: "",
        live: "",
    },
    {
        num: "02",
        category: "frontend Project",
        title: "Project 2",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, in?",
        stack: [
            {
                name: "html 5"
            },
            {
                name: "css 3"
            },
            {
                name: "JavaScript"
            },
        ],
        image: Image2,
        github: "",
        live: "",
    },
    {
        num: "03",
        category: "frontend Project",
        title: "Project 3",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, in?",
        stack: [
            {
                name: "html 5"
            },
            {
                name: "css 3"
            },
            {
                name: "JavaScript"
            },
        ],
        image: Image3,
        github: "",
        live: "",
    },
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
                        <ul className="flex gap-4">
                            {project.stack.map(({ name }, i) => (
                                <li
                                    key={i}
                                    className="text-xl text-accent"
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
                            <Link href={project.live}>
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
                            <Link href={project.github}>
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
                                                alt="" />
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