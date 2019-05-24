import React, { Component } from "react";
import ConversationItem from "../ConversationItem";
import { UIConsumer } from "../Context";

import "./styles.css";

class ConversationList extends Component {
  render() {
    let sortConversation = arr => {
      return arr.sort((a, b) => {
        return (
          new Date(b.conversation[b.conversation.length - 1].date) -
          new Date(a.conversation[a.conversation.length - 1].date)
        );
      });
    };

    return (
      <UIConsumer>
        {context => (
          <div className="ConversationList">
            {sortConversation(context.conversations).map(item => {
              return (
                <ConversationItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  text={item.conversation[item.conversation.length - 1].text}
                  date={item.conversation[item.conversation.length - 1].date}
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
