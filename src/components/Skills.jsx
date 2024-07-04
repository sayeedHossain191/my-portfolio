import { FaCss3, FaCss3Alt, FaGit, FaGitAlt, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import logo1 from '../assets/logo/image 2.png'
import Marquee from "react-fast-marquee";
import { SiExpress, SiMongodb, SiVisualstudiocode } from 'react-icons/si';
import { IoLogoFirebase, IoLogoJavascript } from 'react-icons/io5';
import { RiTailwindCssFill } from 'react-icons/ri';
const Skills = () => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <h3 className="text-[#70ff00] font-courier text-3xl">SkillSet()</h3>
                <p>Technologies I've been working with recently</p>
            </div>

            <div className="my-20 text-5xl">
                <Marquee direction="right" speed={100} >
                    <div className="image_wrapper mr-40">
                        <FaReact />
                    </div>
                    <div className="image_wrapper mr-40">
                        <FaHtml5 />
                    </div>
                    <div className="image_wrapper mr-40">
                        <FaCss3Alt />
                    </div>
                    <div className="image_wrapper mr-40">
                        <FaGitAlt />
                    </div>
                    <div className="image_wrapper mr-40">
                        <SiVisualstudiocode />
                    </div>
                    <div className="image_wrapper mr-40">
                        <FaNodeJs />
                    </div>
                    <div className="image_wrapper mr-40">
                        <SiMongodb />
                    </div>
                    <div className="image_wrapper mr-40">
                        <IoLogoJavascript />
                    </div>
                    <div className="image_wrapper mr-40">
                        <IoLogoFirebase />
                    </div>
                    <div className="image_wrapper mr-40">
                        <RiTailwindCssFill />
                    </div>
                    <div className="image_wrapper mr-40">
                        <SiExpress />
                    </div>


                </Marquee>
            </div>
        </div>
    );
};

export default Skills;