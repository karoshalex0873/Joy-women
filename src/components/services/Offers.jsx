import React, { useState } from 'react';
import image from "../../assets/img.jpg"
import { FaArrowCircleUp,FaArrowDown,FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa6';


const Offers = () => {
const [showlink, setShowlink] = useState(false)
  return (
    <div>
      <div className="bg-gray-100 w-full py-6 px-4">
        <div className=''>
          <h1 className="text-2xl font-semibold text-orange-500 ">Top Events in the Group</h1>
           {/* other projects going on */}
           <div className="flex justify-start gap-4 flex-wrap">
            {/* Top app  */}
            <div className=" min-w-72">
              <h1>Chanjo Imunization App</h1> 
              <div className='shadow-xl py-2 text-center flex flex-col w-fit px-4'>
                <img src={image} alt="Chanjo Imunization app"
                className=' rounded-lg w-full max-w-md'
                 />
                <p
                className='text-md font-medium text-start px-5 py-3'>Helps one to remind women on the imunazition date <br />
                Dont hesitate in You have not registerd for the services</p>
                <button
                onClick={() => setShowlink(!showlink)}
                className="text-xl text-orange-500 mt-4 flex items-center"
                 >
                {showlink ? <FaArrowCircleUp /> : <FaArrowRight />}
                <span className="">{showlink ? 'Hide History' : <button className='bg-orange-500 py-2 px-1 text-white text-sm rounded-md'>Leran More</button>}</span>
               </button>
              </div>
            </div>

            {/* second demanding app */}
            <div className='min-w-72'>
              <h1>Chanjo Imunization App</h1> 
              <div className='shadow-xl py-2 text-center flex flex-col w-fit px-4'>
                <img src={image} alt="Chanjo Imunization app"
                className=' rounded-lg w-full max-w-md'
                 />
                <p
                className='text-md font-medium text-start px-5 py-3'>Helps one to remind women on the imunazition date <br />
                Dont hesitate in You have not registerd for the services</p>
                <button
                onClick={() => setShowlink(!showlink)}
                className="text-xl text-orange-500 mt-4 flex items-center"
                 >
                {showlink ? <FaArrowCircleUp /> : <FaArrowRight />}
                <span className="">{showlink ? 'Hide History' : <button className='bg-orange-500 py-2 px-1 text-white text-sm rounded-md'>Leran More</button>}</span>
               </button>
              </div>
            </div>
            {/* thrid demanding app */}
            <div className='min-w-72'>
              <h1>Chanjo Imunization App</h1> 
              <div className='shadow-xl py-2 text-center flex flex-col w-fit px-4'>
                <img src={image} alt="Chanjo Imunization app"
                className=' rounded-lg w-full max-w-md'
                 />
                <p
                className='text-md font-medium text-start px-5 py-3'>Helps one to remind women on the imunazition date <br />
                Dont hesitate in You have not registerd for the services</p>
                <button
                onClick={() => setShowlink(!showlink)}
                className="text-xl text-orange-500 mt-4 flex items-center"
                 >
                {showlink ? <FaArrowCircleUp /> : <FaArrowRight />}
                <span className="">{showlink ? 'Hide History' : <button className='bg-orange-500 py-2 px-1 text-white text-sm rounded-md'>Leran More</button>}</span>
               </button>
              </div>
            </div>
           </div>

          
        </div>
      </div>
    </div>
  );
};

export default Offers;
