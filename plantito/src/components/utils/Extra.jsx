import React from 'react'

const Extra = ({img_src}) => {
  return (
    <>
        <div className='relative h-28 w-32 rounded-xl overflow-hidden lg:w-28 md:w-24 sm:w-16 lg:h-24 md:h-20 sm:h-14'>
            <img src={img_src} alt="img"  className='inset-0 flex h-full w-full object-cover absolute top-0 left-0 right-0 rounded-xl opacity-100 z-10 transition-opacity duration-500'/>
        </div>
    </>
  )
}

export default Extra