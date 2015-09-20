import { BLACK_TRANSPARENT, BLUE, FONT } from '../style';
import { connect } from 'react-redux';
import React from 'react';

export default props => (
  <div style={style.wrapper}>
    <h1 style={style.title}>
      <span style={style.titleIntro}>Campeonato abierto del</span>
      <span style={style.titleName}>{props.club.name}</span>
    </h1>
    <span style={style.split} />
    <span style={style.sponsoredBy}>presentado por</span>
    <img src={props.sponsor.image} alt={props.sponsor.name} style={style.sponsorLogo} />
  </div>
);

const style = {
  split: {
    backgroundColor: BLACK_TRANSPARENT,
    height: 1,
    marginTop: 5,
    width: 200
  },
  sponsorLogo: {
    marginTop: 5,
    width: '40%'
  },
  sponsoredBy: {
    fontSize: 14,
    marginTop: 5
  },
  title: {
    color: BLUE,
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  titleIntro: {
    fontSize: 23,
    fontWeight: 100
  },
  titleName: {
    fontSize: 25,
    fontWeight: 600
  },
  wrapper: {
    alignItems: 'center',
    color: BLUE,
    fontFamily: FONT,
    marginTop: 75
  }
};
