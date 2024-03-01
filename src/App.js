import './App.css';
import './assets/fonts/fonts.css'

import LandingPage from './components/LandingPage';
import Caraousel from './components/Caraousel';
import SpecialSomeone from './components/SpecialSomeone';

function App() {
  return (
    <>
    <LandingPage/>
      <SpecialSomeone />
      <Caraousel />
    </>
  );
}

export default App;
