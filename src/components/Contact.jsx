import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { IoIosSend } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import { BsArrowUpRightCircle } from "react-icons/bs";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_najp233', 'template_hm3dmfp', form.current, {
                publicKey: 'Dh-kkV1LAxxZ5lIrA',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-12 mt-20 mx-20">
            <div>
                <h3 className="text-[#70ff00] font-courier text-3xl">Contact()</h3>

                <h1 className="max-w-screen-sm mt-10 font-roboto">What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</h1>

                <div className="mt-10 font-roboto">
                    <div className="flex items-center gap-4">
                        <h3><MdOutlineEmail /></h3>
                        <h3>sayeed.hossain.sagor@gmail.com</h3>
                    </div>

                    <div className="flex items-center gap-4">
                        <h3><FiPhone /></h3>
                        <h3>+8801747360201</h3>
                    </div>
                </div>

                <div className="mt-10 font-roboto">
                    <h3>You may also find me on these platforms</h3>

                    <div className="flex gap-4 mt-5 text-xl">
                        <a href="https://github.com/sayeedHossain191"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/sayeed-hossain/"><FaLinkedin /></a>
                        <a><FaFacebook /></a>
                    </div>
                </div>
            </div>

            {/* CONTACT FROM */}
            <div className="font-roboto">
                <script type="text/javascript"
                    src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
                </script>
                <script type="text/javascript">
                    (function(){
                        emailjs.init({
                            publicKey: "Dh-kkV1LAxxZ5lIrA",
                        })
                    })();
                </script>

                <h2 className="text-3xl mb-8 font-semibold">Get in touch</h2>

                <form ref={form} onSubmit={sendEmail}>
                    {/* name */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Your Full Name*</span>
                        </div>
                        <input type="text" name="from_name" placeholder="Type here" className="input input-bordered w-full " />
                    </label>

                    {/* email */}
                    <label className="form-control w-full mt-10">
                        <div className="label">
                            <span className="label-text">Your Email*</span>
                        </div>
                        <input type="email" name="from_email" placeholder="Type here" className="input input-bordered w-full " />
                    </label>

                    {/* message */}
                    <label className="form-control w-full mt-10">
                        <div className="label">
                            <span className="label-text">Your Message</span>
                        </div>
                        <textarea name="message" className="textarea textarea-bordered h-24" placeholder="Type here"></textarea>
                    </label>

                    <button className="btn btn-outline mt-10">Submit<BsArrowUpRightCircle /></button>
                </form>
            </div>

        </div>
    );
};

export default Contact;