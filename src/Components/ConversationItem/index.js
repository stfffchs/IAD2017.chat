import React, { Component } from "react";
import { UIConsumer } from "../Context";
import "./styles.css";

class ConversationItem extends Component {
  render() {
    const { id, name, active, text, writing, unread, date } = this.props;

    var options = { hour: "2-digit", minute: "2-digit" };
    var time = new Date(date * 1000).toLocaleString("de-DE", options);

    return (
      <UIConsumer>
        {context => {
          return (
            <button
              className={`ConversationItem ConversationItem--${
                active ? "active" : "inactive"
              }`}
              onClick={e => {
                context.actions.setActiveConversation(id);
              }}
            >
              <div className="ConversationItem__Avatar">
                <img
                  className="ConversationItem__AvatarImage"
                  alt="avatar"
<<<<<<< HEAD
                  src={`//lorempixel.com/175/175/${
                    ["people", "nature", "sports"][id % 3]
                  }/${id % 8}`}
=======
                  src={`/assets/avatar/${id}.jpg`}
>>>>>>> 3cb921d522b8e8d93b9851d1b2b52ff1d21da012
                />
              </div>
              <div className="ConversationItem__Infos">
                <div className="ConversationItem__Name">
                  <h3>{name}</h3>
                </div>
                <div className="ConversationItem__Time">{time}</div>
              </div>

              <div className="ConversationItem__Preview">
                <p>{text}</p>
              </div>

              {writing && <div className="ConversationItem__Writing" />}
              {unread > 0 && (
                <div className="ConversationItem__UnreadCount">{unread}</div>
              )}
            </button>
          );
        }}
      </UIConsumer>
    );
  }
}

export default ConversationItem;
