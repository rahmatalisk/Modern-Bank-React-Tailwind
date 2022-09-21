import React from 'react';
import bill from '../../assets/bill.png'
import google from '../../assets/google.svg' 
import apple from '../../assets/apple.svg' 

const BillInvoice = () => {
    return (
        <div className='md:px-[7%] py-10 px-5 bg-gradient-to-l from-gray-800'>
            <div className='md:flex justify-center items-center'>
                <div className='md:w-1/2'>
                    <img className='w-auto' src={bill} alt="" />
                </div>
                <div className='md:w-1/2'>
                    <h2 className='md:text-4xl text-3xl text-white font-bold'>Easily control your billing & invoicing.</h2>
                    <p className='text-gray-400 mt-8'>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
                    <div className='md:flex'>
                        <img className='md:mr-16 my-8' src={apple} alt="" />
                        <img src={google} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BillInvoice;