import React, { Component } from "react";
import "./styles.css";
import ConversationList from "../ConversationList";
import Conversation from "../Conversation";
import Menu from "../Menu";
import { UIProvider, UIConsumer } from "../Context";

class App extends Component {
  render() {
    return (
      <UIProvider>
        <UIConsumer>
          {context => (
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
                  <ConversationList conversations={context.conversations} />
                </div>
                <div className="App__Conversation">
                  <Conversation />
                </div>
              </div>
            </div>
          )}
        </UIConsumer>
      </UIProvider>
    );
  }
}

export default App;
