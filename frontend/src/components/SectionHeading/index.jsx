import React from 'react'
import './styles.css'

export default function SectionHeading({title, eyebrow, children, level = 2}){
  const Tag = `h${Math.min(Math.max(parseInt(level,10) || 2, 1), 6)}`
  return (
    <div className="section-heading">
      {eyebrow && <div className="eyebrow muted">{eyebrow}</div>}
      <Tag className="title">{title}</Tag>
      {children && <div className="lead">{children}</div>}
    </div>
  )
}
