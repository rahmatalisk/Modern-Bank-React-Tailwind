import React from 'react';
import banner from '../../assets/robot.png'
import discount from '../../assets/Discount.svg'
import arrow from '../../assets/arrow-up.svg'

const Headebanner = () => {
    return (
        <div>
            <div class="hero min-h-screen text-white bg-gradient-to-l from-gray-800">
                <div class="md:px-0 px-5 md:flex justify-center items-center flex-col lg:flex-row-reverse">
                    <div className=" rounded-lg  md:w-3/5">
                        <img className='w-100 py-10' src={banner} alt='' />
                    </div>
                    <div className=' md:ml-[115px] relative'><button class="btn  no-animation font-light bg-black border-0 my-5"><img src={discount} className="mr-3 hidden md:block" alt="" /> 20% DISCOUNT FOR 1 MONTH ACCOUNT</button>
                        <h1 class=" md:text-7xl text-3xl font-bold">The Next <br /><span className='text-cyan-400'>Generation</span> <br />Payment Method.</h1>
                        <p class="py-6 text-gray-400">Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
                            We examine annual percentage rates, annual fees.</p>
                        <button class="md:w-36 w-20 h-20 md:h-36 shadow-lg btn-outline  border-cyan-500	text-cyan-400 border-2 md:border-8 btn-circle absolute top-[80px] md:top-[50px] md:right-[160px] right-[10px]">
                            Get <img className='inline' src={arrow} alt="" /> <br /> Started
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Headebanner;