import React from "react";
import linkedin from "super-tiny-icons/images/svg/LinkedIn.svg";
import github from "super-tiny-icons/images/svg/GitHub.svg";
import git from "super-tiny-icons/images/svg/Git.svg";
import reactjs from "super-tiny-icons/images/svg/React.svg";
import javascript from "super-tiny-icons/images/svg/javascript.svg";
import css from "super-tiny-icons/images/svg/css.svg";
import html from "super-tiny-icons/images/svg/html.svg";
import vscode from "super-tiny-icons/images/svg/vscode.svg";
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
                                    <tr>
                                        <th>
                                            {/* <span class="icon property-icon">
                                                <svg role="graphics-symbol" viewBox="0 0 16 16" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.45);flex-shrink:0" class="typesTitle">
                                                    <path d="M0.637695 13.1914C1.0957 13.1914 1.32812 13 1.47852 12.5215L2.24414 10.3887H6.14746L6.90625 12.5215C7.05664 13 7.2959 13.1914 7.74707 13.1914C8.22559 13.1914 8.5332 12.9043 8.5332 12.4531C8.5332 12.2891 8.50586 12.1523 8.44434 11.9678L5.41602 3.79199C5.2041 3.21777 4.82129 2.9375 4.19922 2.9375C3.60449 2.9375 3.21484 3.21777 3.0166 3.78516L-0.0322266 12.002C-0.09375 12.1797 -0.121094 12.3232 -0.121094 12.4668C-0.121094 12.918 0.166016 13.1914 0.637695 13.1914ZM2.63379 9.12402L4.17871 4.68066H4.21973L5.76465 9.12402H2.63379ZM12.2793 13.2324C13.3115 13.2324 14.2891 12.6787 14.7129 11.8037H14.7402V12.5762C14.7471 12.9863 15.0273 13.2393 15.4238 13.2393C15.834 13.2393 16.1143 12.9795 16.1143 12.5215V8.00977C16.1143 6.49902 14.9658 5.52148 13.1543 5.52148C11.7666 5.52148 10.6592 6.08887 10.2695 6.99121C10.1943 7.15527 10.1533 7.3125 10.1533 7.46289C10.1533 7.81152 10.4062 8.04395 10.7686 8.04395C11.0215 8.04395 11.2129 7.94824 11.3496 7.73633C11.7529 6.99121 12.2861 6.65625 13.1064 6.65625C14.0977 6.65625 14.6992 7.20996 14.6992 8.1123V8.67285L12.5664 8.7959C10.7686 8.8916 9.77734 9.69824 9.77734 11.0107C9.77734 12.3369 10.8096 13.2324 12.2793 13.2324ZM12.6621 12.1387C11.8008 12.1387 11.2129 11.667 11.2129 10.9561C11.2129 10.2725 11.7598 9.82129 12.7578 9.75977L14.6992 9.62988V10.3203C14.6992 11.3457 13.7969 12.1387 12.6621 12.1387Z">
                                                    </path>
                                                </svg>
                                            </span>
                                            Name */}
                                        </th>
                                    </tr>
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
                                    <tr>
                                        <th>
                                            {/* <span class="icon property-icon">
                                                <svg role="graphics-symbol" viewBox="0 0 16 16" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.45);flex-shrink:0" class="typesTitle">
                                                    <path d="M0.637695 13.1914C1.0957 13.1914 1.32812 13 1.47852 12.5215L2.24414 10.3887H6.14746L6.90625 12.5215C7.05664 13 7.2959 13.1914 7.74707 13.1914C8.22559 13.1914 8.5332 12.9043 8.5332 12.4531C8.5332 12.2891 8.50586 12.1523 8.44434 11.9678L5.41602 3.79199C5.2041 3.21777 4.82129 2.9375 4.19922 2.9375C3.60449 2.9375 3.21484 3.21777 3.0166 3.78516L-0.0322266 12.002C-0.09375 12.1797 -0.121094 12.3232 -0.121094 12.4668C-0.121094 12.918 0.166016 13.1914 0.637695 13.1914ZM2.63379 9.12402L4.17871 4.68066H4.21973L5.76465 9.12402H2.63379ZM12.2793 13.2324C13.3115 13.2324 14.2891 12.6787 14.7129 11.8037H14.7402V12.5762C14.7471 12.9863 15.0273 13.2393 15.4238 13.2393C15.834 13.2393 16.1143 12.9795 16.1143 12.5215V8.00977C16.1143 6.49902 14.9658 5.52148 13.1543 5.52148C11.7666 5.52148 10.6592 6.08887 10.2695 6.99121C10.1943 7.15527 10.1533 7.3125 10.1533 7.46289C10.1533 7.81152 10.4062 8.04395 10.7686 8.04395C11.0215 8.04395 11.2129 7.94824 11.3496 7.73633C11.7529 6.99121 12.2861 6.65625 13.1064 6.65625C14.0977 6.65625 14.6992 7.20996 14.6992 8.1123V8.67285L12.5664 8.7959C10.7686 8.8916 9.77734 9.69824 9.77734 11.0107C9.77734 12.3369 10.8096 13.2324 12.2793 13.2324ZM12.6621 12.1387C11.8008 12.1387 11.2129 11.667 11.2129 10.9561C11.2129 10.2725 11.7598 9.82129 12.7578 9.75977L14.6992 9.62988V10.3203C14.6992 11.3457 13.7969 12.1387 12.6621 12.1387Z"></path>
                                                </svg> 
                                            </span>
                                            Name */}
                                        </th>
                                        <th>
                                            {/* <span class="icon property-icon">
                                                <svg role="graphics-symbol" viewBox="0 0 16 16" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.45);flex-shrink:0" class="typesSelect">
                                                    <path d="M8 15.126C11.8623 15.126 15.0615 11.9336 15.0615 8.06445C15.0615 4.20215 11.8623 1.00293 7.99316 1.00293C4.13086 1.00293 0.938477 4.20215 0.938477 8.06445C0.938477 11.9336 4.1377 15.126 8 15.126ZM8 13.7383C4.85547 13.7383 2.33301 11.209 2.33301 8.06445C2.33301 4.91992 4.84863 2.39746 7.99316 2.39746C11.1377 2.39746 13.6738 4.91992 13.6738 8.06445C13.6738 11.209 11.1445 13.7383 8 13.7383ZM7.62402 10.6348C7.79492 10.915 8.20508 10.9287 8.37598 10.6348L10.666 6.73145C10.8574 6.41016 10.7002 6.04102 10.3652 6.04102H5.62793C5.29297 6.04102 5.14941 6.43066 5.32031 6.73145L7.62402 10.6348Z"></path>
                                                </svg>
                                            </span>
                                            Level of expertise */}
                                        </th>
                                    </tr>
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
                                            <span class="selected-value select-value-color-blue">Beginner</span>
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