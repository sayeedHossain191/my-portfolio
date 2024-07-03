import Banner from "../components/Banner";

const Home = () => {

    return (
        <div>
            <Banner />
            <a href="../resume.pdf" download="webtips.png">
                📥 Download with custom name
            </a>
        </div>
    );
};

export default Home;