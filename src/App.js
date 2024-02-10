import './App.css';
import Header from './component/Header'
import HeroSection from './component/HeroSection';
import Query from './component/Query';
import Fquestion from './component/Fquestion';
import Footer from './component/Footer';

function App() {
  return (
    <div className='flex flex-col sm:gap-10 md:gap-10 gap-20 items-start justify-start mx-auto w-auto sm:w-full md:w-full'>
      <Header />
      <HeroSection/>
      <Footer/>     
    </div>
  );
}

export default App;
``