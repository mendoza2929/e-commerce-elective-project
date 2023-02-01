import React from 'react'
import {ShoppingBagIcon} from '@heroicons/react/24/solid';

const Item = ({ifExist, id, color,shadow,title,text,img,btn,price }) => {
  return (
   <>

        <div className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${ifExist ? 'justify-items-start' : 'justify-items-center'} rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}>
            <div className={`grid items-center ${ifExist ? 'justify-items-start' : 'justify-items-center'} `}>
                <h1 className='text-slate-200 text-xl lg:text-lg md:text-base font-bold filter drop-shadow'>{title}</h1>
                <p className='text-slate-200 filter drop-shadow text-base md:text-sm font-normal items-center justify-items-center'>{text}</p>
                <div className='flex items-center justify-center w-28 my-2'>
                    <div className='flex items-center bg-white/100 px-1 rounded blur-effect-theme text-sm font-medium'><h1 className='text-black text-sm font-medium'>₱ {price}</h1></div>
                </div>
                <div className='flex items-center gap-3'>
                    <button type="button" className='bg-white 90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200'><ShoppingBagIcon className='icon-style text-slate-900'/></button>
                    <button type='button' className='bg-white 90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200 text-sm px-2 py-1'>{btn}</button>
                </div>
            </div>
            <div className={`flex items-center mt-2 ${ifExist ? 'absolute top-5 right-1' : 'justify-items-center'} `}>
                <img src={img} alt={`product${id}`} className={`h-36 w-50 transition-theme hover:-rotate-12 `}/>
            </div>
        </div>
   
   </>
  )
}

export default Item