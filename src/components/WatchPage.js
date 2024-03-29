import React from 'react'
import { useSearchParams } from 'react-router-dom'
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
    const [searchParam]=useSearchParams();

  return (
    <div className='flex flex-col w-full'>
       <div className='flex '>
          <div className='m-2'>
           <iframe
            width="800" 
            height="400" 
            src={"https://www.youtube.com/embed/"+searchParam.get("v")} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
           </iframe>
          </div>
          <div className='w-full '>
             <LiveChat/>
             
          </div>
       </div> 
        <CommentContainer/>
    </div>
  )
}

export default WatchPage