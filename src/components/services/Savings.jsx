import React from 'react'
import image from '../../assets/img.jpg'
const Savings = () => {
  const amount=300;
  return (
    <div className='w-full bg-gray-100 text-orange-500  py-6 px-3'>
      <div>
        <h1 className='text-3xl font-bold mb-4 text-center'>Savings</h1>
        <div className='flex flex-col md:flex-row gap-4'>
        <div className='shadow-2x'>
          <div className='text-xl '>
             <img 
              src={image} alt=''
              className='rounded-lg max-w-md w-full'/>
              <div className=' flex flex-col justify-center  items-center text-center mt-8'>
              <h1  className='text-orange-500 font-bold '>Savings</h1>
              <p className=' text-sm font-normal text-black'>{`The amount saved is ${amount}`}</p>
              </div>   
          </div>
        </div>
        <div>
          <h1>History of Savings</h1>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Savings
