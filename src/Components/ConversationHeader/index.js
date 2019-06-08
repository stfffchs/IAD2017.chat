import React, { Component } from "react";

import "./styles.css";

class ConversationHeader extends Component {
  render() {
    let { id, name, date } = this.props;

    var options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    };
    var time = new Date(date * 1000).toLocaleString("de-DE", options);

    return (
      <div className="ConversationHeader">
        <div className="ConversationHeader__Avatar">
          <img
            className="ConversationHeader__AvatarImage"
            alt="avatar"
            src={`/assets/avatar/${id}.jpg`}
          />
        </div>
        <div className="ConversationHeader__Infos">
          <div className="ConversationHeader__Name">
            <h4>{name}</h4>
          </div>
          <div className="ConversationHeader__Status">
            Zuletzt online: {time}
          </div>
        </div>
      </div>
    );
  }
}

export default ConversationHeader;
