import React from "react";
import gitHubIcon from "../images/GitHub.png";
import linkedInIcon from "../images/LinkedIn.png";
import resumeIcon from "../images/Resume.png";
import resumeFile from "../assets/Dobbs-Resume.pdf";

const contactInfo = {
  phone: "347.557.3898",
  email: "dobbs282@gmail.com",
  gitHub: { link: "https://github.com/Dobbs96", icon: gitHubIcon },
  linkedIn: {
    link: "https://www.linkedin.com/in/james-dobbs-63bb8016b/",
    icon: linkedInIcon,
  },
  resume: { link: resumeFile, icon: resumeIcon },
};

const styles = {
  heading: {
    fontWeight: "bold",
    fontSize: "2rem",
    textAlign: "center",
    color: "#555",
  },
  contacts: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0 4rem",
    backgroundColor: "rgba(248, 248, 248, 0.56)",
  },
  liTags: {
    display: "inline",
    listStyle: "none",
    marginRight: "2rem",
    padding: "7px",
    fontSize: "1.5rem",
  },
  text: {
    fontWeight: "bold",
    fontSize: "2rem",
  },
};

export default function FooterNav() {
  return (
    <div>
      <h2 style={styles.heading}>Contact Me</h2>
      <div style={styles.contacts}>
        <p style={styles.text}>{contactInfo.phone}</p>
        <div>
          <ul>
            <li style={styles.liTags}>
              <a
                href={contactInfo.gitHub.link}
                target="_blank"
                rel="noreferrer"
              >
                <img src={contactInfo.gitHub.icon} alt="icon" />
              </a>
            </li>
            <li style={styles.liTags}>
              <a
                href={contactInfo.linkedIn.link}
                target="_blank"
                rel="noreferrer"
              >
                <img src={contactInfo.linkedIn.icon} alt="icon" />
              </a>
            </li>
            <li style={styles.liTags}>
              <a
                href={contactInfo.resume.link}
                target="_blank"
                rel="noreferrer"
              >
                <img src={contactInfo.resume.icon} alt="icon" />
              </a>
            </li>
          </ul>
        </div>
        <p style={styles.text}>
          <a
            href="mailto:dobbs282@gmail.com"
            style={{ textDecoration: "none", color: "black" }}
          >
            {contactInfo.email}
          </a>
        </p>
      </div>
    </div>
  );
}
