import React from 'react'

function TestimonyCard({ src, name, info, title, text, width }) {
  const isResponsive = window.innerWidth <= 400;
  let lebar = isResponsive? width?.mobile: width?.web

  return (
    <div className='testimony-card' style={{
      height:lebar
    }}>
      <div className='testy-cntn'>
        <div className='person-info'>
          <img className='photo' src={src} alt="..." />
          <div className='person-info-detail'>
            <p className='pid-name'>{name}</p>
            <p className='pid-inf'>{info}</p>
          </div>
        </div>

        <div className='testi-text'>
          <p className='tt-text'>{title}</p>
          <br/>
          <p className='tt-text'>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonyCard