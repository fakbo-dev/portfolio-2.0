import Link from "next/link";
import { Button } from "./ui/button"

// Component
import Nav from "@/components/Nav"
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white " >
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Mauricio<span className="text-accent">&#123;&#125;</span>
                    </h1>
                </Link>

                {/* Desktop nav & Hire me Button*/}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>Contratame!</Button>
                    </Link>
                </div>

                {/* Mobile Nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Header