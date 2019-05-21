import React, { Component } from 'react'
import {Container,Row,Col} from 'reactstrap'


export class TimeLine extends Component {
  render() {
      const { icon, subject, children ,time} = this.props;
    return (
        <li className="content">
          <div className="content-icon">
            <img src={icon} />
          </div>
          <span className="tltitle">{subject}</span>
          <span className="tltime">{time}</span>
          {children}
        </li>
    )
  }
}

export default TimeLine
