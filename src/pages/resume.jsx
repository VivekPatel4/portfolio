import React from 'react';

function Resume() {
  return (
    <article className="resume" data-page="resume">

      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>



      <section className="timeline">

        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">M.Sc. (Information Technology)</h4>
            <span>2023 — 2025</span>
            <p className="timeline-text">
              Sardar Patel University, Anand, Gujarat
              Developed a full-fledged School Management System as the final year project with features like multi-role login, face recognition attendance, fee management via Razorpay, and Google SSO.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">B.Sc</h4>
            <span>2020 — 2023</span>
            <p className="timeline-text">
              Built a strong foundation in programming, databases, and web technologies. Explored projects in PHP, C#, and SQL Server.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Higher Secondary Education (HSC - Science Stream)</h4>
            <span>2018 — 2020</span>
            <p className="timeline-text">
              Completed 12th Science with a focus on Computer and Mathematics, laying the groundwork for a career in IT.
            </p>
          </li>

        </ol>

      </section>




      <section className="timeline">

        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Intern – Full Stack Developer (Outamation Company)</h4>
            {/* <span>Jan 2024 — Apr 2024</span> */}
            <p className="timeline-text">
              Completed internship at Outamation Company as part of the final year project. Built a full-stack School Management System with roles for Admin, Student, and Teacher using ASP.NET and SQL Server. Integrated features like face recognition for attendance (Python), Razorpay fee payment, Google login, and Gemini AI chatbot.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">E-Commerce Web Platform</h4>
            {/* <span>Aug 2023 — Dec 2023</span> */}
            <p className="timeline-text">
              Developed a scalable e-commerce app with admin and customer portals using React, Node.js, and MongoDB. Implemented product listings, order management, user auth (JWT),Integrated secure stripe payment gateway, and responsive UI.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Self-Learning & Mini Projects</h4>
            {/* <span>2022 — Present</span> */}
            <p className="timeline-text">
              Gained practical experience by building mini-projects including API integrations, automation tools using Puppeteer & Playwright, Firebase authentication, and Telegram bots.
            </p>
          </li>

        </ol>

      </section>

      {/* <section className="skill">

        <h3 className="h3 skills-title">My skills</h3>

        <ul className="skills-list content-card">

          <li className="skills-item">

            <div className="title-wrapper">
              <h5 className="h5">Web design</h5>
              <data value="80">80%</data>
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "80%" }}></div>
            </div>

          </li>

          <li className="skills-item">

            <div className="title-wrapper">
              <h5 className="h5">Graphic design</h5>
              <data value="70">70%</data>
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "70%" }}></div>
            </div>

          </li>

          <li className="skills-item">

            <div className="title-wrapper">
              <h5 className="h5">Branding</h5>
              <data value="90">90%</data>
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "90%" }}></div>
            </div>

          </li>

          <li className="skills-item">

            <div className="title-wrapper">
              <h5 className="h5">WordPress</h5>
              <data value="50">50%</data>
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "50%" }}></div>
            </div>

          </li>

        </ul>

      </section> */}

      <section className="skill">

        <h3 className="h3 skills-title">My Skills</h3>

        <ul className="skills-list content-card">

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">ASP.NET (Web Forms, MVC, Core)</h5>
              <data value="85">85%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "85%" }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">React & JavaScript</h5>
              <data value="80">80%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "80%" }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Node.js & Express</h5>
              <data value="85">85%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "85%" }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">SQL Server & MongoDB</h5>
              <data value="80">80%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "80%" }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Firebase & Authentication</h5>
              <data value="70">70%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "70%" }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Razorpay & API Integration</h5>
              <data value="75">75%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "75%" }}></div>
            </div>
          </li>

        </ul>

      </section>

    </article>
  );
}

export default Resume;
