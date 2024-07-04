import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { FiPhone } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <div className='mt-20'>
            <footer className="footer bg-base-300 text-base-content justify-between px-20 p-10">
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className='flex gap-4'>
                        <a href=""><FaGithub /></a>
                        <a href=""><FaLinkedinIn /></a>
                        <a href=""><FaFacebook /></a>
                        <a href=""><FaInstagram /></a>
                    </div>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact</h6>
                    <a className="link link-hover flex items-center gap-2">
                        <h3><FaLocationDot /></h3>
                        <h3>Dhaka, Bangladesh</h3>
                    </a>
                    <a className="link link-hover flex items-center gap-2">
                        <h3><MdEmail /></h3>
                        <h3>sayeed.hossain.sagor@gmail.com</h3>
                    </a>
                    <a className="link link-hover flex items-center gap-2">
                        <h3><FiPhone /></h3>
                        <h3>+8801747360201</h3>
                    </a>

                </nav>


            </footer>


            <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
                <nav className="grid grid-flow-col gap-40">
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Contact</a>
                </nav>

                <aside>
                    <p>Copyright © ${new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;