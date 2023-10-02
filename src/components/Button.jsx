import React from 'react'

const Button = ({id, label, onClick}) => {
  return (
  <button
     id={id}
     onClick={onClick}
     className='hover:bg-blue-600 focus:outline-none border-none w-8/12 h-10 bg-blue-500 rounded-md text-white font-semibold flex justify-center items-center text-lg ml-6 shadow-xl'
  >
    {label}
  </button>
  )
}

export default Button