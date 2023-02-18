import React, { FunctionComponent } from 'react';
import { AlertProps } from '../types';

const Alert: FunctionComponent<AlertProps> = (props) => {
  if (props.show) {
    return <div className={`alert alert-success font-weight-bold`} role="alert" style={{ marginBottom: 0 }}>
      <span role="img" aria-label="Alert">🚨</span> {props.text} <a href={props.linkUrl}>{props.linkText}</a>
    </div>;
  } else {
    return <i></i>
  }
}

export default Alert