/* eslint-disable */
import React from "react";
import "./styles.css";
import { fotoProfil } from "../../assets";

const Home = () => {
  return (
    // Profile-Section
    <div className="body-content">
      <div id="profile-section" className="con-profile">
        <div className="col-1">
          <div className="content-profile">
            <img className="res-profile" src={fotoProfil} alt="Profile" />
            <h1>Dzakky Hazimy</h1>
            <p>
              Hello, I'm a college student who majoring computer science at
              Telkom University Bandung. I really like everything related to
              visuals and graphic design and now I'm very interested in front
              end development and UI / UX. <br /> I have worked and helped
              develop projects in a fintech startup in Bandung.
              <br /> I also often make fake projects to challenge me to always
              want to learn. Checkout my portofolio at Behance &amp; Github.
            </p>
            <a
              href="https://drive.google.com/file/d/1r4xqYokeg1P_tJytf_P47-zfMuueR-tt/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" className="button-profile">
                {" "}
                <p className="text-button">Download CV</p>
              </button>
            </a>
            <button type="button" className="button-profile">
              <a className="text-button" href="mailto: dzakyhazimy@gmail.com">
                Contact
              </a>
            </button>
          </div>
        </div>
      </div>
      {/* Profile */}

      {/* Project & Experiences */}
      <div id="project-section" className="con-project">
        <div className="col-2">
          <div className="content-project">
            <h1 className="heading1-subsection">Project</h1>
            <p className="text-project"></p>
            <h3>Sayurin | Grocery Delivery App</h3>
            Bandung (ID)| June 2020 - August 2020
            <p>
              • Hybrid application developed with Ionic Framework and React.js
              Languages
            </p>
            <h3>EzCooking | Meal-kit Delivery App</h3>
            Bandung (ID)| Dec 2019 - Feb 2020
            <p>• Android application developed with Java</p>
            <h3>Maaci Laundry | Online Laundry App</h3>
            Bandung (ID)| Oct 2019 - Dec 2019
            <p>
              • Develop an online laundry web application with a code igniter
              framework
            </p>
            <h3>Informatic Laboratory| IF Students App</h3>
            Bandung (ID)| Oct 2019 - Dec 2019
            <p>
              • Redesign an Informatic Laboratory web application with Figma
            </p>
            <p />
            <p className="text-project"></p>
            <h1 className="heading1-subsection">Experiences</h1>
            <h3>Telkom Digital Talent Incubator | Front End Developer</h3>
            Bandung (ID)| Sept 2020 - Dec 2020
            <p className="text-exp">
              • Learn about Front-End needs Framework and Language such as HTML,
              CSS, &amp; Javascript.
            </p>
            <p className="text-exp">
              • Leading a team of 1 UI/UX Designer, Back-End Developer, Data
              Analyst, and Software QA.
            </p>
            <h3>Bayarin.co.id | Social Media Strategist</h3>
            Bandung (ID)| Jan 2018 - Jul 2019
            <p className="text-exp">
              • Leading a team of 1 designer, copy writer, and marketing.
            </p>
            <p className="text-exp">
              • Responsible for the content and design of the company’s
              websites, and social media to achieve marketing targets.
            </p>
            <p className="text-exp">
              • Actitivities: Manage, Create and Publish high quality content,
              Monitor SEO and user engagement, Scheduling FB &amp; IG ads.
            </p>
            <p />
          </div>
        </div>
      </div>
      {/* Project & Experiences */}

      {/* Project & Experiences */}
      <div id="project-section" className="con-project">
        <div className="col-1">
          <p>text</p>
        </div>
      </div>
      {/* Project & Experiences */}
    </div>
  );
};

export default Home;
