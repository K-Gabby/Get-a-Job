import React from "react";

const Header = () => {
    return (
        <header className="header">
            <h1>Get a Job</h1>
            <img className="Image1" style={{width: 1240, height: 68}} src="https://via.placeholder.com" />
            <nav>
                <a href="#jobs">Jobs</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
           <button className="cta-button">Post a Job</button> 
        </header>
    );
};

export default Header;