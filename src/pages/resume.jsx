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
            <h4 className="h4 timeline-item-title">Full Stack Developer</h4>
            <span>2024 — Present</span>

            <p className="timeline-text">
              Built end-to-end <strong>User Frontend</strong> and <strong>Admin Dashboard</strong> for a live tyre e-commerce business.
              <br /><strong>User Frontend:</strong>
              <br />• "Search by Vehicle/Size" filters, Inclusive Pricing Engine, and Booking System with 25% deposit.
              <br />• Integrated Stripe for payments and Real-time Google Reviews.
              <br /><strong>Admin Dashboard (CMS):</strong>
              <br />• <strong>TimeSlot & Appointment Manager:</strong> dynamic slot configuration for customer bookings.
              <br />• <strong>Inventory & Content:</strong> Full CRUD for Products, Brands, Services, Banners, and Blogs.
              <br />• <strong>Business Logic:</strong> Modules for Managing Taxes, Holidays, Employees, and Invoices.
              <br />• <strong>Security:</strong> Secure Admin Login with 2FA and Role-Based Access.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Full Stack Web Developer</h4>
            <span>Internship (Outamation Company)</span>
            <p className="timeline-text">
              Built a scalable <strong>School Management System</strong> feature-rich platform using ASP.NET Core & SQL Server.
              Implemented Face Recognition Attendance (Python), Razorpay integration, Google SSO, and AI Chatbot (Gemini) for student support.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">E-Commerce Developer</h4>
            <span>Project Based</span>
            <p className="timeline-text">
              Designed and deployed a MERN stack (MongoDB, Express, React, Node.js) shopping platform.
              Focused on performance optimization, RESTful API design, complex MongoDB aggregations, and secure JWT authentication.
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
              <h5 className="h5">React.js, Next.js & Redux</h5>
              <data value="90">90%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "90%" }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Node.js, Express & REST APIs</h5>
              <data value="90">90%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "90%" }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">ASP.NET Core & C#</h5>
              <data value="85">85%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "85%" }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Database (MongoDB, SQL, Firebase)</h5>
              <data value="85">85%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "85%" }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Payment Gateways (Stripe, Razorpay)</h5>
              <data value="90">90%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "90%" }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Auth & Security (JWT, OAuth, 2FA)</h5>
              <data value="85">85%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "85%" }}></div>
            </div>
          </li>

        </ul>

      </section>

    </article>
  );
}

export default Resume;
