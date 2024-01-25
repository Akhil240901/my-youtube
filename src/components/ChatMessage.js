import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='m-2 flex items-center border border-black'>
       <div>
        <img className='h-8 w-8' alt='user' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'/>
       </div>
       <div>
        <span className='font-bold p-2'>{name}</span>
        <span>{message}</span>
       </div>
    </div>
  )
}

export default ChatMessage;