import { CgCalendarDates } from "react-icons/cg";
import { FaRegBuilding } from "react-icons/fa";
import bg1 from '../assets/banner/BLack Minimalist Corporate Staff Identity LinkedIn Banner (1).png'

const About = () => {
    return (
        <div className="mx-20">
            <div className="bg-slate-200 hero rounded-xl">
                <img
                    src={bg1}
                    className="rounded-lg shadow-2xl mx-auto my-10" />
            </div>
            {/* <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${bg1})`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div> */}

            <h2 className="text-[#70ff00] font-courier text-2xl mt-20">AboutMe()</h2>
            <p className="max-w-2xl mt-4 font-railway">I’m Sayeed, a multi-disciplinary, passionate and self-proclaimed designer who specializes in frontend development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>

            <p className="max-w-2xl mt-6 font-railway">Feel free to reach out via e-mail, or follow me on FaceBook. Want to see where I’ve worked? Check out my Resume, or Connect with me on LinkedIn.</p>

            <hr className="max-w-2xl my-6" />

            <h2 className="text-2xl text-[#70ff00] font-courier">Education()</h2>

            <div className="mt-4 font-railway">
                <h4>Bachelor in Computer Science</h4>

                <div className="flex gap-8 text-xs mt-2">
                    <div className="flex items-center gap-2">
                        <h3><FaRegBuilding /></h3>
                        <h3>BRAC University</h3>
                    </div>
                    <div className="flex items-center gap-2">
                        <h3><CgCalendarDates /></h3>
                        <h3>May 2018 - Sep 2023</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;