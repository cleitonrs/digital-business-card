import React from 'react'
import Laura from '../img/Laura.png'
import mail from '../img/mail.svg'
import linkedin from '../img/linkedin.svg'

const Info = () => {
  return (
    <div className='info__container'>
      <img className='hero' src={Laura} alt="Laura photo" />
      <h1>Laura Smith</h1>
      <h3>Frontend Developer</h3>
      <h4>laurasmith.website</h4>
      <div className="button__container">
        <button className='email__btn'> <img className='email__icon' src={mail} alt="envelope" /> Email</button>
        <button className='linkedin__btn'> <img className='linkedin__icon' src={linkedin} alt="linkedin icon" /> LinkedIn</button>
      </div>
    </div>
  )
}

export default Info