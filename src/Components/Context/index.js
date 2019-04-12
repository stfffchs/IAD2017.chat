import React, { Component } from "react";
import { DATA } from "../../Data";

export const UIContext = React.createContext();

export const UIConsumer = UIContext.Consumer;

export class UIProvider extends Component {
  state = {
    activeConversation: null,
    isWriting: [3],
    menuOpen: false,
    conversations: [...DATA.conversations]
  };

  toggleMenuOpen = () => {
    this.setState({
      ...this.state,
      menuOpen: !this.state.menuOpen
    });
  };
  appendWriter = id => {
    this.setState({
      ...this.state,
      isWriting: [...this.state.isWriting, id]
    });
  };
  removeWriter = id => {
    this.setState({
      ...this.state,
      isWriting: this.state.isWriting.filter(item => item !== id)
    });
  };
  appendPostItem = ({ id, type, from, text }) => {
    let newConversations = this.state.conversations.map(conversation => {
      let newConversation = { ...conversation };
      if (newConversation.id === id) {
        newConversation.conversation.push({
          type,
          from,
          text
        });
      }
      return newConversation;
    });

    this.setState({
      ...this.state,
      conversations: newConversations
    });
  };

  setActiveConversation = id => {
    this.setState({
      ...this.state,
      menuOpen: false,
      activeConversation: id
    });
  };

  render() {
    return (
      <UIContext.Provider
        value={{
          ...this.state,
          actions: {
            setActiveConversation: this.setActiveConversation,
            appendPostItem: this.appendPostItem,
            appendWriter: this.appendWriter,
            removeWriter: this.removeWriter,
            toggleMenuOpen: this.toggleMenuOpen
          }
        }}
      >
        {this.props.children}
      </UIContext.Provider>
    );
  }
}

export const withProvider = WrappedComponent => {
  return class extends React.Component {
    render() {
      return (
        <UIProvider>
          <WrappedComponent {...this.props} />
        </UIProvider>
      );
    }
  };
};

export const withContext = WrappedComponent => {
  return class extends React.Component {
    render() {
      return (
        <UIConsumer>
          {context => <WrappedComponent {...this.props} context={context} />}
        </UIConsumer>
      );
    }
  };
};
