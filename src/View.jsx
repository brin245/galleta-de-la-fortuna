import React from 'react';
import { useNavigate } from 'react-router-dom';

const View = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate('/next');
  }, 3000)

  return (
    <div className='min-h-screen bg-cover bg-center flex justify-center items-center px-6 py-5'>
      <article className='w-full max-w-[600px] bg-white p-6 rounded-xl shadow-2xl flex flex-col justify-center h-[500px]'>
        <h2 className='text-center font-extrabold text-pretty text-orange-400 mb-4'>Bienvenido a la nueva vista</h2>
        <div className='flex justify-center my-4'>
          <iframe
            src="https://tenor.com/embed/26758035"
            width="400px"
            height="400px"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </article>
    </div>
  );
}

export default View;
