import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

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
        <div>
            <h3 className="text-[#70ff00] font-roboto">contact( )</h3>
            <h1>What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</h1>

            <div className="flex items-center gap-4">
                <h3><MdOutlineEmail /></h3>
                <h3>sayeed.hossain.sagor@gmail.com</h3>
            </div>

            <div className="flex items-center gap-4">
                <h3><FiPhone /></h3>
                <h3>+8801747360201</h3>
            </div>

            <h3>You may also find me on these platforms</h3>

            <div className="flex gap-4">
                <h6><FaGithub /></h6>
                <h6><FaLinkedin /></h6>
                <h6><FaFacebook /></h6>
            </div>

            {/* CONTACT FROM */}
            <div>
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

                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="from_name" />
                    <label>Email</label>
                    <input type="email" name="from_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>
            </div>

        </div>
    );
};

export default Contact;