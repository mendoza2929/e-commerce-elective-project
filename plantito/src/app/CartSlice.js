import {createSlice} from '@reduxjs/toolkit';
import  toast from 'react-hot-toast';

const initialState = {
        cartState: false,
        cartItems: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [], // supposed database
        // cartItems: [],
      
};


const CartSlice = createSlice({
    initialState,
    name: 'cart',
    reducers:{
        setOpenCart: (state,action) =>{ //Redux toolkit allows us to write "mutationg" logic in reducers. 
            state.cartState = action.payload.cartState // which detects changes in a "draft state" and producers a brand new state
        },
        setCloseCart : (state,action) =>{
            state.cartState = action.payload.cartState
        },
        setAddItemToCart: (state,action)  =>{   
            const itemIndex = state.cartItems.findIndex((item)=> item.id === action.payload.id); // mapping to action.payload.id if this action.payload.id which is new item then 
                                                                                                // the item.id which is existing item are mapping then we can simply filter data on the base of
                                                                                                // both IDs and can increase quantity to plus one
            if(itemIndex >=0){
                state.cartItems[itemIndex].cartQuantity += 1;

                toast.success(`Item QTY Increased`);
                  //if ID are mapping then add new array variable called quantity and increase to plus 1
            }else{
                const temp = {...action.payload,cartQuantity: 1}
                 state.cartItems.push(temp);

                 toast.success(`${action.payload.title} Added to Cart`)
            }

            localStorage.setItem('cart',JSON.stringify(state.cartItems));

        }
    } 
});


export const {setOpenCart, setCloseCart,setAddItemToCart} = CartSlice.actions;

export const selectCartState  = (state ) => state.cart.cartState
export const selectCartItems = (state) => state.cart.cartItems

export default CartSlice.reducer;

