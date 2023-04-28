import { Link } from "react-router-dom";
import logo from "../src/logo.png";

export default function NavBar() {
    return (
        <div className="navbar">
            <nav className="nav">
                <Link to="/"> <img id="logo" src={logo} alt="Logo" style={{ width: "200px" }} /></Link>
                <ul>
                    <li><a href="/about">About</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/resume">Resume</a></li>
                    <li><a href="contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}