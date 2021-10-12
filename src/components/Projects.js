import React from "react";

const styles = {
  heading: {
    fontWeight: "bold",
    fontSize: "3rem",
    textAlign: "center",
    color: "#555",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "2rem 4rem",
  },
  project: {
    backgroundColor: "rgba(248, 248, 248, 0.55)",
    padding: "1rem",
    textAlign: "center",
    margin: "auto",
  },
  img: {
    width: "70%",
  },
  text: {
    fontWeight: "bold",
    fontSize: "1.2rem",
    background: "rgba(235, 235, 235, 0.55)",
  },
  h2: {
    color: "rgb(26,31,51)",
    fontSize: "2.2rem",
    background: "rgba(235, 235, 235, 0.55)",
    width: "25%",
    margin: "auto",
    marginBottom: "1rem",
  },
};

export default function Projects({ mrProjects }) {
  return (
    <>
      <h2 style={styles.heading} id="work">
        My Work
      </h2>
      <div style={styles.container}>
        {mrProjects.map((project, idx) => (
          <div key={idx} style={styles.project}>
            <h2 style={styles.h2}>{project.name}</h2>
            <a href={project.link} target="_blank" rel="noreferrer">
              <img style={styles.img} src={project.screenShot} alt="project" />
            </a>
            <p style={styles.text}>{project.about}</p>
          </div>
        ))}
      </div>
    </>
  );
}
