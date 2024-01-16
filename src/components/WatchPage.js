import React from 'react'
import { useSearchParams } from 'react-router-dom'

const WatchPage = () => {
    const [searchParam]=useSearchParams();

  return (
    <div>
        <iframe
            width="560" 
            height="315" 
            src={"https://www.youtube.com/embed/"+searchParam.get("v")} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
        </iframe>
    </div>
  )
}

export default WatchPage