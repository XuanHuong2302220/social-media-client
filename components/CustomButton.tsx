'use client'
import React from 'react'
import { ButtonProps } from '@/types'

const CustomButton = ({width, textColor, bgColor, IconComponent, className, onClick, text, disabled, type}:ButtonProps) => {
  return (
    <button 
      onClick={onClick} 
      type={type} 
      className={`btn btn-${bgColor} w-${width}
       py-3 rounded-3xl flex items-center justify-center gap-2 text-${textColor} ${className}`}
      disabled={disabled}
    >
      {text}
      {IconComponent && <IconComponent />}
    </button>
  )
}

export default CustomButton