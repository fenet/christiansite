import React from 'react'
import './styles.css'

export default function Card({children, className=''}){
  return (
    <article className={`cf-card ${className}`}>{children}</article>
  )
}
