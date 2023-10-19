import "./Hiring.css"
// import "@fontsource/inter";
// import Top from "./images/Hiring-images/Illustration.webp"
// import Web from "./images/Hiring-images/web.webp"
// import Andriod from "./images/Hiring-images/android.webp"
// import Graphic from "./images/Hiring-images/graphic.webp"
// import Content from "./images/Hiring-images/content.webp"
// import Video from "./images/Hiring-images/video.webp"
// import Manager from "./assets/images/Hiring-images/manager.webp"

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


function Hiring(){
    return(
        <>
        <Navbar/>
        <div className="top">
            <div className="top_left">
                <p id="top_head">Find a work that suits <br/>your interest & skills.</p>
                <div id="paragraph">Seeking an internship at Ambuvians? Look no further! Ambuvians is a vibrant
                startup offering exciting internship opportunities in various fields. Whether you're 
                into softwaare development, marketing, design, or data analysis, we have a place 
                for you. Gain hands-on expience, mentorship, and exposure to innovative
                projects. Our program is designed for skill development, networking, and personal
                growth. Collaborate with industry professionals, contributr to real projects, and 
                kickstart your career. Join Ambuvians today to be part of a team shaping the 
                future of technology and entrepreneurship. Your journey towards a successful
                career starts here. Apply now and turn your aspirations into accomplishments!</div>
            </div>
            <div className="top_right">
                <img id="right_img" src="images/Hiring-images/Illustration.svg" alt="loading..."/>
            </div>
        </div>
        <div className="cardbox">
            <div className="row">
                <div className="card" id="web">
                    <p id="big">Web Developer</p>
                    <p id="small">If you have experience working as a full-stack developer
                    then this is your chance to apply.</p>
                    <form action="https://forms.gle/3qsGmu5cY9Esiakd7" target="_blank">
                    <button className="register">Register Now</button></form>
                    <img id="web_img" src="images/Hiring-images/web.webp" alt=""/>
                </div>
                <div className="card" id="android">
                    <p id="big">Andriod Developer</p>
                    <p id="small">If you have expierence working as an Andriod developer in flutter
                    then this is your chance to apply.</p>
                    <form action="https://forms.gle/3qsGmu5cY9Esiakd7" target="_blank">
                    <button className="register">Register Now</button></form>
                    <img id="web_img" src="images/Hiring-images/android.webp" alt=""/>
                </div>
            </div>
            <div className="row">
                <div className="card" id="web">
                    <p id="big">Graphic Designer</p>
                    <p id="small">If you have expierence working as a Graphic Designer
                    then this is your chance to apply.</p>
                    <form action="https://forms.gle/3qsGmu5cY9Esiakd7" target="_blank">
                    <button className="register">Register Now</button></form>
                    <img id="web_img" src="images/Hiring-images/graphic.webp" alt=""/>
                </div>
                <div className="card" id="android">
                    <p id="big">Content Writer</p>
                    <p id="small">If you have expierence working as a Content Writer
                    then this is your chance to apply.</p>
                    <form action="https://forms.gle/3qsGmu5cY9Esiakd7" target="_blank">
                    <button className="register">Register Now</button></form>
                    <img id="web_img" src="images/Hiring-images/content.webp" alt=""/>
                </div>
            </div>
            <div className="row">
                <div className="card" id="web">
                    <p id="big">Video Editor</p>
                    <p id="small">If you have expierence working as a Video Editor
                    then this is your chance to apply.</p>
                    <form action="https://forms.gle/3qsGmu5cY9Esiakd7" target="_blank">
                    <button className="register">Register Now</button></form>
                    <img id="web_img" src="images/Hiring-images/video.webp" alt=""/>
                </div>
                <div className="card" id="android">
                    <p id="big">Technical Manager</p>
                    <p id="small">If you have expierence of managing a Technical team
                    then this is your chance to apply.</p>
                    <form action="https://forms.gle/3qsGmu5cY9Esiakd7" target="_blank">
                    <button className="register">Register Now</button></form>
                    <img id="web_img" src="images/Hiring-images/manager.webp" alt=""/>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}
export default Hiring;