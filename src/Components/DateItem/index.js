import React, { Component } from "react";
import "./styles.css";

class DateItem extends Component {
  render() {
    const { date } = this.props;

    var options = {
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    var time = new Date(date * 1000).toLocaleString("de-DE", options);

    return (
      <div className="DateItem">
        <div className="DateItem__Time">{time}</div>
      </div>
    );
  }
}

export default DateItem;
