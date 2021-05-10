import React from 'react';
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';


export const Footer = () => {
    return (
        <div className="containerFooter">
            <div className="row">
                <div className="col-lg-6 col-md-3 " id="infoFooter">
                    <h3>Social media</h3>
                     <a href="https://github.com/SebastienFirouzfar"> <FaGithub size="2em"/> </a>
                     <a href="https://www.facebook.com/sebastien.firouz/"><FaFacebook size="2em"/> </a> 
                     <a href="https://www.instagram.com/aidin_firouzfar/"><FaInstagram size="2em"/></a> 
                     <a href="https://www.linkedin.com/in/sebastien-firouzfar/" ><FaLinkedin size="2em"/></a>
                </div>


            </div>
            <h4>&copy; FIROUZFAR Sébastien Belgique Bruxelles / Belgium Brussels</h4>
        </div>
    );
};
