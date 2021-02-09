import React, { FunctionComponent } from 'react';
import { AlertProps } from '../types';

const Alert: FunctionComponent<AlertProps> = (props) => {
  return <div className={`alert alert-success`} role="alert" style={{ marginBottom: 0 }}>
    <span role="img" aria-label="Alert">🚨</span> {props.text}: <a href={props.linkUrl}>{props.linkText}</a>
  </div>;
}

export default Alert