import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage';
import { generateName } from './Helper'
import  {useDispatch, useSelector} from "react-redux"
import { addMessage } from '../utils/chatSlice';
import chatSlice from '../utils/chatSlice';
import store from '../utils/store';

const LiveChat = () => {
  const dispatch=useDispatch();
  const chatMessage=useSelector((store)=>store.chat.message);

  const [liveMessage,setLiveMessage]=useState("");
  useEffect(()=>{
      
   const t= setInterval(()=>{
        dispatch(addMessage({
          name:generateName(),
          message:"Welcome back back",
        })
      );
    },2000)

    return ()=>clearInterval(t);
  },[]);
  return (
    <>
    <div className='h-[400px] w-full border border-black bg-gray-100 rounded-lg m-2 overflow-y-scroll flex flex-col-reverse'>
       {
         chatMessage.map((chat,index)=><ChatMessage key={index} name={chat.name} message={chat.message}/>)
       } 
    </div>
    <form className='w-full border m-2 rounded-lg'
          onSubmit={(e)=>{
            e.preventDefault();
            dispatch(addMessage({
              name:"Akhil Bisen",
              message:liveMessage,
            }));
            setLiveMessage("");
          }}
         >
        <input value={liveMessage} 
               type='text' 
               className=' m-2 p-2 border w-80 bg-gray-100'
              onChange={(e)=>setLiveMessage(e.target.value)}
        />
        <button className='m-2 p-2 border bg-blue-300'>send</button>
    </form>
    </>
  )
}

export default LiveChat