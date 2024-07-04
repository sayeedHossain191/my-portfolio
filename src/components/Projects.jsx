import { FaGithub, FaLink } from 'react-icons/fa';
import bg1 from '../assets/banner/medexpress.png'
import bg2 from '../assets/banner/headroom.png'
import bg3 from '../assets/banner/echoChamber.png'

const Projects = () => {
    return (
        <div>
            <h3 className="text-[#70ff00] font-courier text-3xl my-20 text-center">Projects()</h3>
            {/* Project-1 */}
            <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-12 items-center'>
                <div className="card rounded-none bg-base-100 max-w-screen-lg shadow-xl">
                    <figure>
                        <img
                            src={bg1}
                            alt="Shoes" />
                    </figure>
                </div>

                <div className="card bg-base-100 max-w-screen-lg shadow-xl border">
                    <div className="card-body">
                        <h2 className="card-title">MedExpress</h2>
                        <p className='mt-3'>MedExpress is a medical consultation service website. Users can add , update and delete his own services , watch others' services , watch service details, book any specific service , and update the current status of his service</p>
                        <div className="card-actions mt-10">
                            <div className="badge badge-primary badge-outline">React</div>
                            <div className="badge badge-primary badge-outline">TailwindCSS</div>
                            <div className="badge badge-primary badge-outline">MongoDb</div>
                            <div className="badge badge-primary badge-outline">Node Js</div>
                            <div className="badge badge-primary badge-outline">Firebase</div>
                            <div className="badge badge-primary badge-outline">Express</div>
                        </div>

                        <div className='flex justify-between items-center mt-5'>
                            <div className='flex items-center gap-2'>
                                <a href=""><FaLink /></a>
                                <a className='link link-hover' href="https://b9a11-consultation-client.web.app/">Live Preview</a>
                            </div>
                            <div className='flex items-center gap-2'>
                                <a href=""><FaGithub /></a>
                                <a className='link link-hover' href="https://github.com/sayeedHossain191/medExpress-Client">View Code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Project-2 */}
            <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-12 items-center mt-20'>
                <div className="card bg-base-100 max-w-screen-lg shadow-xl border">
                    <div className="card-body">
                        <h2 className="card-title">HeadRoom</h2>
                        <p className='mt-3'>HeadRoom is a real estate website based on residential properties. User can buy or rent properties based on their need.</p>
                        <div className="card-actions mt-10">
                            <div className="badge badge-primary badge-outline">React</div>
                            <div className="badge badge-primary badge-outline">TailwindCSS</div>
                            <div className="badge badge-primary badge-outline">MongoDb</div>
                            <div className="badge badge-primary badge-outline">Node Js</div>
                            <div className="badge badge-primary badge-outline">Firebase</div>
                            <div className="badge badge-primary badge-outline">Express</div>
                        </div>

                        <div className='flex justify-between items-center mt-5'>
                            <div className='flex items-center gap-2'>
                                <a href=""><FaLink /></a>
                                <a className='link link-hover' href="b9a9-real-estate-36f90.web.app">Live Preview</a>
                            </div>
                            <div className='flex items-center gap-2'>
                                <a href=""><FaGithub /></a>
                                <a className='link link-hover' href="https://github.com/sayeedHossain191/headroom">View Code</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card rounded-none bg-base-100 max-w-screen-lg shadow-xl">
                    <figure>
                        <img
                            src={bg2}
                            alt="Shoes" />
                    </figure>
                </div>
            </div>
            {/* Project-3 */}
            <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-12 items-center mt-20'>
                <div className="card rounded-none bg-base-100 max-w-screen-lg shadow-xl">
                    <figure>
                        <img
                            src={bg3}
                            alt="Shoes" />
                    </figure>
                </div>

                <div className="card bg-base-100 max-w-screen-lg shadow-xl border">
                    <div className="card-body">
                        <h2 className="card-title">EchoChamber</h2>
                        <p className='mt-3'>About
                            EchoChamber is a forum (an online platform where people can hold conversations in the form of posted messages) based website.</p>
                        <div className="card-actions mt-10">
                            <div className="badge badge-primary badge-outline">React</div>
                            <div className="badge badge-primary badge-outline">TailwindCSS</div>
                            <div className="badge badge-primary badge-outline">MongoDb</div>
                            <div className="badge badge-primary badge-outline">Node Js</div>
                            <div className="badge badge-primary badge-outline">Firebase</div>
                            <div className="badge badge-primary badge-outline">Express</div>
                        </div>

                        <div className='flex justify-between items-center mt-5'>
                            <div className='flex items-center gap-2'>
                                <a href=""><FaLink /></a>
                                <a className='link link-hover' href="https://b9a12-forum-client.web.app/">Live Preview</a>
                            </div>
                            <div className='flex items-center gap-2'>
                                <a href=""><FaGithub /></a>
                                <a className='link link-hover' href="https://github.com/sayeedHossain191/echoChamber-client">View Code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;