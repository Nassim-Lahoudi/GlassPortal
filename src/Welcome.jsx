// Welcome page: Landing page with navigation and intro section
import { useState } from 'react'
import { Link } from "react-router-dom";
import './App.css'

function Welcome() {

    return (
        <div className="page-container">
            <div className="main-card-container">
                {/* Header with name and navigation */}
                <div className="header-container">
                    <div className="name-container">
                        <Link to="/" className='list'><h1 className='headline'>Firstname, Lastname</h1></Link>
                    </div>
                    <div className="link-container">
                        <ul className="unordered-list">
                            <li className="list"><Link to="/home" className="list">Home</Link></li>
                            <li className="list"><Link to="/project" className='list'>Project</Link></li>
                            <li className="list"><Link to="/about" className='list'>About</Link></li>
                        </ul>
                    </div>
                </div>
                {/* Main content with intro and image */}
                <div className="main-container">
                    <div className="main-content-container">
                        <div className="intro-text-container">
                            <h1 className="headline">Hey! 👋, <br /> It's First- and Lastname</h1>
                            <p className="intro">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
                            <button className="started-btn"><Link to="/home" className='list'>Get Started</Link></button>
                        </div>
                        <div className="welcome-img-container">
                            <img src="image.png" alt="img" className='img' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;
