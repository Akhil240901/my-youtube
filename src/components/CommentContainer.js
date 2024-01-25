import React from 'react'
import CommentList from './CommentList'
import Comment from './Comment'

const commentData=[
    {
        name:"Akhil Bisen",
        text:"Nice to see such content that provide overview of Humanity",
        replies:[
            {
              name:"Akhil Bisen",
              text:"Nice to see such content that provide overview of Humanity",
              replies:[
                {
                name:"Akhil Bisen",
                text:"Nice to see such content that provide overview of Humanity",
                }]
            },
            {
                name:"Akhil Bisen",
                text:"Nice to see such content that provide overview of Humanity",
                replies:[
                  {
                    name:"Akhil Bisen",
                    text:"Nice to see such content that provide overview of Humanity",
                    replies:[
                       {
                        name:"Akhil Bisen",
                        text:"Nice to see such content that provide overview of Humanity",
                        replies:[]
                       },
                       {
                        name:"Akhil Bisen",
                        text:"Nice to see such content that provide overview of Humanity",
                        replies:[
                        {
                            name:"Akhil Bisen",
                            text:"Nice to see such content that provide overview of Humanity",
                            replies:[],
                        }]
                       },

                    ]
                    
                  }]
              }
        ]
    },
    {
        name:"Akhil Bisen",
        text:"Nice to see such content that provide overview of Humanity",
        replies:[
            {
              name:"Akhil Bisen",
              text:"Nice to see such content that provide overview of Humanity",
            }
        ]
    },
    {
        name:"Akhil Bisen",
        text:"Nice to see such content that provide overview of Humanity",
        replies:[
            {
              name:"Akhil Bisen",
              text:"Nice to see such content that provide overview of Humanity",
            }
        ]
    },
    {
        name:"Akhil Bisen",
        text:"Nice to see such content that provide overview of Humanity",
        replies:[
            {
              name:"Akhil Bisen",
              text:"Nice to see such content that provide overview of Humanity",
            }
        ]
    },
    {
        name:"Akhil Bisen",
        text:"Nice to see such content that provide overview of Humanity",
        replies:[
            {
              name:"Akhil Bisen",
              text:"Nice to see such content that provide overview of Humanity",
            }
        ]
    },
    {
        name:"Akhil Bisen",
        text:"Nice to see such content that provide overview of Humanity",
        replies:[
            {
              name:"Akhil Bisen",
              text:"Nice to see such content that provide overview of Humanity",
            }
        ]
    }
]

const CommentContainer = () => {
  return (
    <div>
       <div className='font-bold m-2'>Comments:</div>
        <CommentList comments={commentData}/>
    </div>
  )
}

export default CommentContainer