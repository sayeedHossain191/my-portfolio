import bg1 from '../assets/banner/Black White Grayscale Portfolio Presentation.png'

const Banner = () => {
    return (
        <div>
            {/* <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Hi, I’m Sayeed 👋</h1>
                        <p className="py-6">
                            I am a frontend developer (React.js & Node.js) with a focus on creating and designing exceptional digital experiences that are fast, accessible, visually appealing, and responsive.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div> */}
            <img
                src={bg1}
                className="rounded-lg shadow-2xl" />
        </div>
    );
};

export default Banner;