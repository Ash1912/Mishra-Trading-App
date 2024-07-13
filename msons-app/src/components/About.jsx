import React from "react";
import teamImage from '../assets/images/home1.jpg'; // Example team image path
import companyHistoryImage from '../assets/images/Logo_MTC.jpg'; // Example history image path

function About() {
    return (
        <div className="about">
            <section className="about-hero">
                <div className="hero-content">
                    <h1>About Us</h1>
                    <p>Discover more about our journey, values, and the people who make our company great.</p>
                </div>
            </section>
            <div className="container">
                <section className="company-history">
                    <h2>Our History</h2>
                    <img src={companyHistoryImage} alt="Company History" />
                    <p>Since our inception in 2000, we've been pioneers in our industry...</p>
                </section>
                <section className="mission-vision">
                    <h2>Mission & Vision</h2>
                    <p>Our mission is to deliver excellence...</p>
                </section>
                <section className="our-team">
                    <h2>Meet Our Team</h2>
                    <img src={teamImage} alt="Our Team" />
                    <p>Our team is our greatest asset...</p>
                </section>
                <section className="our-values">
                    <h2>Our Values</h2>
                    <ul>
                        <li>Integrity and Ethics</li>
                        <li>Customer Commitment</li>
                        <li>Innovation and Excellence</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default About;