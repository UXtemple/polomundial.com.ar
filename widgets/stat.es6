import React from 'react';

export default props => {
  const wrapperStyle = {
    ...style.wrapper,
    ...props.style
  }
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
  wrapper: {
    alignItems: 'center',
    textAlign: 'center'
  }
}
