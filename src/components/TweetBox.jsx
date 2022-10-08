import { Avatar, Button } from "@mui/material";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase";
import "./TweetBox.css";
import uniqid from 'uniqid';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    const post = {
      displayName: "MohnnyJ",
      username: "MOJO",
      verified: true,
      text: tweetMessage,
      avatar: "",
      image: tweetImage,
      id: uniqid(),
      timestamp: serverTimestamp(),
    };
    addDoc(collection(db, "posts"), post);
    setTweetImage("")
    setTweetMessage("")
  };

  return (
    <div className="tweet-box">
      <form action="">
        <div className="tweet-box__input">
          <Avatar />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          placeholder="Optional: Enter image URL"
          type="text"
          className="tweet-box__input-image"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweet-box__tweet-button"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
