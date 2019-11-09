import React from 'react';
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
      <section id='aboutSection'>
        <h2>About Me</h2>
        <p>
          Technology is amazing it enables us to do more things, faster and
          accurate.
        </p>
        <p>
          I wanted to pursue a career in computing since I was 12. I used to buy
          magazines that offered free tutorial usually in form of DVD then use
          to try on what I have learned. I continued to this path until 2010
          when I got my Higher Diploma in Computer Science.
        </p>
        <p>
          Then I started my own business starting the opening of an Internet
          Cafe where I used to provide IT services such as repairing computers,
          selling them after I bought then in Bulks. I also provided computers
          repair service to other internet cafe's.
        </p>
        <p>
          After many years of trying different types of business than failing I
          finally decided to stick to my childhood dream which I was good and
          still good at anyway.
        </p>
        <p>
          I am a quick learner and I am open for training. I can start as a
          volunteer if you are looking for someone to hire who will make a
          sizeable contribution to you are organization look no further.
        </p>
        <p>Thank you for reading, I will look forward to hearing from you.</p>
      </section>
      <skills id='skillSection'>
        <h2> SKILLS </h2>

        <div className='flex-item'>HTML</div>
        <div className='flex-item'>CSS</div>
        <div className='flex-item'>SASS</div>
        <div className='flex-item'>JavaScript</div>
        <div className='flex-item'>React</div>
        <div className='flex-item'>MongoDB</div>
        <div className='flex-item'>GitHub</div>
      </skills>
    </div>
  );
}

export default App;
