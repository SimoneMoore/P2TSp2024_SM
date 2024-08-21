import React from "react";
import linkedin from "super-tiny-icons/images/svg/linkedin.svg";
import github from "super-tiny-icons/images/svg/github.svg";
import git from "super-tiny-icons/images/svg/git.svg";
import reactjs from "super-tiny-icons/images/svg/react.svg";
import javascript from "super-tiny-icons/images/svg/javascript.svg";
import css from "super-tiny-icons/images/svg/css3.svg";
import html from "super-tiny-icons/images/svg/html5.svg";
import vscode from "super-tiny-icons/images/svg/visualstudiocode.svg";
import mongodb from "super-tiny-icons/images/svg/mongodb.svg";

const AboutMe= () => {
    return(
        <>
        <section style={{width: "75%"}} class="about-me">
            <h1 class="about-title">About Me</h1>
            <hr/>
            <p class="about-description">Kickstarting my career into technology using 8 years of client-facing customer service to bring solutions to your problems!<br/> Combining my extensive experience in research and conflict-resolution to address your needs.<br/></p>
            <section class="social-card">
                <div style={{width: "300%"}} class="portfolio-link">
                    <figure class="block-color-default callout" style={{whitespace: "pre-wrap", display: "flex"}}>
                        <div style={{fontsize: "1.5em"}}><img class="icon" alt="link symbol" src="https://www.notion.so/icons/link_gray.svg"/></div><div style={{width: "100%"}}>
                            <a href="insert link">Share My Portfolio</a>
                        </div>
                    </figure>
                </div>
                <div style={{width: "100%"}} class="linkedin-link">
                    <figure class="block-color-default callout" style={{whitespace: "pre-wrap", display: "flex"}}>
                        <div style={{fontsize: "1.5em"}}>
                            <img class="icon" alt="linkedin logo" src={linkedin}/>
                        </div>
                        <div style={{width: "100%"}}>
                            <a href="https://linkedin.com/in/simone-moore-nyc">Connect on LinkedIn</a>
                        </div>
                    </figure>
                </div>
                <div style={{width: "300%"}} class="github-link">
                    <figure class="block-color-default callout" style={{whitespace: "pre-wrap", display: "flex"}}>
                        <div style={{fontsize: "1.5em"}}>
                            <img class="icon" alt="github logo" src={github}/>
                        </div>
                        <div style={{width: "100%"}}>
                            <a href="https://github.com/SimoneMoore">Check Out My GitHub</a>
                        </div>
                    </figure>
                </div>
            </section>
            <h1 class="service-title">My Services</h1>
            {/* if necessary <p class="">Checkout services offered by me</p>*/}
            <hr/>
            <section class="services-container">
                <h4 class="services-title">Services</h4>
                <table class="services-table">
                    <thead>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="service-type"><a href="https://www.notion.so/Website-Designing-c54ad317f06c4e84bfd522c42f708867?pvs=21">
                                <img class="icon" alt="" src=""/>Website Designing</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="service-title"><a href="https://www.notion.so/Social-Media-Management-76662e4c1a094278bd247cb947db9e35?pvs=21">
                                <img class="icon" alt="" src=""/>Social Media Management</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="service-title"><a href="https://www.notion.so/Copywriting-36429fc6b7594ebaa40f7ebaefaf889f?pvs=21">
                                <img class="icon" alt="" src=""/>Copywriting</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="service-title">
                                <a href="https://www.notion.so/Community-Management-d5c5f74573914c75a5fe73d94a97bb0b?pvs=21">
                                    <img class="icon" alt="" src=""/>Community Management
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td class="service-title">
                                    <a href="https://www.notion.so/Graphic-Designing-9e62bd3d096a4678bdd0b4ef05445693?pvs=21">
                                    <img class="icon" alt="" src=""/>Graphic Designing
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td class="service-title">
                                <a href="https://www.notion.so/Content-Creation-90e54757b6744d84be8fe4558e3a4a83?pvs=21">
                                    <img class="icon" alt="" src=""/>Content Creation
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br/><br/>
            </section>
            <h1 class="tool-title">Tools</h1>
            <hr/>
            <section class="tool-container">
                <h4 class="tool-title">Tools</h4>
                <table class="tool-table">
                    <thead>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="tool-title">
                                <img class="icon" alt="git logo" src={git}/>
                                Git
                            </td>
                            <td class="exp-title">
                                <span class="selected-value select-value-color-green">Beginner</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="tool-title">
                                <img class="icon" alt="github logo"src={github}/>
                                GitHub
                            </td>
                            <td class="exp-title">
                                    <span class="selected-value select-value-color-green">Beginner</span>
                                </td>
                        </tr>
                        <tr>
                            <td class="tool-title">
                                <img class="icon" alt="mongodb logo" src={mongodb}/>
                                MongoDB 
                            </td>
                            <td class="exp-title">
                                <span class="selected-value select-value-color-green">Beginner</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="tool-title">
                                    <img class="icon" alt="react.js logo" src={reactjs}/>
                                    React.js
                            </td>
                            <td class="exp-title">
                                <span class="selected-value select-value-color-green">Beginner</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="tool-title">
                                    <img class="icon" alt="javascript logo" src={javascript}/>
                                    JavaScript
                            </td>
                            <td class="exp-title">
                                <span class="selected-value select-value-color-green">Beginner</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="tool-title">
                                    <img class="icon" alt="css3 logo" src={css}/>
                                    CSS3
                            </td>
                            <td class="exp-title">
                                <span class="selected-value select-value-color-green">Beginner</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="tool-title">
                                    <img class="icon" alt="html5 logo" src={html}/>
                                    HTML5
                            </td>
                            <td class="exp-title">
                                <span class="selected-value select-value-color-green">Beginner</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="tool-title">
                                    <img class="icon" alt="vs code logo" src={vscode}/>
                                    VS Code
                            </td>
                            <td class="exp-title">
                                <span class="selected-value select-value-color-green">Beginner</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br/><br/>
            </section>
            <h1 class="work-title">Work Experience</h1>
            <hr/>
            <section class="work-container">
                <figure class="block-color-purple callout" style={{whitespace: "pre-wrap", display: "flex"}}>
                    <div style={{fontsize: "1.5em"}}>
                        <img class="icon" alt="" src=""/>
                    </div>
                    <div style={{width: "100%"}}>
                        <mark class="highlight-red">
                            <strong>Assistant Store Manager<br/><br/></strong>
                        </mark>
                        TUMI, INC. 
                        <mark class="highlight-gray">
                            (Feb 2021 - Mar 2024)<br/><br/>
                            ---<br/>
                        </mark>
                    </div>
                </figure>
                <figure class="block-color-purple callout" style={{whitespace: "pre-wrap", display: "flex"}}>
                    <div style={{fontsize: "1.5em"}}>
                        <img class="icon" alt="" src=""/>
                    </div>
                    <div style={{width: "100%"}}>
                        <mark class="highlight-red">
                            <strong>Sales Associate<br/><br/></strong>
                        </mark>
                        Tapestry, INC. 
                        <mark class="highlight-gray">
                            (Oct 2020 - Apr 2021)<br/><br/>
                            ---<br/>
                        </mark>
                    </div>
                </figure>
                <figure class="block-color-purple callout" style={{whitespace: "pre-wrap", display: "flex"}}>
                    <div style={{fontsize: "1.5em"}}>
                        <img class="icon" alt="" src=""/>
                    </div>
                    <div style={{width: "100%"}}>
                        <mark class="highlight-red">
                            <strong>Product Service Specialist<br/><br/></strong>
                        </mark>
                        Vail Resorts, INC.
                        <mark class="highlight-gray">
                            (Nov 2019 - Mar 2020)<br/><br/>
                            ---<br/>
                        </mark>
                    </div>
                </figure>
                <figure class="block-color-purple callout" style={{whitespace: "pre-wrap", display: "flex"}}>
                    <div style={{fontsize: "1.5em"}}>
                        <img class="icon" alt="" src=""/>
                    </div>
                    <div style={{width: "100%"}}>
                        <mark class="highlight-red">
                            <strong>Assistant Office Coordinator<br/><br/></strong>
                        </mark>
                        Lake Champlain Community Sailing Center
                        <mark class="highlight-gray">
                            (May 2018 - Sept 2019)<br/><br/>
                            ---<br/>
                        </mark>
                    </div>
                </figure>
                <figure class="block-color-purple callout" style={{whitespace: "pre-wrap", display: "flex"}}>
                    <div style={{fontsize: "1.5em"}}>
                        <img class="icon" alt="" src=""/>
                    </div>
                    <div style={{width: "100%"}}>
                        <mark class="highlight-red">
                            <strong>Technical Assistant<br/><br/></strong>
                        </mark>
                        Dudley H. Davis Center
                        <mark class="highlight-gray">
                            (Sept 2018 - May 2019)<br/><br/>
                            ---<br/>
                        </mark>
                    </div>
                </figure>
            </section>
        </section>
        </>

    )
}

export default AboutMe