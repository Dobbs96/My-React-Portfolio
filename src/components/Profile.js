import React from "react";
import self from "../images/Profile_Me.JPG";

const styles = {
  profile: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "2rem 4rem",
    padding: "2rem 5rem",
    backgroundColor: "rgba(248, 248, 248, 0.56)",
  },
  aboutMe: {
    flex: 1,
    padding: "1rem",
    border: "2px dashed #ccc",
    fontSize: "1.5rem",
    marginRight: "4rem",
  },
  image: { borderRadius: "145px", flex: 1 },
};

export default function Profile() {
  return (
    <div style={styles.profile}>
      <div style={styles.aboutMe}>
        <p>
          As someone who is constantly trying to push to new limits; I have to
          be okay with failing, only when we fail do we learn to become better.
          My name is James Dobbs, for those of you who do not know, this is my
          path to becoming a web developer.
        </p>
        <p>
          Computers have always been a sweet spot for me, but learning more than
          just the basics always seemed far from reach. My passion for coding
          did not come overnight, it came through practice and failure. My main
          goal is simple, never stop learning and never stop trying. We all need
          one starting point, once that is established you keep moving forward,
          picking up where you left off and continuing on, no matter the
          problems in the way.
        </p>
      </div>
      <div>
        <img style={styles.image} src={self} alt="selfie" />
      </div>
    </div>
  );
}
