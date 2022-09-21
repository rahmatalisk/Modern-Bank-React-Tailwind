import React from 'react';
import logo from '../../assets/logo.svg'
// import menu from '../../assets/menu.svg'

const Navbar = () => {
    return (
        <div className='md:mx-[7%]'>
            <div class="navbar">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu text-white menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
                        <li className='mx-7'>Home</li>
                        <li className='mx-7'>About Us</li>
                        <li className='mx-7'>Features</li>
                        <li className='mx-7'>Solution</li>
                        
                        </ul>
                    </div>
                    <img className='w-48' src={logo} alt="" />
                </div>
                <div class="navbar-end hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li className=' mx-7 font-normal text-gray-300'>Home</li>
                        <li className='font-normal text-gray-300 '>About Us</li>
                        <li className='font-normal text-gray-300 mx-7'>Features</li>
                        <li className='font-normal text-gray-300 '>Solution</li>
                        
                        
                    </ul>
                </div>
                
            </div>
            
        </div>
    );
};

export default Navbar;