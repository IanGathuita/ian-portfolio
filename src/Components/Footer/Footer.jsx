import { FaEnvelope, FaPhone } from "react-icons/fa";
import {ImFacebook } from 'react-icons/im';
import { RiInstagramFill,RiTwitterXFill } from 'react-icons/ri';
import './Footer.css';
const Footer = () => {
    return (
        <footer id="links">
            <div className="links">
                <h3>Contact me</h3>
                <ul>
                    <li><FaEnvelope></FaEnvelope> <a href="mailto:ianjoseph630@gmail.com">Ianjoseph630@gmail.com</a></li>
                    <li><FaPhone></FaPhone><a href="tel:+254797211350">+2547 9721 1350</a></li>
                </ul>
            </div>
            <div className="socials">
                <h3>Socials</h3>
                <ul>
                    <li><RiTwitterXFill></RiTwitterXFill> <a href="http://twitter.com/IanGathuita">X</a></li>
                    <li><ImFacebook></ImFacebook><a href="http://facebook.com/ian.gathuita">Facebook</a></li>
                    <li><RiInstagramFill></RiInstagramFill><a href="http://instagram.com/__iangathuita__">Instagram</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;