import './App.css';
import BtnStart from './components/BtnStart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import View from './View';
import CookieGame from './CookieGame'

function App() {
  return (
    <Router>
      <div className='min-h-screen bg-cover bg-center flex justify-center items-center px-6 py-5'>
        <Routes>
          <Route path="/" element={
            <article className='w-full max-w-[600px] bg-white p-6 rounded-xl shadow-2xl flex flex-col justify-between h-[500px]'>
              <h2 className='text-center font-extrabold text-pretty text-orange-400'>!PRUEBA TU SUERTE¡</h2>
              <div className='flex justify-center my-4'>
                <iframe
                  src="https://tenor.com/embed/16408355"
                  width="100%"
                  height="300px"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <BtnStart />
            </article>
          } />
          <Route path="/view" element={<View />} />
          <Route path="/next" element={<CookieGame />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
