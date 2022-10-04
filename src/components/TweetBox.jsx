import { Avatar, Button } from '@mui/material'
import React from 'react'
import './TweetBox.css'

function TweetBox() {
  return (
    <div className='tweet-box'>
        <form action="">
            <div className="tweet-box__input">
            <Avatar />
            <input placeholder="What's happening" type="text" />
            </div>
            <input placeholder="Optional: Enter image URL" type="text" className='tweet-box__input-image' />
            <Button className='tweet-box__tweet-button'>Tweet</Button>
            
        </form>
    </div>
  )
}

export default TweetBox