import React from "react";
import { FaDownload } from "react-icons/fa";

const PageHeader= () => {
    return(
        <section>
        <div class="resume">
            <a href="link" download="" className="flex items-center">
            <p className="mr-2">Download Resume</p>
      <FaDownload />
    </a>
        </div>
        <h1 class="page-title">Welcome</h1>
        <p class="page-description">My name is Simone. Happy to have you here.</p>
        </section>
    )
}

export default PageHeader