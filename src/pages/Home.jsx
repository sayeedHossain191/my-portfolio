import Banner from "../components/Banner";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = () => {

    return (
        <div>
            <Banner />
            <a className="btn btn-outline" href="https://drive.google.com/file/d/1cjHobhsAiv1xHANvuAUGHiZPlTI2b5vK/view?usp=sharing" download="resume.pdf">
                📥 Download CV
            </a>
            {/* <button href='https://drive.google.com/file/d/1cjHobhsAiv1xHANvuAUGHiZPlTI2b5vK/view?usp=sharing' className="btn btn-outline">Download CV</button> */}

            <Skills />
            <Projects />
        </div>
    );
};

export default Home;