import React from "react";

const styles = {
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0 2rem",
    backgroundColor: "rgba(248, 248, 248, 0.56)",
  },
  mainNav: {
    display: "inline-flex",
    alignContent: "center",
    justifyContent: "flex-end",
  },
  liTags: {
    display: "inline",
    listStyle: "none",
    marginRight: "2rem",
    padding: "7px",
    fontSize: "1.5rem",
    borderRight: "3px solid #ccc",
  },
};

export default function Header() {
  return (
    <header style={styles.header}>
      <h1>James Dobbs</h1>
      <nav style={styles.mainNav}>
        <ul>
          <li style={styles.liTags}>
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="#about-me"
            >
              About Me
            </a>
          </li>
          <li style={styles.liTags}>
            <a style={{ textDecoration: "none", color: "black" }} href="#work">
              Work
            </a>
          </li>
          <li style={styles.liTags}>
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="#main-footer"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
