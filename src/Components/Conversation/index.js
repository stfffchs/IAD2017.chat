import React, { Component, Fragment } from "react";
import { UIConsumer } from "../Context";
import PostItem from "../PostItem";
import ConversationHeader from "../ConversationHeader";
import "./styles.css";

class Conversation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.ref = React.createRef();
  }

  handleSubmit(event, context) {
    event.preventDefault(); //deactivate

    context.actions.appendPostItem({
      id: context.activeConversation,
      type: "text",
      from: "me",
      text: this.state.value
    });
    context.actions.appendWriter(context.activeConversation);

    setTimeout(() => {
      context.actions.appendPostItem({
        id: context.activeConversation,
        type: "text",
        from: context.activeConversation,
        text: "Super! 🤓",
        unread: true
      });

      context.actions.removeWriter(context.activeConversation);
    }, Math.floor(Math.random() * 3000 + 2000));

    this.setState({ value: "" });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  onKeyDown = (event, context) => {
    if (event.keyCode === 13 && event.shiftKey === false) {
      event.preventDefault();
      this.handleSubmit(event, context);
    }
  };

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    const messageList = this.ref.current;
    if (messageList) {
      const scrollHeight = messageList.scrollHeight;
      const height = messageList.clientHeight;
      const maxScrollTop = scrollHeight - height;

      messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }
  };

  render() {
    return (
      <UIConsumer>
        {context => {
          // no conversation selected
          if (!context.activeConversation) {
            return (
              <div className="Conversation">
                <div className="Conversation__Placeholder">
                  <div className="Conversation__PlaceholderText">
                    IAD2017 Chat
                  </div>
                </div>
              </div>
            );
          }

          // is the partner writing
          const isWriting =
            context.isWriting.filter(
              writer => writer === context.activeConversation
            ).length > 0;

          const currentConversation = context.conversations.find(
            conversation => conversation.id === context.activeConversation
          );

          return (
            <div className="Conversation">
              <Fragment>
                <div className="Conversation__Header">
                  <ConversationHeader
                    id={currentConversation.id}
                    name={currentConversation.name}
                  />
                </div>

                <div className="Conversation__PostItems" ref={this.ref}>
                  {currentConversation.conversation.map(item => {
                    return (
                      <div
                        className={`Conversation__PostItem Conversation__PostItem--${
                          item.from === "me" ? "me" : "other"
                        }`}
                      >
                        <PostItem
                          type={item.type}
                          from={item.from}
                          text={item.text}
                        />
                      </div>
                    );
                  })}
                  {isWriting && <div className="Conversation__Writing" />}
                </div>
                <div className="Conversation__Form">
                  <form
                    onSubmit={e => {
                      this.handleSubmit(e, context);
                    }}
                  >
                    <div className="Conversation__Write">
                      <textarea
                        className="Conversation__WriteTextarea"
                        value={this.state.value}
                        placeholder="Nachricht schreiben..."
                        onKeyDown={e => this.onKeyDown(e, context)}
                        onChange={e => this.handleChange(e)}
                      />
                    </div>
                    <div className="Conversation__Send">
                      <input
                        className="Conversation__SendInput"
                        type="submit"
                        value="Senden"
                      />
                    </div>
                  </form>
                </div>
              </Fragment>
            </div>
          );
        }}
      </UIConsumer>
    );
  }
}

export default Conversation;
