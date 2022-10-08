import { collection, doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";

function Feed() {
  const [posts, setPosts] = useState([]);

  //   onSnapshot(colRef, ({ docs }) => {
  //     const emails = docs.map((elem) => ({ ...elem.data(), id: elem.id }));
  //     setEmails(emails.sort((a, b) => b.timestamp - a.timestamp));
  //   });

  const colRef = collection(db, "posts");

  useEffect(() => {
    onSnapshot(colRef, ({ docs }) => {
        const posts = docs.map((doc) => doc.data());
      setPosts(posts);
        console.log(posts);
    });
  }, []);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      {posts.map((post) => (
        <Post
          key={post.id}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Feed;
