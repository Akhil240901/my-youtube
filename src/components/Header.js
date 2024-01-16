import React from 'react';
import {useDispatch} from "react-redux"
import { toggleItem } from '../utils/appSlice';
const Header = () => {
   const dispatch=useDispatch()
   const toggleMenu=()=>{
       dispatch(toggleItem());
   }
  return (
    <div className='flex justify-between m-3 shadow-lg'>
       <div className='flex'>
          <img onClick={()=>toggleMenu()} className='cursor-pointer h-12 p-3 my-auto' alt='toggle' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOq0FzS1txbecrxVy-G-cKb3gCNX9eNQtfMQ&usqp=CAU' />
          <img className='h-20 p-2 my-auto' alt='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk1DZmq9aUhFguaSN0NerzaSt7ar_hNMe-Vw&usqp=CAU'/>
       </div>
       <div className='border-slate-300'>
          <input className='bg-gray-100 rounded-l-full p-2 px-6 my-2 ' type='text' placeholder='search'/>
          <button className='bg-gray-100 rounded-r-full p-2 my-2'>🔍</button>
       </div>
       <div>
           <img className='h-8' alt='user' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'/>
       </div>
    </div>
  )
}

export default Header