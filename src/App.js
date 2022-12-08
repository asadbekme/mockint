import React from 'react';
import Header from './components/header/Header'
import Directions from './components/directions/Directions'
import About from './components/about/About'
import Video from './components/video/Video'
import Specialists from './components/specialists/Specialists'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div className='app'>
      <Header />

      <main>
        <Directions />
        <About />
        <Video />
        <Specialists />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

export default App;