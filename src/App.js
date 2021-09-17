import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import FooterNav from "./components/FooterNav";

// images to import
import bucket from "./images/bucket.png";
import workDayScheduler from "./images/workDaySceduler.png";
import bestOfMe from "./images/bestOfMe.png";

//

const mrProjects = [
  {
    name: "Bucket",
    link: "https://aspirational-bucket.herokuapp.com/",
    screenShot: bucket,
    about:
      "This was a group project. In this project i connected the comments and create the dashboard/homepage.",
  },
  {
    name: "Work Day Scheduler",
    link: "https://dobbs96.github.io/HW-4-Work-Day-Scheduler/",
    screenShot: workDayScheduler,
    about:
      "This is my work day scheduler. It will show colors depending on time. You will be able to save and edit each time as you please.",
  },
  {
    name: "Best of Me",
    link: "https://dobbs96.github.io/The-Best-of-Me-Project/",
    screenShot: bestOfMe,
    about:
      "This is the best of me. A project i worked on. I linked the apis to work with the webpage. While others worked on the front-end.",
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
