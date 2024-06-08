import Link from "next/link";

import { FaGithub, FaLinkedin, FaTwitter, FaDiscord, } from "react-icons/fa"


const socials = [
    { icon: <FaGithub />, path: "https://github.com/fakbo-dev" },
    { icon: <FaLinkedin />, path: "" },
    { icon: <FaTwitter />, path: "" },
    { icon: <FaDiscord />, path: "" },
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