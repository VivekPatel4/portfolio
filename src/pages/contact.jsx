import React from 'react';
import avatar from '../assets/images/my-avatar.png';

function Contact() {
    return (
        <article className="contact modern-contact" data-page="contact">
            <header>
                <h2 className="h2 article-title">Contact</h2>
            </header>
            <div className="contact-grid">
                <section className="contact-info-card">
                    <img src={avatar} alt="Vivek Patel" className="contact-avatar" />
                    <h3 className="contact-name">Vivek Patel</h3>
                    <p className="contact-role">Web Developer</p>
                    <div className="contact-details">
                        <div><strong>Email:</strong> <a href="mailto:vivekpatel.codes@gmail.com">vivekpatel.codes@gmail.com</a></div>
                        <div><strong>Phone:</strong> <a href="tel:+919904092901">+91 9904092901</a></div>
                        <div><strong>Location:</strong> Anand, Gujarat, India</div>
                    </div>
                    <div className="contact-socials">
                        <a href="https://facebook.com/patel.vivek.716533" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><ion-icon name="logo-facebook"></ion-icon></a>
                        <a href="https://instagram.com/v_iv_ek7046" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><ion-icon name="logo-instagram"></ion-icon></a>
                        <a href="https://github.com/VivekPatel4" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><ion-icon name="logo-github"></ion-icon></a>
                    </div>
                    <div className="contact-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.646964024052!2d72.9288710752016!3d22.56451807951108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e5a2e0e0e0e0f%3A0x7e4e4e4e4e4e4e4e!2sAnand%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                            width="100%" height="180" style={{ border: 0, borderRadius: '12px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                            title="Anand, Gujarat, India"
                        ></iframe>
                    </div>
                </section>
                <section className="contact-direct modern-form">
                    <h3 className="h3 form-title">Get in Touch Instantly</h3>
                    <div className="contact-direct-buttons">
                        <a href="mailto:vivekpatel.codes@gmail.com" className="contact-btn" aria-label="Email"><ion-icon name="mail-outline"></ion-icon> Email Me</a>
                        <a href="tel:+919904092901" className="contact-btn" aria-label="Call"><ion-icon name="call-outline"></ion-icon> Call Me</a>
                        <a href="https://wa.me/919904092901" className="contact-btn" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><ion-icon name="logo-whatsapp"></ion-icon> WhatsApp</a>
                        <a href="https://linkedin.com/in/patel-vivek-16a7a2374" className="contact-btn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><ion-icon name="logo-linkedin"></ion-icon> LinkedIn</a>
                    </div>
                </section>
            </div>
        </article>
    );
}

export default Contact;
