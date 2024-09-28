"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

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
const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* Logo */}
                <div className="mt-32 mb-32 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text 4xl font-semibold">
                            Mauricio<span className="text-accent">&#123;&#125;
                            </span>
                        </h1>
                    </Link>
                </div>
                {/* Nav */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map(({ name, path }, i) => (
                        <Link
                            href={path}
                            key={i}
                            className={` ${path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}>
                            {name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav