import React from 'react'
import laura from '../img/laura.png'
import mail from '../img/mail.svg'
import linkedin from '../img/linkedin.svg'

const Info = () => {
  return (
    <div className='info__container'>
      <img className='hero' src={laura} alt="Laura photo" />
      <h1>Laura Smith</h1>
      <h3>Frontend Developer</h3>
      <h4>laurasmith.website</h4>
      <div className="button__container">
        <button className='email__btn'> <img className='email__icon' src={mail} alt="envelope" /> <a href="https://www.gmail.com" target="_blank" rel="noreferrer" >Email</a></button>
        <button className='linkedin__btn'> <img className='linkedin__icon' src={linkedin} alt="linkedin icon" /> <a href="https://www.linkedin.com" target="_blank" rel='noreferrer'>LinkedIn</a></button>
      </div>
    </div>
  )
}

export default Info