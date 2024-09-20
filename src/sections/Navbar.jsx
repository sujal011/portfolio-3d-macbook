import React from 'react'

const Navbar = () => {
  return (
  <div className='flex justify-around items-center m-5 gap-10'>
    <a href='/'>
    <p className='text-white font-code font-bold text-xl'>Sujal</p>
    </a>
    <ul className='flex flex-row gap-3'>
      <li className='text-white'>
        AboutMe
      </li>
      <li className='text-white'>
        Projects
      </li>
    </ul>
  </div>
    
  )
}

export default Navbar