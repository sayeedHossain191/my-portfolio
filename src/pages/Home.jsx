// import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = () => {

    return (
        <div>
            <Banner />
            <a className="btn btn-outline my-20 flex justify-center" href="https://drive.google.com/file/d/1y2pgnRxkoue1rKAE2WG2OhZVqoNT_W1w/view?usp=sharing" download="resume.pdf">
                📥 DOWNLOAD CV
            </a>
            {/* <Link className="btn btn-outline my-20" href="https://drive.google.com/file/d/1cjHobhsAiv1xHANvuAUGHiZPlTI2b5vK/view?usp=sharing">Download CV</Link> */}
            {/* <button href='https://drive.google.com/file/d/1cjHobhsAiv1xHANvuAUGHiZPlTI2b5vK/view?usp=sharing' className="btn btn-outline">Download CV</button> */}

            <Skills />
            <Projects />
        </div>
    );
};

export default Home;