import React from 'react'
import './styles.css'

export default function Section({children, className=''}){
  return <section className={`cf-section ${className}`}>{children}</section>
}
