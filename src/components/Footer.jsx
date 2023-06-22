import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer(){
    return (
        <footer>
            <ul className="footer--list">
                <li>Michael Toy Portfolio</li>
                <li>Copyright @2023</li>
                <li>
                    <a href="https://github.com/miket2997" target="_blank">
                    <FontAwesomeIcon icon={faGithub} size="3x" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/michaeltoy29/">
                        <FontAwesomeIcon icon={ faLinkedin } size="3x" target="_blank" />
                    </a>
                </li>
            </ul>
        </footer>
    )
}