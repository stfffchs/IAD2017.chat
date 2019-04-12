import React, { Component } from "react";
import { UIConsumer } from "../Context";
import PostItem from "../PostItem";
import "./styles.css";

class Conversation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.ref = React.createRef();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

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
        {context => (
          <div className="Conversation">
            {context.activeConversation && (
              <div className="Conversation__PostItems" ref={this.ref}>
                {context.conversations
                  .find(
                    conversation =>
                      conversation.id === context.activeConversation
                  )
                  .conversation.map(item => {
                    return (
                      <div className="Conversation__PostItem">
                        <PostItem
                          type={item.type}
                          from={item.from}
                          text={item.text}
                        />
                      </div>
                    );
                  })}

                {context.isWriting.filter(
                  writer => writer === context.activeConversation
                ).length > 0 && <div className="Conversation__Writing" />}
              </div>
            )}
            {context.activeConversation && (
              <div className="Conversation__Form">
                <form
                  onSubmit={e => {
                    e.preventDefault(); //deactivate

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
                        text: "Super! 🤓"
                      });

                      context.actions.removeWriter(context.activeConversation);
                    }, Math.floor(Math.random() * 3000 + 2000));

                    this.setState({ value: "" });
                  }}
                >
                  <div className="Conversation__Write">
                    <textarea
                      className="Conversation__WriteTextarea"
                      value={this.state.value}
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
            )}

            {!context.activeConversation && (
              <div className="Conversation__Placeholder">
                <div className="Conversation__PlaceholderText">
                  IAD2017 Chat
                </div>
              </div>
            )}
          </div>
        )}
      </UIConsumer>
    );
  }
}

export default Conversation;
