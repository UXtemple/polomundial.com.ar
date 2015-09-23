import * as STYLE from '../style';
import { connect } from 'react-redux';
import React from 'react';

export default props => {
  const wrapperStyle = {
    ...style.wrapper,
    color: STYLE[props.colour]
  };

  const image = `/sponsors/${props.id}-${props.colour.toLowerCase()}.png`;

  return (
    <div style={style.wrapper}>
      <span style={style.sponsoredBy}>presentado por</span>
      <img src={image} alt={props.name} style={style.sponsorLogo} />
    </div>
  );
};

const style = {
  sponsorLogo: {
    marginTop: 5,
    width: '40%'
  },
  sponsoredBy: {
    fontSize: 12,
    marginTop: 5
  },
  wrapper: {
    marginTop: 20
  }
};
