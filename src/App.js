import './App.css';
import './assets/fonts/fonts.css'

import LandingPage from './components/LandingPage';
import SpecialSomeone from './components/SpecialSomeone';
import Caraousel from './components/Caraousel';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <LandingPage />
      <SpecialSomeone />
      <Caraousel />
      <Footer/>
    </>
  );
}

export default App;
