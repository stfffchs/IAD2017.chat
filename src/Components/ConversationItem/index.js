import React, { Component } from "react";
import { UIConsumer } from "../Context";
import "./styles.css";

class ConversationItem extends Component {
  render() {
    const { id, name, active, text, writing } = this.props;
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
                  src={`//lorempixel.com/175/175/${
                    ["people", "nature", "sports"][id % 3]
                  }/${id % 8}`}
                />
              </div>
              <div className="ConversationItem__Infos">
                <div className="ConversationItem__Name">
                  <h3>{name}</h3>
                </div>
                <div className="ConversationItem__Time">12:00</div>
              </div>

              <div className="ConversationItem__Preview">
                <p>{text}</p>
              </div>

              {writing && <div className="ConversationItem__Writing" />}
            </button>
          );
        }}
      </UIConsumer>
    );
  }
}

export default ConversationItem;
