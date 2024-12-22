import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2024 Get a job. All Rights Reserved.</p>
            <p>
                <a href="#privacy-policy">Privacy Policy</a> |
                <a href="#terms-of-service">Terms of Service</a>
            </p>
            <div className="social-icons">
            <a href="#facebook"><i className="fab fa-facebook"></i></a>
            <a href="#twitter"><i className="fab fa-twitter"></i></a>
            <a href="#linkedin"><i className="fab fa-linkedin"></i></a>
            </div>
        </footer>
    );
};

export default Footer;