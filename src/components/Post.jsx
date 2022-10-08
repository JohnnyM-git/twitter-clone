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
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__header-text">
            <h3>
              {displayName}
              <span className="post__header-special">
                @{username}
                {verified && <VerifiedUser className="post__badge" />}
              </span>
            </h3>
          </div>
          <div className="post__header-description">
            <p>{text}</p>
          </div>
          <img src={image} alt="" />
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
