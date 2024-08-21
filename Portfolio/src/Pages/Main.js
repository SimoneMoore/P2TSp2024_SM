import React from "react";
import PageHeader from "../Components/Header";
import Professional from "../Components/Professional";
import AboutMe from "../Components/AboutMe";
import Projects from "../Components/Projects";
import References from "../Components/References";

// Use a tag to point to elements to direct location on page


const MainPage= () => {
  return (
    <>
    <header>
      <PageHeader></PageHeader>
    </header>
    <hr/>
    <main className="home-container">
      <section className="info-card">
        <Professional></Professional>
        <AboutMe></AboutMe>
      </section>
      <hr/>
      <section className="examples">
        <section className="project-container">
          <Projects></Projects>
        </section>
        <br/><br/>
        <References></References>
      </section>
    </main>
    <footer>
    </footer>
    </>
  )
}

export default MainPage