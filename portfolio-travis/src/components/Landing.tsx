import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import "./styles/Landing.css";
import { config } from "../config";

const Landing = ({ children }: PropsWithChildren) => {
  const nameParts = config.developer.fullName.split(" ");
  const firstName = nameParts[0] || config.developer.name;
  const lastName = nameParts.slice(1).join(" ") || "";

  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-container">
        <div className="landing-hero">
          <div className="landing-copy">
            <div className="landing-name">
              <h1>
                <span className="landing-name-first">{firstName}</span>
                {lastName && <span className="landing-name-last"> {lastName}</span>}
              </h1>
            </div>

            <p className="landing-title">{config.developer.title}</p>

            <div className="landing-location">
              <span className="landing-location-icon">⌖</span>
              <span>{config.social.location}</span>
            </div>

            <p className="landing-description">{config.developer.description}</p>

            <div className="landing-actions">
              <Link className="landing-action primary" to="/myworks">
                View Projects
              </Link>
              <a className="landing-action secondary" href={config.contact.resume} download="Lufene_Mark_Travis_Resume.pdf">
                Download CV
              </a>
              <a className="landing-action secondary" href={`mailto:${config.contact.email}`}>
                Get in Touch
              </a>
            </div>
          </div>

          {/* Mobile photo - shows only on mobile when 3D character is hidden */}
          <div className="mobile-photo">
            <img src="/images/hero-photo.jpeg" alt="Redoyanul Haque" />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Landing;
