import React from 'react';
import { useContext } from 'react';
import Back from '@/components/backbutton';
import Cursor from '@/components/Cursor';
import Image from 'next/image';
import pic from '@/public/Meer.jpeg'

const CursorPage = () => {
  return (
    <div className='nocursor'>  
        <div>
          <div className="flex text-black bg-white p-6 justify-between dark:text-white dark:bg-black">
          <Back label="Cursor" classNames='backbuttoncursor'></Back>
          <p className="animate-charcter"> Cursor </p>
        </div>
        <div className='flex'>
          <Image
            className='meerfoto'
              src={pic}
              alt='foto'
              priority>
           </Image>
          </div>
        </div>
        <Cursor/>
    </div>
  );
};

export default CursorPage;







