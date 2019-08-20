import React from 'react';
import './App.css';
import bckimg from './img/bck-header-img.jpg';

function App() {
  return (
    <div className="App">
        <div className='headerNav'>
            <div className='navItems'>Home</div>
            <div className='navItems'>About</div>
            <div className='navItems'>Contact</div>
        </div>
        <div className='headerImg'>
          <div><img src={bckimg} alt='backgorund header' />
            <h1>Ahmed Ali</h1>
          </div>
          

        </div>

    </div>
  );
}

export default App;
