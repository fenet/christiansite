import React from 'react'
import './styles.css'

export default function Link({children, href, className=''}){
  return <a className={`cf-link ${className}`} href={href}>{children}</a>
}
