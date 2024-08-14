import React from 'react';
import {useState,useEffect} from "react";
import Spinner from "../../src/components/Spinner"
import Product from '../components/Product'

const Home = () => {
    const [data,setData]= useState([]);
    const [loading,setLoading]= useState(false);
  async function fetchData(){
    setLoading(true);
    try{
        const res = await fetch(`https://fakestoreapi.com/products`);
        const output=await res.json();
        // console.log(output);
        setData(output);
    }
    catch(e){
        console.log(e);
        setData([]);
    }
    setLoading(false);
  }
  useEffect(()=>{
    fetchData();
  },[]);
  // console.log("Loading data after all actions performed");
  // console.log(data);
  return (
    <div>
        {
        loading ? <Spinner />  :
        data.length > 0 ?
        (<div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5
        gap-y-8 max-w-6xl p-6 mx-auto my-7 min-h-[80vh]">
          {
            data.map( (productItem) => (
            <Product key = {productItem.id} productItem={productItem}/>
          ) )
          }
        </div>) :
        <div className="w-screen h-screen flex justify-center items-center">
          <p className="font-bold">No Data Found</p>
        </div>
      }
    </div>
  )
}

export default Home