import React, { useEffect, useState } from 'react'
import { API_URL } from '../utils/constant';
import {Link, NavLink} from "react-router-dom"
import VideoCard from './VideoCard';

const Videocontainer = () => {
  const [videos,setVideos]=useState([]);
  useEffect(()=>{
     apiCall();
  },[]);
  const apiCall=async()=>{
    const data=await fetch(API_URL);
    const jsonData=await data.json();
    setVideos(jsonData.items)
    //console.log(jsonData)
}
  return (
    <div className='flex flex-wrap'>
    {
      videos.map((video)=>(
       <Link key={video.id} to={"/watch?v="+ video.id}> 
          <VideoCard  info={video}/>
       </Link>
      )
    )}
         
    </div>
  )
}

export default Videocontainer