import React from "react";
import gmail from "super-tiny-icons/images/svg/gmail.svg";
import linkedin from "super-tiny-icons/images/svg/LinkedIn.svg";


const Professional= () => {
    return (
        <>
        <section style={{width: "25%"}} class="profession-card">
            <figure class="image">
                {/* render circle */}
                    <img style={{width: "279.5px"}} alt="Simone Moore" src="../Assets/Simone_Photo.jpg"/>
            </figure>
            <p class="name">Simone Moore</p>
            <h1 class="contact-title">Contact Me</h1>
            <section class="contact-list">
                <div style={{width: "100%"}} class="email-container">
                    <figure class="" style={{whitespace: "pre-wrap", display: "flex"}}>
                        <div style={{fontsize: "1.5em"}}><img class="icon" alt="Gmail Logo" src={gmail}/>
                        </div>
                        <div style={{width: "100%"}}>
                            <a href="mailto:moores0929@gmail.com">E-Mail</a>
                        </div>
                    </figure>
                </div>
                <div style={{width: "100%"}} class="link-container">
                    <figure class="" style={{whitespace: "pre-wrap", display: "flex"}}>
                        <div style={{fontsize: "1.5em"}}>
                            <img class="icon" alt="LinkedIn Logo" src={linkedin}/>
                        </div>
                        <div style={{width: "100%"}}>
                            <a href="https://www.linkedin.com/in/simone-moore-nyc/">LinkedIn</a>
                        </div>
                    </figure>
                </div>
            </section>
            <h1 class="skill-title">Skill Set</h1>
            {/* additional <p class=""></p> to organize skills */}
            <hr/>
            <p class="skill">🌐 Web Designing</p>
            <p class="skill">🌐 Web Designing</p>
            <p class="skill">🌐 Web Designing</p>
            <p class="skill">🌐 Web Designing</p>
            <p class="skill">🌐 Web Designing</p>
            <h1 class="cert-title">Certifications</h1>
            <hr/>
            <figure class="block-color-default callout" style={{whitespace: "pre-wrap", display: "flex"}}>
                <div style={{fontsize: "1.5em"}}>
                    <img class="icon" alt="arrow" src="https://www.notion.so/icons/arrow-right_gray.svg"/>
                </div>
                <div style={{width: "100%"}}>Coursera - Python (Month/Year)</div>
            </figure>
            <figure class="block-color-default callout" style={{whitespace: "pre-wrap", display: "flex"}}>
                <div style={{fontsize: "1.5em"}}>
                    <img class="icon" alt="arrow" src="https://www.notion.so/icons/arrow-right_gray.svg"/>
                </div>
                <div style={{width: "100%"}}>Coursera - UX/UI (Month/Year)</div>
            </figure>
            <figure class="block-color-default callout" style={{whitespace: "pre-wrap", display: "flex"}}>
                <div style={{fontsize: "1.5em"}}>
                    <img class="icon" alt="arrow" src="https://www.notion.so/icons/arrow-right_gray.svg"/>
                </div>
                <div style={{width: "100%"}}>NPower - Path2Tech</div>
            </figure>
            <h1 class="education-title">Education</h1>
            <hr/>
            <figure class="block-color-default callout" style={{whitespace: "pre-wrap", display: "flex"}}>
                <div style={{fontsize: "1.5em"}}>
                    <img class="icon" alt="arrow" src="https://www.notion.so/icons/arrow-right_gray.svg"/>
                </div>
                <div style={{width: "100%"}}>Major Microbiology & Molecular Genetics, B.S</div>
            </figure>
            <figure class="block-color-default callout" style={{whitespace: "pre-wrap", display: "flex"}}>
                <div style={{fontsize: "1.5em"}}>
                    <img class="icon" alt="arrow" src="https://www.notion.so/icons/arrow-right_gray.svg"/>
                </div>
                <div style={{width: "100%"}}>Minor Computer Science, B.S </div>
            </figure>
            <h1 class="personal-title">Hobbies</h1>
            <hr/>
            <p class="hobby">Camping & Hiking</p>
            <p class="hobby">Community Outreach & Involvement</p>
            <p class="hobby">Plant, Wildlife, & Marine Biology</p>
            <p class="hobby">Collecting Retro Video Games and Consoles</p>
            <p class="hobby">Watching Old Sci-Fi Movies</p>
        </section>
        </>
    )
}

export default Professional