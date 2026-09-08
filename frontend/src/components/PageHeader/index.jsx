import React from 'react'
import './styles.css'

export default function PageHeader({title, intro}){
  return (
    <header className="page-header">
      <div className="container">
        <h1>{title}</h1>
        {intro && <p className="intro">{intro}</p>}
      </div>
    </header>
  )
}
