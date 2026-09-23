import { FaCodepen, FaFacebookF, FaGithub, FaLinkedinIn, FaPatreon, FaYoutube } from "react-icons/fa6";
import { FiCoffee, FiHeart, FiMail, FiUser } from "react-icons/fi";
import "./Footer.css";

const footerLinks = [
    ["Portfolio", "https://www.ashishranjan.net/", FiUser],
    ["GitHub", "https://github.com/a2rp", FaGithub],
    ["CodePen", "https://codepen.io/ash1198", FaCodepen],
    ["LinkedIn", "https://www.linkedin.com/in/aashishranjan", FaLinkedinIn],
    ["Facebook", "https://www.facebook.com/theash.ashish/", FaFacebookF],
    ["YouTube", "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", FaYoutube],
    ["Email", "mailto:ash.ranjan09@gmail.com", FiMail],
    ["Support", "https://a2rp-donation-page.netlify.app/", FiHeart],
    ["Buy Me a Coffee", "https://buymeacoffee.com/a2rp", FiCoffee],
    ["Patreon", "https://www.patreon.com/a2rp", FaPatreon],
];

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="site-footer__inner">
                <a className="site-footer__brand" href="#slider" aria-label="Back to image slider">
                    <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Ashish Ranjan logo" />
                    <span>Image Slider</span>
                </a>
                <nav className="site-footer__links" aria-label="Social and support links">
                    {footerLinks.map(([label, href, Icon]) => (
                        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
                            <Icon aria-hidden="true" />
                        </a>
                    ))}
                </nav>
                <p>
                    Copyright &copy; {new Date().getFullYear()} {" "}
                    <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">
                        Ashish Ranjan
                    </a>
                </p>
            </div>
        </footer>
    );
}
