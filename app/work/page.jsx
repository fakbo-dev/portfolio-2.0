"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const projects = [
    {
        num: "01",
        category: "frontend",
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
        image: "",
        github: "",
    },
    {
        num: "02",
        category: "frontend",
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
        image: "",
        github: "",
    },
    {
        num: "03",
        category: "frontend",
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
        image: "",
        github: "",
    },
]

const Work = () => {
    return (
        <div>Works</div>
    )
}

export default Work