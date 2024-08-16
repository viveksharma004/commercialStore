import {createSlice} from "@reduxjs/toolkit";
const initialState={
    cartItems:[],
    mapOfItems:new Map(),
}
;
export const CartSlice=createSlice({
    name: "cart",
    initialState,
    reducers:{
        add:(state,action)=>{
            state.mapOfItems.set(action.payload.id,1);
            state.cartItems.push(action.payload);
            return state;
        },
        remove:(state,action )=>{
            state.mapOfItems.delete(action.payload);
            state.cartItems=state.cartItems.filter((item)=>item.id!==action.payload);
            return state;
        },
        increaseQuantity:(state,action)=>{
            // if(state.mapOfItems.has(action.payload.id)===true){
                const val=state.mapOfItems.get(action.payload);
                state.mapOfItems.set(action.payload,val+1);
            // }
            return state;
        },
        decreaseQuantity:(state,action)=>{
            let val=state.mapOfItems.get(action.payload);
            if(val-1===0){
                state.mapOfItems.delete(action.payload);
                state.cartItems=state.cartItems.filter((item)=>item.id!==action.payload);
            }
            else{
                state.mapOfItems.set(action.payload,val-1);
            }
            return state;
        }
    }
});

export const {add,remove,increaseQuantity,decreaseQuantity}=CartSlice.actions;
export default CartSlice.reducer;
