import getRandomNumbers from "../utils/getRandomNumbers"
import quotes from '../data/phrases.json';
import photos from '../data/photos.json';

const BtnPhrase = ({setphraseSelected , setBgSelected}) => {
    const ChangePhrase = () =>{
     const indexRandom = getRandomNumbers(quotes.length) ;
     const phraseRandom = quotes[indexRandom];
     setphraseSelected(phraseRandom);
     setBgSelected(  photos[getRandomNumbers(photos.length)]);
     
    }
  return (
  <button className="hover:scale-125
   transition-transform cursor-pointer ml-auto block
    bg-indigo-700 py-2 px-4 rounded-xl text-white"
  onClick={ChangePhrase}>Abrir otra galleta</button>
  )
}

export default BtnPhrase
