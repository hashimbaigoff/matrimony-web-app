import './App.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import MainComponent from './components/MainComponent';
import Home from './components/Home';
import Footer from './components/Footer';


function App() {


  return (
    <BrowserRouter>
      <>
        <MainComponent/>
        <Routes>
            <Route path='/' element={<Home/>} />
          </Routes>
        <Footer/>
      </>
    </BrowserRouter>
  );
}

export default App;
