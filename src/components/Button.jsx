import React from 'react'

const Button = ({label}) => {
  return (
      <button className='flex justify-center items-center gap-2 px-4 py-2 border font-sentient text-lg leading-none bg-button-green rounded text-white border-button-green'>
          {label}
   </button>
  )
}

export default Button