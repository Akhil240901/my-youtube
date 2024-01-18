import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isToggle=useSelector(store=>store.app.isToggle);
  if(!isToggle) return null;
  return (
    <div className='w-60 shadow-md'>
        <ul className='m-4 my-5'>
            
            <li className='mx-5'><Link to="/">Home</Link></li>
            <li className='m-5'>Short</li>
            <li className='m-5'>Subscribtions</li>
            <li className='m-5'>Your Channel</li>
            <li className='m-5'>History</li>
            <li className='m-5'>Your Videos</li>
            <li className='m-5'>Watch Later </li>
            <li className='m-5'>Downloads</li>
        </ul>
    </div>
  )
}

export default Sidebar