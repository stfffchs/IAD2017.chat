import React, { Component } from "react";
import { UIConsumer } from "../Context";
import "./styles.css";

class Menu extends Component {
  render() {
    const { open } = this.props;
    return (
      <UIConsumer>
        {context => {
          return (
            <button
              className={`Menu Menu--${open ? "Open" : "Closed"}`}
              onClick={e => context.actions.toggleMenuOpen()}
            />
          );
        }}
      </UIConsumer>
    );
  }
}

export default Menu;
