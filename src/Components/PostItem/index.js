import React, { Component } from "react";
import "./styles.css";

class PostItem extends Component {
  render() {
    const { type, from, text } = this.props;
    return (
      <div className="PostItem">
        <div
          className={`PostItem__Post PostItem__Post--${type} PostItem__Post--${
            from === "me" ? "me" : "other"
          }`}
        >
          <div className="PostItem__Text">{text}</div>
          <div className="PostItem__Time">12:00</div>
        </div>
      </div>
    );
  }
}

export default PostItem;
