import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import {add,remove} from "../redux/slices/CartSlice"
import {toast} from "react-hot-toast";

const Product = ({productItem}) => {
  const cart=useSelector((state)=>state.cart);
  // console.log("logging cart");
  console.log(cart);

  const dispatch = useDispatch();

  const addToCart=()=>{
    dispatch(add(productItem));
    toast.success("Item added Successfully");
  }
  const removeFromCart=()=>{
    dispatch(remove(productItem.id));
    toast.error("Item Removed Successfully");
  }

  return (
    // we can use glass Effect using background-color:tranparent && backdrop-filter:blur(20px):
    // or background-color: rgba(x,y,z,.20) && backdrop-fitlter:blur(20px)
    // background-color: transparent;
    // backdrop-filter: blur(20px);
    // background-image: linear-gradient(
    //     120deg,
    //     rgba(255, 0, 255, 0.3),
    //     rgba(0, 0, 0, 0.2)
    // );

    <div className="flex flex-col items-center justify-between w-full gap-3 p-4 rounded-xl
    border-2 border-[#00095] shadow-lg hover:shadow-2xl hover:scale-[1.03]
    md:hover:scale-[1.05] transition ease-in">
        <p className="text-[#1d783e] font-semibold text-lg text-left truncate w-40 mt-1">{productItem.title}</p>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {productItem.description.split(" ").slice(0,10).join(" ") + "..."}
        </p>
        <div className="h-[180px]">
        <img src={productItem.image} alt="product" className="h-full w-full"></img>
        </div>

      <div className="flex justify-between items-center w-full mt-5">
        <p className="text-green-600 font-semibold">${`${productItem.price}`}</p>
        {
           cart.some((p) => p.id === productItem.id) ?
          (<button
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold
          text-[12px] p-1 px-3 uppercase
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
          onClick={removeFromCart}>
            Remove&nbsp;Item
          </button>) :
          (<button
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold
          text-[12px] p-1 px-3 uppercase
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
          onClick={addToCart}>
            Add&nbsp;to&nbsp;Cart
          </button>)
        }
        </div>
    </div>
  )
}

export default Product