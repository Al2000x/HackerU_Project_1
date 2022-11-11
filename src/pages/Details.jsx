import React from 'react'
import'../css_work/About.css'
import ProfilePic from'../media/ProfilePic.png'

const Details = () => {
  return (
    <div className='mt-3 details' >
      <div className='infoDiv'>
        
      <div className='answerSide1'>
        <h1>This is Me!</h1>
        <div className='text-center picDiv'>
        <img src={ProfilePic} className="AlexPic " alt="AlexPic" />
        </div>
        </div>
      <div className='questionSide1 '></div>
      <div className='answerSide ' >About</div>
      <div className='questionSide'></div>
      </div>
      <div className='aboutSpacer'></div>
      <div className='infoDiv'>
      <div className='answerSide1'>About</div>
      <div className='questionSide1'></div>
      <div className='answerSide'>About</div>
      <div className='questionSide'></div>
      </div>
    </div>
  )
}

export default Details