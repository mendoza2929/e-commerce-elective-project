import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { selectCartItems, selectCartState, setCloseCart } from '../app/CartSlice.js'
import CartCount from './cart/CartCount'
import CartEmpty from './cart/CartEmpty'
import CartItem from './cart/CartItem'
// import Item from './utils/Item.jsx'

const Cart = () => {

  const dispatch = useDispatch();

  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);

  // console.log(cartItems)

  const onCartToggle = () => {
      dispatch(setCloseCart({
          cartState: false
      }))
  };



  return (
    <>
        <div className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[250] ${ifCartState ?  'opacity-100 visible translate-x-0':'opacity-0 invisible translate-x-8'}`}>
            <div className={`bg-white h-screen max-w-xl w-full absolute right-0`}>
                <CartCount onCartToggle={onCartToggle}/>

                {cartItems?.length === 0 ? <CartEmpty/> : <div>
                  <div className='flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll '>
                    {cartItems?.map((item,i)=>(
                      <CartItem key={i} item={item}/>
                    ))}
                  </div>
                </div>}
            </div>
        </div>
    </>
  )
}

export default Cart