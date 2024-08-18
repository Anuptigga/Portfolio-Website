import React from "react";
import Nav from "../components/Navbar";
import "../styles/Home.css";
import instaIcon from "../assets/insta.svg";
import linkedinIcon from "../assets/linkedin.svg";
import githubIcon from "../assets/github.svg";
function Home(){
    return (
        <div class="home"><Nav/>
        <div class="desc">
            <div class="profile-box"><img class="profimg" src={require("../assets/profile.jpg")} alt="profile"/></div>
            <div><h1>Hi, It's <span>Anup</span></h1>
            <h3>I'm a <span>Web Developer</span></h3>
            <p>with a passion for building seamless and user-friendly web
                 applications. From designing interactive front-ends to building robust back-end systems,
                  I bring ideas to life with clean, efficient code.
                   <div className="social-handles">
                        <img src={instaIcon} alt="Instagram" />
                        <img src={linkedinIcon} alt="LinkedIn" />
                        <img src={githubIcon} alt="GitHub" />
                    </div>

                  </p></div>
        </div>
        </div>
    );
}
export default Home;