import React, { Component } from "react";
import ConversationItem from "../ConversationItem";
import { UIConsumer } from "../Context";

import "./styles.css";

class ConversationList extends Component {
  render() {
    return (
      <UIConsumer>
        {context => (
          <div className="ConversationList">
            {context.conversations.map(item => {
              return (
                <ConversationItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  text={item.conversation[item.conversation.length - 1].text}
                  active={context.activeConversation === item.id}
                  writing={
                    context.isWriting.filter(writer => writer === item.id)
                      .length > 0
                  }
                  unread={
                    item.conversation.filter(post => post.unread === true)
                      .length
                  }
                />
              );
            })}
          </div>
        )}
      </UIConsumer>
    );
  }
}

export default ConversationList;
