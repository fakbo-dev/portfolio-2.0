"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "inicio",
        path: "/",
    },
    {
        name: "servicios",
        path: "/services",
    },
    {
        name: "resumen",
        path: "/resume",
    },
    {
        name: "trabajos",
        path: "/work",
    },
    {
        name: "contacto",
        path: "/contact",
    },
];
const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
            {links.map(({ name, path }, i) => (
                <Link href={path} key={i} className={`${path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>{name}</Link>
            ))}
        </nav>
    )
}

export default Nav