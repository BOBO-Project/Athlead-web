import React from 'react'

function BlogCard({src, title, text}) {
  return (
    <div className='blog-card'>
      <div className='bc-img-wrapper'>
        <img src={src} alt="..." />
      </div>
      <div className='bc-ctn'>
        <p className='bcc-title'>{title}</p>
        <p className='bcc-text'>{text}</p>
      </div>
    </div>
  )
}

export default BlogCard