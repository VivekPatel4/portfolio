import React, { useEffect, useRef } from 'react';
// Import all images
import iconDesign from '../assets/images/icon-design.svg';
import iconDev from '../assets/images/icon-dev.svg';
import iconApp from '../assets/images/api.svg';
import iconPhoto from '../assets/images/learn.svg';
import avatar1 from '../assets/images/shop2.jpg';
import avatar2 from '../assets/images/school.png';
import avatar3 from '../assets/images/Property.webp';
import avatar4 from '../assets/images/hostel.webp';
import iconQuote from '../assets/images/icon-quote.svg';
import logo1 from '../assets/images/node.svg';
import logo2 from '../assets/images/react.svg';
import logo3 from '../assets/images/tailwind.svg';
import logo4 from '../assets/images/mongodb.svg';
import logo5 from '../assets/images/firebase.svg';
import logo6 from '../assets/images/python.svg';
import logo7 from '../assets/images/aspnet.png';
import logo8 from '../assets/images/googleauth.png';
import logo9 from '../assets/images/NETcore.svg';
import logo10 from '../assets/images/php.svg';
import logo11 from '../assets/images/sql.png';
import logo12 from '../assets/images/stripe.jpg';
import logo13 from '../assets/images/Razor.webp';

const testimonialsData = [
  {
    title: "🛒 Shop – E-commerce Platform",
    avatar: avatar1,
    alt: "Daniel lewis",
    text: "A full-stack shopping platform with Admin and Customer portals. Customers can browse, filter, and buy products, manage carts and orders, while Admins handle products, categories, and user management. Integrated secure authentication,Integrated secure stripe payment gateway, REST API, and responsive UI using React (Vite), Tailwind, Node.js, MongoDB, and JWT."
  },
  {
    title: "🎓 Student Management System",
    avatar: avatar2,
    alt: "Jessica miller",
    text: "A multi-role system (Admin, Teacher, Student) built using ASP.NET and SQL Server. Includes modules for student and teacher registration, attendance via face recognition, timetable generation, fee tracking with Razorpay payment gateway, and leave management.Supports Google Sign-In (SSO) and Integrated Google Gemini AI as a chatbot assistant to support students with real-time queries."
  },
  {
    title: "🏠 Property Management System",
    avatar: avatar3,
    alt: "Emily evans",
    text: "Cross-platform solution with Flutter mobile app and React web dashboard for Agents, Vendors, and Admins. Features include property listing, contract management, and service assignment. Backend powered by .NET Core API with JWT/OAuth login and role-based access. Designed for real estate workflows and scalable deployment."
  },
  {
    title: "🏨 Hostel Management (PHP)",
    avatar: avatar4,
    alt: "Henry william",
    text: "A simple PHP-based system for managing hostel activities. Admin can add departments, create student accounts, and handle leave requests. Students can log in, apply for leave, and track their status. Features included email verification, password reset, and admin control over reminders and leave types. Lightweight UI with core PHP and MySQL."
  }
];

const clientsData = [
  logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13
];

