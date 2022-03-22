import React from 'react'
import twitter from '../img/twitter.svg'
import facebook from '../img/facebook.svg'
import instagram from '../img/instagram.svg'
import github from '../img/github.svg'

const Footer = () => {
  return (
    <div className="footer__container">
      <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><img className='twitter__icon' src={twitter} alt="twitter icon" /></a>
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><img src={facebook} alt="facebook icon" className="facebook__icon" /></a>
      <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><img src={instagram} alt="instagram icon" className="instagram__icon" /></a>
      <a href="https://www.github.com" target="_blank" rel="noreferrer"><img src={github} alt="github icon" className="github__icon" /></a>
    </div>
  )
}

export default Footer