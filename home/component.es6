import { Action, Panel } from 'panels-ui';
import { BLUE_TRANSPARENT, FONT, WHITE, WHITE_TRANSPARENT } from '../style';
import { connect } from 'react-redux';
import React from 'react';

export const TournamentCard = props => {
  let actionStyle = {
    ...style.action.base
  };

  if (props.i === 0) {
    actionStyle.marginTop = 75;
  }

  return (
    <Action href={`${props.tournament.id}/`} style={actionStyle}>
      {props.tournament.name}
    </Action>
  );
};

const Social = props => (
  <a href={props.href} target='_blank' title={props.name}>
    {props.name}
  </a>
);

const socialLinks = [{
  name: 'Facebook',
  href: 'https://www.facebook.com/editorialmundialpolo'
}, {
  name: 'Twitter',
  href: 'https://twitter.com/EdiMundial'
}, {
  name: 'Instagram',
  href: 'https://instagram.com/edimundial'
}];

export const Home = props => (
  <Panel width={props.width} style={style.panel}>
    <img src='/logos/polo-mundial.png' alt='Polo Mundial' style={style.poloMundialLogo} />
    <span style={style.sponsoredBy}>presentado por</span>
    <img src='/logos/sancor-seguros-white.png' alt='Sponsor: Sancor Seguros' style={style.sponsorLogo} />

    {props.tournaments.list.map((tournament, i) => <TournamentCard tournament={props.tournaments.byId[tournament]} i={i} key={i} />)}

    {socialLinks.map(link => <Social {...link} />)}
  </Panel>
);

const style = {
  action: {
    base: {
      alignSelf: 'stretch',
      borderBottomWidth: 1,
      borderStyle: 'solid',
      borderColor: WHITE_TRANSPARENT,
      color: WHITE,
      marginLeft: 35,
      paddingLeft: 15,
      paddingTop: 15,
      paddingBottom: 15,
      textTransform: 'uppercase'
    }
  },
  poloMundialLogo: {
    marginTop: 75,
    width: '55%'
  },
  sponsorLogo: {
    marginTop: 5,
    width: '40%'
  },
  sponsoredBy: {
    fontSize: 14,
    marginTop: 5
  },
  panel: {
    alignItems: 'center',
    backgroundColor: BLUE_TRANSPARENT,
    fontFamily: FONT,
    color: WHITE
  }
};

function mapStateToProps(state, props) {
  return {
    tournaments: state.tournaments
  };
}

export default connect(mapStateToProps)(Home);
