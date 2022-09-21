import React from 'react';
import card from '../../assets/card.png'


const Card = () => {
    return (
        <div>
            <div className='md:px-[7%] py-10 px-5 bg-gradient-to-r from-gray-800'>
            <div className='md:flex justify-center items-center'>
                
                <div className='md:w-1/2'>
                    <h2 className='md:text-4xl text-3xl text-white font-bold'>Find a better card deal in few easy steps.</h2>
                    <p className='text-gray-400 mt-8'>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
                    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-[#9DEDF0] text-black hover:text-white mt-10">Get Started</button>
                </div>
                <div className='md:w-1/2'>
                    <img className='w-auto' src={card} alt="" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Card;