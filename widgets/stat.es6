import { alignItemsCenter } from 'browser-vendor-prefix';
import React from 'react';

export default function Stat(props) {
  const wrapperStyle = {
    ...style.wrapper,
    ...props.style
  };

  return (
    <div style={wrapperStyle}>
      <span style={style.number}>{props.number}</span>
      <span style={style.text}>{props.text}</span>
    </div>
  );
};

const style = {
  number: {
    fontSize: 60
  },
  text: {
    width: '100%'
  },
  wrapper: {
    ...alignItemsCenter,
    textAlign: 'center'
  }
}
