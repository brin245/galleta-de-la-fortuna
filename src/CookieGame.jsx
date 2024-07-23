import { useState } from 'react';
import './App.css';
import quotes from './data/phrases.json'
import getRandomNumbers from './utils/getRandomNumbers';
import Phrase from './components/Phrase';
import BtnPhrase from './components/BtnPhrase';
import photos from './data/photos.json'

function App() {
  const indexRandom = getRandomNumbers(quotes.length);
  const [phraseSelected, setphraseSelected] = useState(quotes[indexRandom]);
    const [bgSelected, setBgSelected ] = useState(
      photos[getRandomNumbers(photos.length)]);
 
    const objStyles = {
      backgroundImage: `url(/images/fondo${bgSelected}.jpg)`,
    };

  return (
  <div style={objStyles} className='h-screen 
  bg-cover bg-center flex justify-center items-center px-4'>
    <h1 className='absolute top-20 text-3xl
     uppercase font-black text-center 
     drop-shadow-lg stroke '>Galleta de la fortuna</h1>
    <article className='max-w-[400px] bg-white p-6 
    rounded-xl shadow-2xl'>
    <Phrase className="text-3xl" phraseSelected={phraseSelected}/>
    <BtnPhrase setphraseSelected={setphraseSelected}
    setBgSelected={setBgSelected}/>
    </article> 
    <footer className='absolute bottom-20 bg-indigo-950/75 p-5
    rounded-lg text-white hover:scale-125'>
      <p>{phraseSelected.author}</p>
    </footer>
  </div>
 );
}

export default App
