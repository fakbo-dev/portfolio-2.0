import Link from "next/link";

import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, } from "react-icons/fa"


const socials = [
    { icon: <FaGithub />, path: "https://github.com/fakbo-dev" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/mauricio-oropeza-fakbo-dev" },
    { icon: <FaTwitter />, path: "https://x.com/fakboDev" },
    { icon: <FaWhatsapp />, path: "https://wa.me/584123550465" },
]
const Socials = ({ containerStyles, iconStyle }) => {
    return (
        <div className={containerStyles}>
            {socials.map(({ icon, path }, i) => (
                <Link key={i} href={path} className={iconStyle} target="_BLANK">{icon}</Link>
            ))}
        </div>
    )
}

export default Socials;