import React, { Component } from "react";
import { UIConsumer } from "../Context";
import "./styles.css";

class ConversationItem extends Component {
  render() {
    const { id, name, active, text, writing, unread, date, me } = this.props;

    var options = { hour: "2-digit", minute: "2-digit" };
    var time = new Date(date * 1000).toLocaleString("de-DE", options);

    return (
      <UIConsumer>
        {context => {
          return (
            <button
              className={`ConversationItem ConversationItem--${
                active ? "active" : "inactive"
              } ConversationItem--${
                me ? "me" : "others"
              }`}
              onClick={e => {
                context.actions.setActiveConversation(id);
              }}
            >
              <div className="ConversationItem__Avatar">
                <img
                  className="ConversationItem__AvatarImage"
                  alt="avatar"
                  src={`/assets/avatar/${id}.jpg`}
                />
              </div>
              <div className="ConversationItem__Infos">
                <div className="ConversationItem__Name">
                  <h3>{name}</h3>
                </div>
                <div className="ConversationItem__Preview">
                  <p>{text}</p>
                </div>
                <div className="ConversationItem__Time">{time}</div>
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
