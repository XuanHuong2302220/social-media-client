import React from 'react'
import { InputProps } from '@/types'

const CustomInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, placeholder, bgColor, width, className, value, onChange, onBlur }: InputProps, ref) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className={`bg-${bgColor} w-${width} max-w-96 ${className} rounded-md px-2 placeholder-gray`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
      />
    );
  }
);

export default CustomInput