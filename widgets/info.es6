import React from 'react';

export default props => {
  const wrapperStyle = {
    ...style.wrapper,
    ...props.style
  };

  return (
    <div style={wrapperStyle}>
      <img src={`/icons/${props.type}.svg`} alt={props.type} style={style.image} />
      <span style={style.text}>{props.text}</span>
    </div>
  )
};

const style = {
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    fontSize: 12
  },
  image: {
    width: 24
  },
  text: {
    marginLeft: 10
  }
};
