import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { FiPhone } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <div className='mt-20'>
            <footer className="footer bg-base-200 text-base-content justify-between px-20 pt-10 pb-4">
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className='flex gap-4 text-lg'>
                        <a href="https://github.com/sayeedHossain191"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/sayeed-hossain/"><FaLinkedinIn /></a>
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

            <hr className='mx-20' />
            <footer className="footer footer-center bg-base-200 text-base-content rounded pt-4">
                <nav className="grid grid-flow-col gap-40">
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Contact</a>
                </nav>

                <aside>
                    <p className='text-xs pb-3'>Copyright © ${new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;