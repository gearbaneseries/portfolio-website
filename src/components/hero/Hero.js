import React from 'react'
import './hero.css'
import linkedinicon from '../../assets/linkedin-icon.png';
import githubicon from '../../assets/github-icon.png';
import resumeicon from '../../assets/resume-icon.png';

function Hero() {
    return (
        <section id="herosection">
            <div className="hero-container">
                <div className="hero-title"><h1><span className="hero-hi">Hi. </span>I'm Abiram.</h1>
                <hr className="break-one"></hr>
                </div>                
                <div className="hero-subsection">
                <div className="hero-motto"><h4>Software Engineer</h4></div>
                <hr className="break-two"></hr>
                <div className="hero-icons-container">
                    <a href="https://www.linkedin.com/in/abiram-nair/" target="_blank" rel="noreferrer"><img className="hero-icon" src={linkedinicon} alt=""/></a>
                    <a href="https://github.com/gearbaneseries" target="_blank" rel="noreferrer"><img className="hero-icon" src={githubicon} alt=""/></a>
                    <a href="https://drive.google.com/file/d/1F9aE_2w6uWYiuc7m7ThPYRT0J8R-bdhb/view?usp=sharing" target="_blank" rel="noreferrer"><img className="hero-icon" src={resumeicon} alt=""/></a>
                </div>
                </div>
            </div>
        </section>  
    )
}

export default Hero 