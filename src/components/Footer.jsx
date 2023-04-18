import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer(){
    return (
        <footer>
            <ul>
                <li>Michael Toy Portfolio</li>
                <li>Copyright @2023</li>
                <li>
                    <a href="https://github.com/miket2997" target="_blank">
                    <FontAwesomeIcon icon={faGithub} size="3x" />
                    </a>
                </li>
            </ul>
        </footer>
    )
}