import React, { Component } from "react";

import "./styles.css";

class ConversationHeader extends Component {
  render() {
    let { id, name } = this.props;
    return (
      <div className="ConversationHeader">
        <div className="ConversationHeader__Avatar">
          <img
            className="ConversationHeader__AvatarImage"
            alt="avatar"
            src={`//lorempixel.com/75/75/${
              ["people", "nature", "sports"][id % 3]
            }/${id % 8}`}
          />
        </div>
        <div className="ConversationHeader__Infos">
          <div className="ConversationHeader__Name">
            <h3>{name}</h3>
          </div>
          <div className="ConversationHeader__Status">
            Zuletzt online um 14:00
          </div>
        </div>
      </div>
    );
  }
}

export default ConversationHeader;
