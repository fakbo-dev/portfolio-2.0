"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
const services = [
    {
        num: "01",
        title: "Desarrollo Web",
        description: "El desarrollo web es el proceso de creación de sitios web o aplicaciones web. Implica tareas como diseño web, secuencias de comandos del lado del cliente/servidor y configuración de seguridad de la red. El desarrollo web puede abarcar desde la creación de una simple página estática de texto plano hasta complejas aplicaciones de Internet basadas en la web, negocios electrónicos o servicios de redes sociales.",
        href: "/work",
    },
    {
        num: "02",
        title: "SEO",
        description: "SEO es la práctica de aumentar la cantidad y calidad del tráfico a su sitio web a través de resultados orgánicos de motores de búsqueda. Implica realizar cambios en el diseño y el contenido de su sitio web que lo hagan más atractivo para un motor de búsqueda. El objetivo es que el motor de búsqueda muestre su sitio como uno de los primeros resultados en la página de resultados del motor de búsqueda.",
        href: "/work",
    },
    {
        num: "03",
        title: "Diseño Web",
        description: "El diseño web abarca muchas habilidades y disciplinas diferentes en la producción y mantenimiento de sitios web. Las diferentes áreas del diseño web incluyen diseño gráfico web; diseño de interfaz; creación, incluido código estandarizado y software propietario; diseño de experiencia de usuario; y optimización de motores de búsqueda. A menudo, muchas personas trabajarán en equipos y cubrirán diferentes aspectos del proceso de diseño, aunque algunos diseñadores los cubrirán todos.",
        href: "/work",
    },
    {
        num: "04",
        title: "Problem Solving",
        description: "La resolución de problemas implica identificar, analizar y resolver problemas. Es una habilidad fundamental en muchas profesiones y disciplinas, incluido el desarrollo y el diseño web. En el contexto del desarrollo web, la resolución de problemas puede implicar depurar código, optimizar el rendimiento, mejorar la experiencia del usuario o encontrar soluciones innovadoras para satisfacer las necesidades del cliente.",
        href: "/work",
    },
]


const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center  py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div initial={{ opacity: 0 }} animate={{
                    opacity: 1,
                    transition: { delay: 2.4, duration: 0.4, ease: "easeIn", }
                }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                    {services.map(({ num, title, description, href }, i) => (
                        <div key={i}
                            className="flex-1 flex flex-col justify-center gap-6 group">
                            {/* Top */}
                            <div className="w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                    {num}
                                </div>
                                <Link
                                    href={href}
                                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                                >
                                    <BsArrowDownRight className="text-primary text-3xl" />
                                </Link>
                            </div>
                            {/* Title  */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{title}</h2>
                            {/* Description */}
                            <p className="text-white/60 max-h-[500px]">{description}</p>
                            {/* Border */}
                            <div className="border-b border-white/20 w-full"></div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Services

