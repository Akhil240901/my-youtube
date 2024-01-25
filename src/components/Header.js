import React, { useEffect, useState } from 'react';
import {useDispatch} from "react-redux"
import { toggleItem } from '../utils/appSlice';
import { YOUTUBE_SUGGESTION_API } from '../utils/constant';
const Header = () => {
   const dispatch=useDispatch()
   const toggleMenu=()=>{
       dispatch(toggleItem());
   }
   
   //functionalities for search
   const [searchQuery,setSearchQuery]=useState("");
   const [suggestions,setSuggestions]=useState([]);
   const [showSuggestion,setShowSuggestion]=useState(false);
   useEffect(()=>{
     const timer = setTimeout(()=>getSuggestionApiData(),200);

      return () => {
         clearTimeout(timer);
      };
   },[searchQuery]);

   const getSuggestionApiData= async ()=>{
        console.log("Api-"+searchQuery)
        const data=await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
        const jsonData=await data.json();
        setSuggestions(jsonData[1]);
   }
  return (
    <div className='flex justify-between m-3 shadow-lg items-center '>
       <div className='flex items-center'>
          <img onClick={()=>toggleMenu()} className=' cursor-pointer h-10 w-10 p-2 ' alt='toggle' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOq0FzS1txbecrxVy-G-cKb3gCNX9eNQtfMQ&usqp=CAU' />
          <img className='h-20 w-20 p-2 ' alt='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk1DZmq9aUhFguaSN0NerzaSt7ar_hNMe-Vw&usqp=CAU'/>
       </div>

       <div>
         <div>
          <input type="text"
                 value={searchQuery} 
                 onChange={(e)=>setSearchQuery(e.target.value)} 
                 onFocus={()=>setShowSuggestion(true)}
                 onBlur={()=>setShowSuggestion(false)}
                 className='bg-gray-100 border border-gray-100 w-96 rounded-l-full p-2 px-6 my-2 ' 
                 placeholder='search'/>
          <button className='bg-gray-100 rounded-r-full p-2 my-2 border-s-violet-700'>🔍</button>
         </div> 

        {showSuggestion && (<div className='fixed bg-white w-96 shadow-lg rounded-lg p-4'>
           <ul>{
                suggestions?.map((s)=><li key={s} className='p-2 hover:bg-gray-100'>{s}</li>)
               }
           </ul>
         </div>)}
       </div>

       <div>
           <img className='h-8 m-4' alt='user' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'/>
       </div>
    </div>
  )
}

export default Header