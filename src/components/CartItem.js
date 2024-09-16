import React from 'react'
import { MdDeleteSweep} from "react-icons/md";
import {toast} from "react-hot-toast"
import {useDispatch,useSelector} from "react-redux"
import {remove,increaseQuantity,decreaseQuantity} from "../redux/slices/CartSlice"
import { FaPlus ,FaMinus } from "react-icons/fa6";

const CartItem = ({item,isDarkMode}) => {

    const dispatch = useDispatch();
     const removeFromCart=()=>{
      dispatch(remove(item.id));
      toast.error("Removed From Cart");
     }
     const increaseQuantityHandler=()=>{
        dispatch(increaseQuantity(item.id));
     }
     const decreaseQuantityHandler=()=>{
        dispatch(decreaseQuantity(item.id));
     }
    //  console.log("Logging from the cartItem")
    const mapOfItems=useSelector((state)=>state.cart.mapOfItems);
    const [quantity,setQuantity] = React.useState(0);
    React.useEffect(()=>{
        setQuantity(mapOfItems.get(item.id))
    },[mapOfItems,item.id]);
    // console.log(quantity);
  return (
<div className="p-4 border-b-2 last:border-none border-slate-700">

    <div className="flex justify-between py-3.5 px-2.5 gap-14 flex-col md:flex-row">

        <div className="md:w-[30%] w-full flex justify-center items-center">
            <img src={item.image} alt="" className="w-[40%] md:w-[50%] lg:w-full"/>
        </div>
        <div className="md:w-[70%] w-full flex flex-col gap-5">
                <h1 className={`text-xl font-[600] ${isDarkMode?"text-slate-50":"text-slate-700"}`}>{item.title}</h1>
                <h1 className={`${isDarkMode?"text-slate-300":"text-slate-700"}`}>{
                item.description.split(" ").slice(0,15).join(" ") + "..."}
                </h1>
                <div className="flex justify-between">
                <p className="font-bold text-[#16a34a] text-lg">${item.price}</p>
                    <div
                    onClick={removeFromCart}
                    className="w-10 h-10 rounded-full bg-red-200 flex justify-center items-center
                    hover:bg-red-400 group transition-all">
                        <MdDeleteSweep fontSize={25} className="group-hover:text-white text-red-800 transition-all"/>
                    </div>
                </div>
                <div className="w-[25%]  rounded-lg flex flex-row justify-end border-2 border-[#15803d] items-center text-center ">
                <button onClick={decreaseQuantityHandler} className={`w-full py-2.5  rounded-l-md font-bold hover:bg-[#15803d] text-[#15803d]
                 border-r-2 border-[#15803d] bg-white hover:text-white transition-all duration-300 ease-in flex justify-center items-center`}><FaMinus/></button>
                <span className={`font-bold text-[#16a34a]  ${isDarkMode?" bg-white":""} text-lg w-[60%] h-full pt-[4px]`}>{  ` ${quantity} ` }</span>
                <button onClick={increaseQuantityHandler} className="w-full py-2.5  font-bold rounded-r-md hover:bg-[#15803d] text-[#15803d]
                 border-l-2 border-[#15803d] bg-white hover:text-white transition-all duration-300 ease-in text-center flex justify-center items-center ">< FaPlus/></button>
                </div>
        </div>
    </div>
</div>
  )
}

export default CartItem