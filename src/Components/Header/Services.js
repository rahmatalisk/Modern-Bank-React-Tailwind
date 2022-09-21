import React from 'react';
import reward from '../../assets/Star.svg'
import secured from '../../assets/Shield.svg'
import balance from '../../assets/Send.svg'

const Services = () => {
    return (
        <div className='md:px-[7%] py-10 bg-gradient-to-r from-gray-800'>
            <div class="md:flex ">
                <div class="w-100 px-5 md:pr-32 my-12">
                    <h1 className='text-white md:text-5xl text-2xl my-5 font-semibold'>You do the business, we’ll handle the money.</h1>
                    <p className='text-gray-400 my-10'>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-[#9DEDF0] text-black hover:text-white">Get Started</button>

                </div>

                <div className='my-10 '>
                    <div class="w-100 mx-5  flex justify-center items-center hover:bg-[#35333D] rounded-lg p-2 my-2">
                        <div className='p-4 bg-[#00131A] rounded-full mx-5'>
                            <img className='w-16' src={reward} alt="" />
                        </div>
                        <div>
                            <h6 className='text-white'>Rewards</h6>
                            <p className='text-gray-400'>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
                        </div>
                    </div>
                    <div class="w-100 mx-5  flex justify-center items-center hover:bg-[#35333D] rounded-lg p-2 my-2">
                        <div className='p-4 bg-[#00131A] rounded-3xl mx-5'>
                            <img className='w-16' src={secured} alt="" />
                        </div>
                        <div>
                            <h6 className='text-white'>100% Secured</h6>
                            <p className='text-gray-400'>We take proactive steps make sure your information and transactions are secure.</p>
                        </div>
                    </div>
                    <div class="w-100 mx-5  flex justify-center items-center hover:bg-[#35333D] rounded-lg p-2 my-2">
                        <div className='p-4 bg-[#00131A] rounded-full mx-5'>
                            <img className='w-16' src={balance} alt="" />
                        </div>
                        <div>
                            <h6 className='text-white'>Balance Transfer</h6>
                            <p className='text-gray-400'>A balance transfer credit card can save you a lot of money in interest charges.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;