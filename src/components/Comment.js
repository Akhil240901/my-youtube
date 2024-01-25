import React from 'react'

const Comment = ({data}) => {
    const {name,text}=data;
  return (
    <div className='flex w-38 m-4 bg-gray-100'>
       <div>
       <img className='h-8 w-8 m-2' alt='user' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'/>
      </div>
      <div>
         <p className='font-bold'>{name}</p>
         <p>{text}</p>
      </div>   
        
    </div>
  )
}

export default Comment