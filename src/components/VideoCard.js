import React from 'react'

const VideoCard = ({info}) => {
    const {snippet,statistics}=info;
    const {channelTitle,thumbnails,title}=snippet;
  return (
    <div className='m-1 p-2 w-80 '>
        <img alt="thumbnails" src={thumbnails.medium.url}/>
        <ul>
            <li>{title} </li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount}</li>
        </ul>
    </div>
  )
}

export default VideoCard;