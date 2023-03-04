import React from 'react';
import { google,slack,atlassian, dropbox, shopify } from './import';      // this is important form the import.js
import './brand.css'

export const Brand = () => {
  // const linkedin = 'https://www.linkedin.com/in/aharoJ/';


  return (
    <div className='gpt3__brand section__padding'>
      {/* <div> <img src={google} alt='google'></img> </div>
      <div> <img src={slack} alt='slack'></img> </div>
      <div> <img src={atlassian} alt='atlassian'></img> </div>
      <div> <img src={dropbox} alt='dropbox'></img> </div> 
      <div> <img src={shopify} alt='shopify'></img> </div> */}


      <a href="mailto: haro.j.angel@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail" /></a>&nbsp;
      <a href="https://discord.gg/HDDQ6pUMHt"><img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" alt="Discord" /></a>&nbsp;
      <a href="https://twitter.com/aharo24"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter" /></a>&nbsp;
      <a href="https://www.linkedin.com/in/aharoJ/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Linkedin" /></a>&nbsp;
      <a href="https://leetcode.com/aharoJ/"><img src="https://img.shields.io/badge/-LeetCode-FFA116?style=for-the-badge&logo=LeetCode&logoColor=black" alt="LeetCode" /></a>&nbsp;


    </div>
    
  )
}

export default Brand