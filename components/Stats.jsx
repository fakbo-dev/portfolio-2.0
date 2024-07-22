"use client";
import CountUp from "react-countup";

const stats = [
    {
        num: 1,
        text: "año de experiencia",
    },
    {
        num: 4,
        text: "Projectos Completado",
    },
    {
        num: 15,
        text: "Tecnologias Dominadas",
    },
    {
        num: 300,
        text: "Commits",
    },



]
const Stats = () => {

    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map(({ num, text }, i) => (
                        <div
                            className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                            key={i}
                        >
                            <CountUp end={num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold" />
                            <p className={`${text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Stats