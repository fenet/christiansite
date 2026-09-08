import React from 'react'
import Button from '../Button'
import './styles.css'

export default function CTASection({title, children, cta}){
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-inner">
          <div>
            <h2>{title}</h2>
            {children}
          </div>
          <div>{cta}</div>
        </div>
      </div>
    </section>
  )
}
