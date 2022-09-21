import React from 'react';
import qoutes from '../../assets/quotes.svg'
import people1 from '../../assets/people01.png'
import binance from '../../assets/binance.png'
import airbnb from '../../assets/airbnb.png'
import coinbase from '../../assets/coinbase.png'
import dropbox from '../../assets/dropbox.png'

const About = () => {
    return (
        <div className='py-20 md:px-[7%] px-5 bg-gradient-to-l from-gray-800'>
            <div>
                <div className='md:flex justify-center items-center'>
                    <h1 className="text-3xl md:text-4xl text-white max-w-sm">What people are saying about us</h1>
                    <p className='text-gray-400 max-w-sm'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                </div>
                <div className='md:flex py-20 md:gap-x-10'>
                    <div className='hover:bg-[#35333D] p-5 rounded-3xl'>
                        <img src={qoutes} alt="" />
                        <p className='text-gray-400 mt-8'>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                        <div className='flex  items-center mt-8'>
                            <img className='w-12 mr-4' src={people1} alt="" />
                            <div>
                                <h6 className="text-white">Herman Jensen</h6>
                                <p className='text-gray-400'>Founder & Leader</p>
                            </div>
                        </div>
                    </div>
                    <div className='hover:bg-[#35333D] p-5 rounded-3xl'>
                        <img src={qoutes} alt="" />
                        <p className='text-gray-400 mt-8'>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                        <div className='flex  items-center mt-8'>
                            <img className='w-12 mr-4' src={people1} alt="" />
                            <div>
                                <h6 className="text-white">Herman Jensen</h6>
                                <p className='text-gray-400'>Founder & Leader</p>
                            </div>
                        </div>
                    </div>
                    <div className='hover:bg-[#35333D] p-5 rounded-3xl'>
                        <img src={qoutes} alt="" />
                        <p className='text-gray-400 mt-8'>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                        <div className='flex  items-center mt-8'>
                            <img className='w-12 mr-4' src={people1} alt="" />
                            <div>
                                <h6 className="text-white">Herman Jensen</h6>
                                <p className='text-gray-400'>Founder & Leader</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='grid md:grid-cols-4 grid-cols-1 gap-y-8'>
                    <img className='md:w-48 px-2' src={airbnb} alt="" />
                    <img className='md:w-48  px-2' src={binance} alt="" />
                    <img className='md:w-48  px-2' src={coinbase} alt="" />
                    <img className='md:w-48 px-2' src={dropbox} alt="" />
                </div>
                <div  className='w-72 rounded-3xl md:mx-32 md:w-auto my-20 md:p-10 p-5 bg-[#35333D] md:flex justify-center items-center gap-x-6'>
                    <div>
                        <h2 className="text-3xl text-white font-bold">Let’s try our service now!</h2>
                        <p className="text-gray-400">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                    </div>
                    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-[#9DEDF0] text-black hover:text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;