function About() {
  const testimonialsRef = useRef(null);
  const clientsRef = useRef(null);

  useEffect(() => {
    const setupAutoScroll = (ref, speed = 1) => {
      if (!ref.current) return;

      let animationId;
      const scroll = () => {
        if (ref.current) {
          ref.current.scrollLeft += speed;
          // Reset scroll when it reaches the halfway point (end of first set)
          if (ref.current.scrollLeft >= ref.current.scrollWidth / 2) {
            ref.current.scrollLeft = 0;
          }
        }
        animationId = requestAnimationFrame(scroll);
      };

      animationId = requestAnimationFrame(scroll);

      const stopScroll = () => cancelAnimationFrame(animationId);
      const startScroll = () => {
        stopScroll();
        animationId = requestAnimationFrame(scroll);
      };

      ref.current.addEventListener('mouseenter', stopScroll);
      ref.current.addEventListener('mouseleave', startScroll);

      return () => {
        stopScroll();
        if (ref.current) {
          ref.current.removeEventListener('mouseenter', stopScroll);
          ref.current.removeEventListener('mouseleave', startScroll);
        }
      };
    };

    const cleanupTestimonials = setupAutoScroll(testimonialsRef, 0.5);
    const cleanupClients = setupAutoScroll(clientsRef, 0.5);

    return () => {
      cleanupTestimonials && cleanupTestimonials();
      cleanupClients && cleanupClients();
    };
  }, []);

  return (

    <article className="about  active" data-page="about">

      <header>
        <h2 className="h2 article-title">About Me</h2>
      </header>

      <section className="about-text">
        <p>
          Hi, I’m Vivek Patel, a self-taught and dedicated developer from Gujarat, India. As a fresher, I’ve built multiple
          real-world inspired web applications to strengthen my skills in solving problems with logic and writing clean,
          maintainable code. I enjoy building user-friendly and scalable web solutions using modern technologies.
        </p>

        <p>
          I’ve worked with tools and frameworks like ASP.NET (Web Forms, MVC, Core), React JS, JavaScript, SQL Server,
          MongoDB, Node.js, Express, REST APIs, Python (Automation & AI), Firebase, GitHub Actions, Razorpay & Google Login
          integration, and Telegram Bot API with Puppeteer and Playwright. I’m now looking forward to joining a professional
          team where I can grow and contribute, while also being open to opportunities where I can independently deliver
          practical and quality-driven solutions.
        </p>

      </section>


      {/* <!--
          - service
        --> */}


      <section className="service">

        <h3 className="h3 service-title">What I'm doing</h3>

        <ul className="service-list">

          <li className="service-item">
            <div className="service-icon-box">
              <img src={iconDev} alt="Web development icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web Development</h4>
              <p className="service-item-text">
                Developing responsive and user-friendly websites with clean code and modern technologies.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src={iconDesign} alt="UI design icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">UI/UX Interfaces</h4>
              <p className="service-item-text">
                Creating simple and intuitive user interfaces with attention to layout, usability, and visual design.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src={iconApp} alt="app integration icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">App & API Integration</h4>
              <p className="service-item-text">
                Connecting web apps with APIs and external services to make them smarter and more powerful.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src={iconPhoto} alt="learning icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Learning & Improving</h4>
              <p className="service-item-text">
                Always exploring new tools, technologies, and practices to grow as a developer and deliver better solutions.
              </p>
            </div>
          </li>

        </ul>

      </section>




      {/* <!--
          - testimonials
        --> */}

      <section className="testimonials">

        <h3 className="h3 testimonials-title">What I've Built</h3>

        <ul className="testimonials-list has-scrollbar" ref={testimonialsRef} style={{ scrollSnapType: 'none', scrollBehavior: 'auto' }}>
          {[...testimonialsData, ...testimonialsData].map((item, index) => (
            <li className="testimonials-item" key={index}>
              <div className="content-card" data-testimonials-item>

                <figure className="testimonials-avatar-box">
                  <img src={item.avatar} alt={item.alt} width="60" data-testimonials-avatar />
                </figure>

                <h4 className="h4 testimonials-item-title" data-testimonials-title>{item.title}</h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>{item.text}</p>
                </div>

              </div>
            </li>
          ))}
        </ul>

      </section>


      {/* <!--
          - testimonials modal
        --> */}

      <div className="modal-container" data-modal-container>

        <div className="overlay" data-overlay></div>

        <section className="testimonials-modal">

          <button className="modal-close-btn" data-modal-close-btn>
            <ion-icon name="close-outline"></ion-icon>
          </button>

          <div className="modal-img-wrapper">
            <figure className="modal-avatar-box">
              <img src={avatar1} alt="Daniel lewis" width="80" data-modal-img />
            </figure>

            <img src={iconQuote} alt="quote icon" />
          </div>

          <div className="modal-content">

            <h4 className="h3 modal-title" data-modal-title>Daniel lewis</h4>

            <time dateTime="2021-06-14">14 June, 2021</time>

            <div data-modal-text>
              <p>
                Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                lot of experience
                and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                consectetur adipiscing
                elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
              </p>
            </div>

          </div>

        </section>

      </div>




      {/* <!--
          - clients
        --> */}

      <section className="clients">

        <h3 className="h3 clients-title">Technologies I've Worked With</h3>

        <ul className="clients-list has-scrollbar" ref={clientsRef} style={{ scrollSnapType: 'none', scrollBehavior: 'auto' }}>
          {[...clientsData, ...clientsData].map((logo, index) => (
            <li className="clients-item" key={index}>
              <a href="#">
                <img src={logo} alt="client logo" />
              </a>
            </li>
          ))}
        </ul>

      </section>

    </article>
  );
}

export default About;
