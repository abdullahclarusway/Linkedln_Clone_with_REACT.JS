import React from "react";
import "./Widget.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widget = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("React is back", "Top news - 9090 readers")}
      {newsArticle("Coronavirus: GER updates", "Top news - 886")}
      {newsArticle("Tesla hits new hips", "Cars & Auto - 300")}
      {newsArticle("Bitcoin breaks $22k", "Crypro - 8000 readers")}
      {newsArticle("Is Redux too good", "Code - 123 Readers")}
    </div>
  );
};

export default Widget;
