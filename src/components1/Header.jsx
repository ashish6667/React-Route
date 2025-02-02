import React from 'react'

const Header = () => {
    return (
        <div className='py-7 px-10 bg-emerald-600 text-white flex item-center justify-between'>
            <h2 className='text-2xl'>Ashish</h2>
            <div className='flex gap-10'>
                  <a  className='text-xl underline' href='/'>Home</a>
                  <a className='text-xl underline' href='/about'>About</a>
                  <a  className='text-xl underline' href='/contact'>Contact</a>
                  <a className='text-xl underline' href='/product'>Product</a>
            </div>
        </div>
    )
}

export default Header