import {
  ChatBubbleOutline,
  FavoriteBorderOutlined,
  Publish,
  Repeat,
  VerifiedUser,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import "./Post.css";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar, time }, ref) => {
    return (
      <div className="post" ref={ref}>
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
              <span className="post__header-time">{time}</span>
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
);

export default Post;
