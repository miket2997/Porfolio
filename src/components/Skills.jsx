import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faJs, faNode, faReact, faGitAlt } from '@fortawesome/free-brands-svg-icons';



export default function Skills(){

    return (
        <div className="skills" id="skills">
            <h2>Technological Skills</h2>
            <ul className="icons">
                <li>
                    <FontAwesomeIcon icon={faNode} size="4x" />
                </li>
                <li>
                    <FontAwesomeIcon icon={faJs} size="4x"/>
                </li>
                <li>
                    <FontAwesomeIcon icon={faCss3} size="4x"/>
                </li>
                <li>
                    <FontAwesomeIcon icon={faReact} size="4x" />
                </li>
                <li>
                    <FontAwesomeIcon icon={faGitAlt} size="4x" />
                </li>
                <li>
                    <img className="skills--img" src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" />
                </li>
                <li>
                    <img className="skills--img" src="https://www.vectorlogo.zone/logos/json/json-icon.svg" style={{ background: "none" }}/>
                </li>
                <li>
                    <img className="mongo" src="https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg" />
                </li>
            </ul>
        </div>
    )
}

