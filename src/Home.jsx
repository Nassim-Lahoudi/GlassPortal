// Home page: Shows about text, profile image, social/contact links, and modal popup for info
import { useState } from 'react'
import { Link } from "react-router-dom";
import './App.css'

function Home() {
    const [status, setStatus] = useState("Already copied to Clipboard!");
    const [showModal, setShowModal] = useState(false);

    // Shows modal and copies email to clipboard
    const info = () => {
        setShowModal(true);
        const email = "[yourEmail@provider.com]";
        try {
            navigator.clipboard.writeText(email)
            setStatus("Successfully copied to Clipboard!");
        } catch (error) {
            setStatus("There is an Error " + error)
        }
    }

    return (
        <div className="page-container">
            <div className="main-card-container">
                {/* Header with name and navigation */}
                <div className="header-container">
                    <div className="name-container">
                        <Link to="/" className='list'><h1 className='headline'>Firstname Lastname</h1></Link>
                    </div>
                    <div className="link-container">
                        <ul className="unordered-list">
                            <li className="list"><Link to="/home" className="list">Home</Link></li>
                            <li className="list"><Link to="/project" className='list'>Project</Link></li>
                            <li className="list"><Link to="/about" className='list'>About</Link></li>
                        </ul>
                    </div>
                </div>
                {/* Main content with about text and image */}
                <div className="main-container">
                    <div className="main-content-container">
                        <div className="text-img-container">
                            <div className="text-container">
                                <p className="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                            </div>
                            <div className="img-container">
                                <img src="bild.png" alt="yourPic" className='yourPic' />
                            </div>
                        </div>
                    </div>
                    {/* Social/contact links */}
                    <div className="links-container">
                        <a onClick={info} className="link"><img src="info.png" alt="" className='link-img' /></a>
                        <a href="https://github.com/" className="link" target='_blank' ><img src="github.png" alt="" className='link-img' /></a>
                        <a href="https://de.linkedin.com/" className="link" target='_blank'><img src="linkedin.png" alt="" className='link-img' /></a>
                    </div>
                </div>
            </div>
            {/* Modal popup for info */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-window">
                        <p>E-Mail: [yourEmail@provider.com]<br />{status}</p>
                        <button className="cta-button" onClick={() => setShowModal(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Home;
