import React from "react";
import "./OurTeam.css";

function OurTeam() {
  return (
    <div className="team-page">

      {/* Header Section */}
      <section className="team-hero">
        <h1>Meet Our Team</h1>
        <p>
          A passionate group of professionals dedicated to animal health,
          innovation, and natural care.
        </p>
      </section>

      {/* Team Members */}
      <section className="team-section">
        <h2>Our Leadership & Experts</h2>

        <div className="team-grid">
          <div className="team-card">
            <img src="/images/team/final_logo.jpg" alt="Founder" />
            <h3>Dr. Rajesh Verma</h3>
            <span>Founder & Veterinary Advisor</span>
            <p>
              With 20+ years of veterinary experience, Dr. Verma guides KGV
              Healthcare with science and compassion.
            </p>
          </div>

          <div className="team-card">
            <img src="/images/team/member2.jpg" alt="Co-Founder" />
            <h3>Anita Verma</h3>
            <span>Co-Founder & Operations Head</span>
            <p>
              Oversees production, quality control, and ensures every product
              meets global standards.
            </p>
          </div>

          <div className="team-card">
            <img src="/images/team/member3.jpg" alt="R&D Head" />
            <h3>Dr. Suresh Patel</h3>
            <span>Head of Research & Development</span>
            <p>
              Specializes in herbal formulations and innovative animal nutrition
              solutions.
            </p>
          </div>

          <div className="team-card">
            <img src="/images/team/member4.jpg" alt="Sales Head" />
            <h3>Rahul Mehta</h3>
            <span>Sales & Marketing Head</span>
            <p>
              Connects KGV Healthcare with farmers and distributors across India.
            </p>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="team-culture">
        <h2>Our Culture</h2>
        <p>
          We believe in teamwork, transparency, and trust. Our culture blends
          traditional knowledge with modern science to create effective and
          sustainable animal healthcare products.
        </p>

        <div className="culture-images">
          <img src="/images/team/logo.png" alt="Team Work" />
          <img src="/images/team/team2.jpg" alt="Manufacturing Unit" />
          <img src="/images/team/team3.jpg" alt="Research Lab" />
        </div>
      </section>

    </div>
  );
}

export default OurTeam;
