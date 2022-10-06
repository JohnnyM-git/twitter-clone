import {
  ChatBubbleOutline,
  FavoriteBorderOutlined,
  Publish,
  Repeat,
  VerifiedUser,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__header-text">
            <h3>
              Johnny Martens
              <span className="post__header-special">
                @Johnny__Martens
                <VerifiedUser className="post__badge" />
              </span>
            </h3>
          </div>
          <div className="post__header-description">
            <p>Dummy Text</p>
          </div>
          <img
            src="https://media.giphy.com/media/3o6Ei0fWOw1iQ79d0A/giphy.gif"
            alt=""
          />
          <div className="post__footer">
            <ChatBubbleOutline />
            <Repeat />
            <FavoriteBorderOutlined />
            <Publish />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
