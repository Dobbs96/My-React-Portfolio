import React from "react";

const styles = {
  heading: {
    fontWeight: "bold",
    fontSize: "2rem",
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
    margin: ".5rem",
    backgroundColor: "rgba(248, 248, 248, 0.55)",
    padding: "1rem",
    textAlign: "center",
  },
  img: {
    width: "70%",
  },
  text: {
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
};

export default function Projects({ mrProjects }) {
  return (
    <>
      <h2 style={styles.heading}>My Work</h2>
      <div style={styles.container}>
        {mrProjects.map((project, idx) => (
          <div key={idx} style={styles.project}>
            <a href={project.link}>
              <img style={styles.img} src={project.screenShot} alt="project" />
            </a>
            <p style={styles.text}>{project.about}</p>
          </div>
        ))}
      </div>
    </>
  );
}
