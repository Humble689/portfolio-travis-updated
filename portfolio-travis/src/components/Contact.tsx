import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { config } from "../config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  useEffect(() => {
    const contactTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 80%",
        end: "bottom center",
        toggleActions: "play none none none",
      },
    });

    contactTimeline.fromTo(
      ".contact-section h3",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    contactTimeline.fromTo(
      ".contact-box",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out" },
      "-=0.4"
    );

    return () => { contactTimeline.kill(); };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(config.contact.formspree, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>{config.developer.fullName}</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href={`mailto:${config.contact.email}`} data-cursor="disable">
                {config.contact.email}
              </a>
            </p>
            <h4>Location</h4>
            <p><span>{config.social.location}</span></p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a href={config.contact.github} target="_blank" rel="noopener noreferrer" data-cursor="disable" className="contact-social">
              Github <MdArrowOutward />
            </a>
            <a href={config.contact.linkedin} target="_blank" rel="noopener noreferrer" data-cursor="disable" className="contact-social">
              LinkedIn <MdArrowOutward />
            </a>
            <a href={config.contact.kaggle} target="_blank" rel="noopener noreferrer" data-cursor="disable" className="contact-social">
              Kaggle <MdArrowOutward />
            </a>
            <a href={config.contact.datacamp} target="_blank" rel="noopener noreferrer" data-cursor="disable" className="contact-social">
              DataCamp <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box contact-form-box">
            <h4>Send a Message</h4>
            {status === "sent" ? (
              <p className="form-success">Message sent! I'll get back to you soon.</p>
            ) : (
              <div className="contact-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  required
                  data-cursor="disable"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  required
                  data-cursor="disable"
                />
                <textarea
                  placeholder="Your message"
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  required
                  data-cursor="disable"
                />
                <button
                  onClick={handleSubmit}
                  disabled={status === "sending"}
                  data-cursor="disable"
                  className="form-submit-btn"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>
                {status === "error" && <p className="form-error">Something went wrong. Please try again.</p>}
              </div>
            )}
          </div>
        </div>
        <div className="contact-copyright">
          <h2>
            Designed and Developed <br /> by <span>{config.developer.fullName}</span>
          </h2>
          <h5>
            <MdCopyright /> {new Date().getFullYear()}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;
