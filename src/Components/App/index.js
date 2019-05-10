import React, { Component } from "react";
import "./styles.css";
import ConversationList from "../ConversationList";
import Conversation from "../Conversation";
import Menu from "../Menu";
import { withContext } from "../Context";
import { getSentence } from "../../Data/generator";

class App extends Component {
  componentDidMount() {
    let { context } = this.props;

    setInterval(() => {
      context.actions.appendPostItem({
        id: 4,
        type: "text",
        from: 4,
        text: getSentence(),
        unread: true
      });
    }, 5000);
  }

  render() {
    let { context } = this.props;
    return (
      <div
        className={`App App--beta App--Menu${
          context.menuOpen ? "Open" : "Closed"
        }`}
      >
        <div className="App__Menu">
          <Menu open={context.menuOpen} />
        </div>
        <div className="App__Chat">
          <div className="App__ConversationList">
            <ConversationList />
          </div>
          <div className="App__Conversation">
            <Conversation />
          </div>
        </div>
      </div>
    );
  }
}

export default withContext(App);
