import React, { useState } from 'react';
import avatar from '../assets/images/my-avatar.png'; 

function Aside() {
  const [showContacts, setShowContacts] = useState(false);

  return (
    <aside className={`sidebar${showContacts ? " active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={avatar} alt="Richard hanrick" width="80"/>
        </figure>
        <div className="info-content">
          <h1 className="name" title="Vivek Patel">Vivek Patel</h1>
          <p className="title">Web developer</p>
        </div>
        <button
          className="info_more-btn"
          data-sidebar-btn
          onClick={() => setShowContacts((prev) => !prev)}
        >
          <span>{showContacts ? "Hide Contacts" : "Show Contacts"}</span>
          <ion-icon name={showContacts ? "chevron-up" : "chevron-down"}></ion-icon>
        </button>
      </div>

      <div className={`sidebar-info_more${showContacts ? " active" : ""}`}>
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:vivekpatel.codes@gmail.com" className="contact-link">vivekpatel.codes@gmail.com</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+919904092901" className="contact-link">+91 9904092901</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2003-06-01">June 01, 2003</time>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Anand, Gujarat, India</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="https://facebook.com/patel.vivek.716533" className="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="https://instagram.com/v_iv_ek7046" className="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Aside;