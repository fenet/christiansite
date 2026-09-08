import React from 'react'
import './styles.css'

export default function Button({children, onClick, variant='primary', className='', ...rest}){
  return (
    <button className={`cf-btn ${variant} ${className}`} onClick={onClick} {...rest}>{children}</button>
  )
}
