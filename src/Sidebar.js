import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://blog.paper.li/wp-content/uploads/2020/02/LinkedIn-banner-15-1024x256.png"
          alt="banner"
        />
        <Avatar className="sidebar__avatar" />
        <h2>Alex Weiss</h2>
        <h4>alex.weiss@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2448</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
      </div>
    </div>
  );
};

export default Sidebar;
