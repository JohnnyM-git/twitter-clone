import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const colRef = collection(db, "posts");
    onSnapshot(colRef, ({ docs }) => {
      const posts = docs.map((doc) => doc.data());
      setPosts(posts.sort((a, b) => b.timestamp - a.timestamp));
      console.log(posts);
    });
  }, []);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.id}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
            time={new Date(post.timestamp?.seconds * 1000).toLocaleTimeString()}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
