import React, { Component } from "react";
import "./styles.css";

class PostItem extends Component {
  render() {
    const { type, from, text, date } = this.props;

    var options = { hour: "2-digit", minute: "2-digit" };
    var time = new Date(date * 1000).toLocaleString("de-DE", options);

    return (
      <div className="PostItem">
        <div
          className={`PostItem__Post PostItem__Post--${type} PostItem__Post--${
            from === "me" ? "me" : "other"
          }`}
        >
          <div className="PostItem__Text">{text}</div>
          <div className="PostItem__Time">{time}</div>
        </div>
      </div>
    );
  }
}

export default PostItem;
