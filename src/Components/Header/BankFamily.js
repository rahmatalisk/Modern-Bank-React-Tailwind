import React from 'react';

const BankFamily = () => {
    return (
        <div className='mx-[7%] py-10'>
            <div className='md:flex justify-between items-center md:mx-10'>
                <div className='flex justify-between items-center w-100 gap-x-10 shadow-lg my-5'>
                    <p className='md:text-3xl text-2xl	text-white font-semibold'>3800+</p>
                    <p className='text-[#9DEDF0] md:text-2xl'>User Active</p>
                </div>
                <div className='flex justify-between items-center w-100 gap-x-10 md:border-x-2 md:px-8'>
                    <p className='text-2xl md:text-3xl	text-white font-semibold'>100+</p>
                    <p className='text-[#9DEDF0] md:text-2xl'>TRUSTED BY COMPANY</p>
                </div>
                <div className='flex justify-between items-center w-100 gap-x-10 shadow-lg my-5'>
                    <p className='md:text-3xl text-2xl	text-white font-semibold'>$5000+</p>
                    <p className='text-[#9DEDF0] md:text-2xl'>TRANSACTION</p>
                </div>
                
            </div>
        </div>
    );
};

export default BankFamily;