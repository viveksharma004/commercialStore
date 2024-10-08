import React, { useEffect } from 'react'
import {useSelector} from "react-redux"
import CartItem from "../components/CartItem"
import {Link} from "react-router-dom"

const Cart = ({props}) => {
  const {isDarkMode}=props;
  const cart= useSelector((state)=>state.cart.cartItems);
  // console.log("Logging the cart values")
  const mapOfItems= useSelector((state)=>state.cart.mapOfItems);
  // console.log(cart);

  const [cartPrice,setCartPrice] = React.useState(0);

  useEffect(()=>{
    setCartPrice(cart.reduce((acc,curr)=>acc+curr.price*mapOfItems.get(curr.id),0));
    // console.log(cartPrice);
  },[cart,mapOfItems,cartPrice]);
  return (
    <div>
  {
    cart.length > 0  ?

    (<div className="flex gap-16 max-w-6xl p-6 mx-auto flex-wrap lg:flex-nowrap">

      <div className="lg:w-[70%]">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} isDarkMode={isDarkMode}/>
          } )
        }
      </div>

      <div className="md:w-[30%] w-full flex flex-col gap-8 justify-between">

        <div className="mt-20">
          <p className="text-xl text-[#166534] uppercase font-[600]">Your Cart</p>
          <p className="text-5xl font-[600] text-[#15803d] uppercase mb-4">Summary</p>
          <p className={`font-[600] text-xl ${isDarkMode?"text-slate-50":"text-slate-700"} `}>
            Total Items: <span className="font-normal">{cart.length}</span>
          </p>
        </div>

        <div className="mb-20">
          <p className={`${isDarkMode?"text-slate-200":"text-slate-700"} text-xl font-[600] mb-5 `}>Total Amount:
            <span className={`font-bold ml-2 ${isDarkMode?"text-white":"text-black"}`}>${cartPrice.toFixed(2)}</span>
          </p>
          <button className="text-lg w-full py-2.5 rounded-lg font-bold text-white bg-[#15803d]
          border-2 border-[#15803d] hover:bg-white hover:text-[#15803d] transition-all duration-300 ease-in">
            CheckOut Now
          </button>
        </div>

      </div>

    </div>) :
    (<div className="w-screen h-[calc(100vh-80px)] flex flex-col gap-6 justify-center items-center">
      <h1 className="font-[600] text-xl">Your Cart is Empty !</h1>
      <Link to={"/"}>
        <button className="bg-[#16a34a] text-white text-md uppercase font-[600] py-3 px-10 rounded-md
        border-[#16a34a] border-2 hover:bg-white hover:text-[#16a34a] ease-in transition-all duration-300">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  )
}

export default Cart