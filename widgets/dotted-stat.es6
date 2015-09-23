import { BLUE } from '../style';
import React from 'react';

export default props => {
  const wrapperStyle = {
    ...style.wrapper,
    ...props.style
  };

  const dots = [];
  for (var i = 0; i < props.number; i++) {
    dots.push(
      <span style={style.dot} />
    );
  }

  let text;
  switch (props.number) {
    case 0:
    case 1:
      text = props.text[props.number];
      break;
    default:
      text = `${props.number} ${props.text.many}`;
      break;
  }

  return (
    <div style={wrapperStyle}>
      <span style={style.text}>{text}</span>
      {props.number > 0 && <div style={style.dots}>{dots}</div>}
    </div>
  );
};

const style = {
  dot: {
    backgroundColor: BLUE,
    borderRadius: 10,
    marginRight: 2,
    marginTop: 2,
    height: 10,
    width: 10
  },
  dots: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '95%'
  },
  dotsWrapper: {
    flexDirection: 'row'
  },
  number: {
  },
  wrapper: {
    marginTop: 10
  }
};
