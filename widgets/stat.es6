import React from 'react';

export default function Stat(props) {
  const wrapperStyle = {
    ...style.wrapper,
    ...props.style
  }
  return (
    <div style={wrapperStyle}>
      <span style={style.number}>{props.number}</span>
      <span>{props.text}</span>
    </div>
  );
};

const style = {
  number: {
    fontSize: 60
  },
  wrapper: {
    alignItems: 'center',
    textAlign: 'center'
  }
}
