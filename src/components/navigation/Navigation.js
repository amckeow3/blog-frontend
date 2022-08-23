import React, { useState } from "react";
import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [show, setShow] = useState(false);
    const handleNavClick = () => {
        setShow(false);
    };
    return (
    <div className="content">
        <div className="navbar-wrapper">
            <nav className="navbar navbar-expand-lg fixed-top">
                <button className="navbar-toggler" type="button" onClick={() => setShow(!show)}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                    {/*<a class="navbar-brand d-block d-flex me-auto" href="/"> 
                        <Container>
                            <div className="brand_text mx-auto">
                                <div className="brand1">[happily ever Adrianna]</div>
                                <div className="brand2">ADRIANNA</div>
                            </div>
                        </Container>
                    </a>*/}
                
                        <div 
                    className={`collapse navbar-collapse  ${show ? "show" : ""}`}
                    id="navbarCollapse">
                            {/*<ul className="nav nav-pills nav-link justify-content-center ms-auto">*/}
                            <ul className="nav nav-pills nav-link justify-content-center mx-auto">
                                <li className="nav-item">
                                    <Link to="/" onClick={handleNavClick} className="nav-link">home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" onClick={handleNavClick} className="nav-link">about</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/tech" onClick={handleNavClick} className="nav-link">technology</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/lifestyle" onClick={handleNavClick} className="nav-link">lifestyle</Link>
                                </li>
                            </ul>  
                        </div>          
            </nav>
        </div>
    </div>
    )
}

export default Navigation;