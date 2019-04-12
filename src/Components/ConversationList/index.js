import React, { Component } from "react";
import ConversationItem from "../ConversationItem";
import { UIConsumer } from "../Context";

import "./styles.css";

class ConversationList extends Component {
  render() {
    const { conversations } = this.props;
    return (
      <UIConsumer>
        {context => (
          <div className="ConversationList">
            {conversations.map(item => {
              console.log(
                "writing",
                context.isWriting.filter(writer => writer === item.id)
              );
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
