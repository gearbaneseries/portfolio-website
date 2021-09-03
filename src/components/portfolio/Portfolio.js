import React from 'react'
import './portfolio.css'
import geotablogo from '../../assets/geotablogo.png'
import appfabslogoletters from '../../assets/appfabslogoletters.png'

function Portfolio() {
    return (
        <section id="portfoliosection">
            <div className="portfolio-container">
                <div className="portfolio-title-container-parent">
                <div className="about-me-title portfolio"><p className="about-me-title-text">Work <span className="me-text">Experience</span></p></div>              
                <div className="job-container one">
                    <div>
                        <img className="geotab-logo" src={geotablogo} alt=""></img>
                        <p className="job-container-title one">
                                Software Developer Intern
                        </p>
                        <p className="job-container-date">
                            May 2021 - April 2022
                        </p>
                    </div>                    
                    <div className="job-container-information one">                        
                        <p className="job-container-blurb one">
                            Developing Intelligent Transportation Systems software for 
                            analyzing fleet vehicle data gathered from roads, intersections, 
                            cities and subdivisions in Canada and the U.S.                         
                        </p>
                    </div>                    
                </div>
                </div>
                <div className="job-container two">
                    <div>
                        <div className="appfabs-description"><img src={appfabslogoletters} alt="" className="appfabs-logo"></img></div>
                        <p className="job-container-title two">
                            Frontend Developer Intern
                        </p>
                        <p className="job-container-date">
                            June 2020 - August 2020
                        </p>
                    </div>                    
                    <div className="job-container-information two">                    
                    <p className="job-container-blurb two">
                        Developed and modified features for small-scale static client websites.
                        Implemented and revised designs of existing company software components.
                    </p>
                    </div>
                </div>                
            </div>
        </section>
    )
}

export default Portfolio
