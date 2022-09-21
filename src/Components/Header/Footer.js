import React from 'react';
import logo from '../../assets/logo.svg'
import facebook from '../../assets/facebook.svg'
import linkdlin from '../../assets/linkedin.svg'
import instagram from '../../assets/instagram.svg'

const Footer = () => {
    return (
        <div className='md:px-[7%] px-5'>
            <div className='md:flex justify-center items-center'>
                <div>
                    <img className='w-48' src={logo} alt="" />
                    <p className='text-gray-400'>A new way to make the payments easy, reliable and secure.</p>
                </div>
                <footer class="footer p-10 text-neutral-content">
                    <div>
                        <span class="footer-title">Services</span>
                        <a href='#' class="link link-hover">Branding</a>
                        <a class="link link-hover">Design</a>
                        <a class="link link-hover">Marketing</a>
                        <a class="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span class="footer-title">Company</span>
                        <a class="link link-hover">About us</a>
                        <a class="link link-hover">Contact</a>
                        <a class="link link-hover">Jobs</a>
                        <a class="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span class="footer-title">Legal</span>
                        <a class="link link-hover">Terms of use</a>
                        <a class="link link-hover">Privacy policy</a>
                        <a class="link link-hover">Cookie policy</a>
                    </div>
                </footer>
            </div>
             
            <footer class="footer items-center p-4 text-neutral-content">
                <div class="center ">

                    <p>Copyright © 2022 - All right reserved</p>
                </div>
                <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a href='www.facebook.com'><img src={instagram} alt="" />
                    </a>
                    <a href='www.facebook.com'><img src={linkdlin} alt="" />
                    </a>
                    <a href='www.facebook.com'><img src={facebook} alt="" />
                    </a>

                </div>
            </footer>

        </div>
    );
};

export default Footer;