import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import "./Navbar.css"
const Navbar = () => {
    return (
        <div className="container">
            <div className="logo"><h1>Francisco Achard</h1></div>
            <div className="Nav">
            <ul className="lista">
                <li className="li1"> <a href="#" class="ov-btn-slide-left" >Home</a></li>
                <li className="li1"><a href="#" className="ov-btn-slide-left">About</a></li>
                <li className="li1"><a href="#" className="ov-btn-slide-left">Portfolio</a></li>
                <li className="li1"><a href="#" className="ov-btn-slide-left">Experience</a></li>
                <li className="li1"><a href="#" className="ov-btn-slide-left">Achievements</a></li>
                <li className="li1"><a href="#" className="ov-btn-slide-left">Contact</a></li>
            </ul>
            </div>
            <div className="social">
                <BsLinkedin></BsLinkedin>
                <BsGithub></BsGithub>
                <BsInstagram></BsInstagram>
            </div>
        </div>
    )
}
export default Navbar;