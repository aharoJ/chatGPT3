import React from 'react';
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

export const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'> aharoJ</h1>
        <h2 className='gradient__text'> GPT-3 OpenAI</h2>
        <p id='first-paragraph'>ChatGPT3 will be integrated into my website. My objective is to not only showcase the impressive final product, but also to provide access to the code, documentation, and notes used throughout the development process. </p>
        
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your email address:'/>
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='people'/>
          <p id='peoplevisits'>1,623+ have requested early access in last 7 days!</p>
        </div>

        <div className='gpt3__header-content__earlyacess  gradient__text'>
          <h3> Early acess closed until model is ready for mass production </h3>
        </div>
      
      </div>
      
      <div className='gpt3__header-image'>
        <img src={ai} alt='ai'/>
        </div>
    </div>
  )


}

export default Header