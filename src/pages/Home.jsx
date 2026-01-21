// import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div>
      <Banner />

      {/* <Link className="btn btn-outline my-20" href="https://drive.google.com/file/d/1cjHobhsAiv1xHANvuAUGHiZPlTI2b5vK/view?usp=sharing">Download CV</Link> */}
      {/* <button href='https://drive.google.com/file/d/1cjHobhsAiv1xHANvuAUGHiZPlTI2b5vK/view?usp=sharing' className="btn btn-outline">Download CV</button> */}

      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
