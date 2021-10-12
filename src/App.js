import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import FooterNav from "./components/FooterNav";

// images to import
import bucket from "./images/bucket.png";
import workDayScheduler from "./images/workDaySceduler.png";
import bestOfMe from "./images/bestOfMe.png";
import digiArt from "./images/digiArt.png";

//

const mrProjects = [
  {
    name: "Digi Art",
    link: "https://digital-art-ahjb.herokuapp.com/",
    screenShot: digiArt,
    about:
      "Group project to create a website to sell art. We used React, JavaScript, express, apollo, graphQL, stripe, and jwt-decode.",
  },
  {
    name: "Bucket",
    link: "https://aspirational-bucket.herokuapp.com/",
    screenShot: bucket,
    about:
      "Group project to create a bucket list website for people to communicate. We used JavaScript, materializes, MySQL, express, handlebars, and bcrypt.",
  },
  {
    name: "Work Day Scheduler",
    link: "https://dobbs96.github.io/HW-4-Work-Day-Scheduler/",
    screenShot: workDayScheduler,
    about:
      "This is my work day scheduler. It will show colors depending on time. You will be able to save and edit each time as you please. Used JavaScript, Moment, and bootstrap.",
  },
  {
    name: "Best of Me",
    link: "https://dobbs96.github.io/The-Best-of-Me-Project/",
    screenShot: bestOfMe,
    about:
      "This is the best of me. The first group Project. I linked the apis to work with the webpage and the debugger. While others worked on the front-end. We used bulma, jquery, HTML5, CSS3. ",
  },
];
function App() {
  return (
    <>
      <Header />
      <Profile />
      <Projects mrProjects={mrProjects} />
      <FooterNav />
    </>
  );
}

export default App;
