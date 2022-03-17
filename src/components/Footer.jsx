import React from 'react'
import twitter from '../img/twitter.svg'
import facebook from '../img/facebook.svg'
import instagram from '../img/instagram.svg'
import github from '../img/github.svg'

const Footer = () => {
  return (
    <div className="footer__container">
      <img className='twitter__icon' src={twitter} alt="twitter icon" />
      <img src={facebook} alt="facebook icon" className="facebook__icon" />
      <img src={instagram} alt="instagram icon" className="instagram__icon" />
      <img src={github} alt="github icon" className="github__icon" />
    </div>
  )
}

export default Footer