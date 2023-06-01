import React from "react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import hikingImage from "../images/hiking.jpg";

export default function Main(){
    return (
        <div className="home">
            <h1>Michael Toy Portfolio</h1>
            <p className="header">Full Stack Web Developer with a passion for problem solving and creating user-friendly and responsive web applications</p>
            <img className="my--photo" src={ hikingImage } alt="picture" />
            <About />
            <br />
            <Skills />
            <br />
            <Projects />
        </div>
    )
}
