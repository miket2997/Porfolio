import React, { useState } from "react";
import { faVideoCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Contact from "./Contact";


export default function Projects(){
    const [isLoading, setIsLoading] = useState(true);

    function handleLoading(){
        setIsLoading(false)
    }

    return (
        <div className="projects">
            <h2>Projects</h2>
            <br />
            <div className="project one">
                <h4>Greatest Sports Moments</h4>
                <p>This is an app for sports fans that allows you to create an account and contribute to a public list of great sports moments.
                    Along with the dsecription of the moment, a user can add a youtube link to the highlight of the moment and watch the video in the 
                    app. Users can also like moments and add comments underneath each moment. 
                </p>
                <h5>Engineered with:</h5>
                <ul className="dependencies">
                    <li>MongogDB</li>
                    <li>Mongoose</li>
                    <li>Express</li>
                    <li>Express JWT</li>
                    <li>JSON Web Token</li>
                    <li>Bcrypt</li>
                    <li>React</li>
                </ul>
                <div className="project--links">
                    <p>
                        See full live demo
                        <br />
                        <a href="https://best-sports-moments.onrender.com/">
                            <FontAwesomeIcon icon={ faVideoCamera } size="2x"/>
                        </a>
                    </p>
                    <p>
                        See my code
                        <br />
                        <a href="https://github.com/miket2997/Vschool-Level-6-Capstone">
                            <FontAwesomeIcon icon={ faGithub } size="2x" />
                        </a>
                    </p>
                </div>
                { isLoading && <p>Loading...</p>}
                <iframe 
                    src="https://best-sports-moments.onrender.com/" 
                    height="500px" 
                    width='500px' 
                    title="NHL Stats App" 
                    onLoad={ handleLoading }
                />
            </div>
            <br />
            <div className="project two">
                <h4>Hiking With Dogs</h4>
                <p>This is an app for hiking enthusiasts who love to bring their furry friend with them. With this app, you will be able to view
                    a list of dog friendly hiking trails and be able to add trails of your own. You can also leave reviews of trails and view reviews
                    left by other users.
                </p>
                <h5>Engineered with:</h5>
                <ul className="dependencies">
                    <li>MongogDB</li>
                    <li>Mongoose</li>
                    <li>Express</li>
                    <li>Express JWT</li>
                    <li>JSON Web Token</li>
                    <li>Bcrypt</li>
                    <li>React</li>
                </ul>
                <div className="project--links">
                    <p>
                        See full live demo
                        <br />
                        <a href="https://hiking-with-dogs.onrender.com/">
                            <FontAwesomeIcon icon={ faVideoCamera } size="2x" />
                        </a>
                    </p>
                    <p>
                        See my code
                        <br />
                        <a href="https://github.com/miket2997/Vschool-Level-5-Capstone">
                            <FontAwesomeIcon icon={ faGithub } size="2x" />
                        </a>
                    </p>
                </div>
                { isLoading && <p>Loading...</p> }
                <iframe 
                    src="https://hiking-with-dogs.onrender.com/" 
                    height="500px" 
                    width="500px" 
                    title="NHL Stats App(Loading)"
                    onLoad={ handleLoading }
                />
            </div>
            <br />
            <div className="project3">
                <h4>NHL Stats App</h4>
                <p>This is an app that allows you to view statistics from any NHL player from the 2022-2023 regular season. It also allows you to
                    view basic team info and includes a feature for comparing the statistics of two players side by side.
                </p>
                <h5>Engineered with:</h5>
                <ul className="dependencies">
                    <li>React</li>
                </ul>
                <div className="project--links">
                    <p>
                        See full live demo
                        <br />
                        <a href="https://nhl-stats-app.onrender.com/">
                            <FontAwesomeIcon icon={ faVideoCamera } size="2x" />
                        </a>
                    </p>
                    <p>
                        See my code
                        <br />
                        <a href="https://github.com/miket2997/VSchool-Level-4-Capstone">
                            <FontAwesomeIcon icon={ faGithub } size="2x" />
                        </a>
                    </p>
                </div>
                { isLoading && <p>Loading...</p> }
                <iframe 
                    src="https://nhl-stats-app.onrender.com/" 
                    height="500px" 
                    width="500px" 
                    title="NHL Stats App(Loading)"
                    onLoad={ handleLoading }
                />
            </div>
            <Contact />
        </div>
    )
}

