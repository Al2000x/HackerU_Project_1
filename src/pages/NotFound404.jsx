import React from 'react'
import Error from '../css_work/Error.css'
const NotFound404 = () => {
  return (
        <div className='error-section'> 
        <div className='error-wrapper'> 
          <div className='notFoundDiv '>404</div>
          <a href="/">
          <div className='back-to-safty' >back to safty</div>      
          </a>          

        </div>
        </div>
  )
}

export default NotFound404