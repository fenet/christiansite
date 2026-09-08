import React from 'react'
import './styles.css'

export default function VideoPlaceholder({poster, videoUrl, className=''}){
  return (
    <div className={`video-placeholder ${className}`} role="region" aria-label="Video placeholder">
      <div className="video-inner">
        <div className="video-box">
          <div className="video-icon">▶</div>
          <div className="video-text">Video (Platzhalter)</div>
        </div>
      </div>
    </div>
  )
}
