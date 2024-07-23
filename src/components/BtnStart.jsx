import React from 'react';
import { useNavigate } from 'react-router-dom';

const BtnStart = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/view');
  };

  return (
    <button className='bg-indigo-950/75 p-5 rounded-lg text-white hover:scale-125 mt-auto animate-bounce' onClick={handleClick}>
      ¡Pruebalo!
    </button>
  );
}

export default BtnStart;
