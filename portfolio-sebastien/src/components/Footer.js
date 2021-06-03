import React from 'react';
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';


export const Footer = () => {
    return (
        <div className="containerFooter">
            <div className="row">
                <div className="col-xs col-sm col-md col-lg" id="mediaContact ">
                    <h2>Media contact</h2>
                     <a  className="github" href="https://github.com/SebastienFirouzfar"> <FaGithub size="2em"/> </a>
                     <a  className="facebook" href="https://www.facebook.com/sebastien.firouz/"><FaFacebook size="2em"/> </a> 
                     <a  className="instagram" href="https://www.instagram.com/aidin_firouzfar/"><FaInstagram size="2em"/></a> 
                     <a  className="linkedin" href="https://www.linkedin.com/in/sebastien-firouzfar/" ><FaLinkedin size="2em"/></a>
                </div>
            </div>
            <h4>&copy; FIROUZFAR Sébastien Belgique Bruxelles / Belgium Brussels</h4>
        </div>
    );
};
