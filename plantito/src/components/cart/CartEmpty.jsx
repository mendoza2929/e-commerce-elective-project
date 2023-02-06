import React from 'react'
import {ArrowLeftIcon} from '@heroicons/react/24/solid';
import empty from '../../assets/empty.png'
const CartEmpty = ({onCartToggle}) => {
  return (
    <>
        <div className='bg-white flex items-center justify-center flex-col h-screen px-11 text-center gap-7'>
            <img src={empty} alt=""className='w-40 lg:w-36 sm:w-28 h-auto object-fill transition-all duration-300 hover:scale-110' />
            <h2 className='font-semibold text-slate-900'>Your Cart is Empty</h2>
            <button type='button' className='buttom-theme bg-gradient-to-b from-green-400 to-green-500 shadow-lg shadow-green-400 flex items-center justify-center text-slate-900 py-2 gap-3 text-sm px-5 font-semibold active:scale-110' onClick={onCartToggle}>
                <ArrowLeftIcon className='w-5 h-5 text-slate-900'/>
                <span className=''>Back To Plantito Store</span>
            </button>
        </div>
    </>
  )
}

export default CartEmpty