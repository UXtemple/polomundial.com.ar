import * as STYLE from '../style';
import { connect } from 'react-redux';
import React from 'react';

export default function Sponsor(props) {
  const wrapperStyle = {
    ...style.wrapper,
    color: STYLE[props.colour],
    ...props.style
  };

  const image = `/sponsors/${props.id}-${props.colour.toLowerCase()}.svg`;

  return (
    <div style={wrapperStyle}>
      <span style={style.sponsoredBy}>presentado por</span>
      <img src={image} alt={props.name} style={style.sponsorLogo} />
    </div>
  );
};

const style = {
  sponsorLogo: {
    alignSelf: 'flex-start',
    msFlexAlign: 'flex-start',
    WebkitAlignSelf: 'flex-start',
    height: 28,
    marginTop: 5
  },
  sponsoredBy: {
    fontSize: 12,
    marginTop: 5
  },
  wrapper: {
    marginTop: 20
  }
};
