import React from 'react';
import About from './components/About';
import Skills from './components/Skills';
import './App.css';
import bckimg from './img/bck-header-img.jpg';

function App() {
  return (
    <div className='App'>
      <header>
        <div className='nav-container'>
          <nav class='nav-checkbox'>
            <a href='#t' className='logo'>
              <h1>(DT)/></h1>
            </a>
            <input id='tab-nav' type='checkbox' class='tab-nav' name='tabs' />
            <label for='tab-nav' class='tab-nav-label'>
              <span>|||</span>
            </label>
            <ul class='tab-content'>
              <li>
                <a href='#h'>Home</a>
              </li>
              <li>
                <a href='#a'>About</a>
              </li>
              <li>
                <a href='#c'>Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section>
        <div className='headerImg'>
          <img src={bckimg} alt='backgorund header' />
          <h1>Dr Toil</h1>
        </div>
      </section>
      <About />
      <Skills />
      <projects id='projectSection'>
        <h2>PROJECTS</h2>
      </projects>
    </div>
  );
}

export default App;
