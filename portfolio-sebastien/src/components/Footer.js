import React from 'react';
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';


export const Footer = () => {
    return (
        <div className="containerFooter">
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <h3>Social media</h3>
                     <a href="https://github.com/SebastienFirouzfar"> <FaGithub size="2em"/> </a>
                     <a href="https://www.facebook.com/sebastien.firouz/"><FaFacebook size="2em"/> </a> 
                     <a href="https://www.instagram.com/aidin_firouzfar/"><FaInstagram size="2em"/></a> 
                     <a href="https://www.linkedin.com/in/sebastien-firouzfar/" ><FaLinkedin size="2em"/></a>
                </div>

                <div className="col-lg-3 col-md-6">
                <h3>Contact</h3>
                    
                </div>

            </div>
            <h4>&copy; FIROUZFAR Sébastien Belgique Bruxelles / Belgium Brussels</h4>
        </div>
    );
};
