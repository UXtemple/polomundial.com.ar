import { Panel } from 'panels-ui';
import { BLUE_TRANSPARENT, FONT, FONT_LIGHT, WHITE, WHITE_TRANSPARENT } from '../style';
import { connect } from 'react-redux';
import Action from '../widgets/action';
import React from 'react';
import Sponsor from '../widgets/sponsor';

export const TournamentCard = props => {
  let actionStyle = {
    borderColor: WHITE_TRANSPARENT,
    color: WHITE
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
    <img src={`/icons/${props.name}.svg`} alt={props.name} style={style.icon} />
  </a>
);

const socialLinks = [{
  name: 'facebook',
  href: 'https://www.facebook.com/editorialmundialpolo'
}, {
  name: 'twitter',
  href: 'https://twitter.com/EdiMundial'
}, {
  name: 'instagram',
  href: 'https://instagram.com/edimundial'
}];

export const Home = props => (
  <Panel width={props.width} style={style.panel}>
    <h1 style={style.title}>Polo Mundial</h1>
    <Sponsor {...props.sponsor} colour='WHITE' />

    {props.tournaments.list.map((tournament, i) => <TournamentCard tournament={props.tournaments.byId[tournament]} i={i} key={i} />)}

    <div style={style.icons}>
      {socialLinks.map(link => <Social {...link} />)}
    </div>
  </Panel>
);

const style = {
  icon: {
    marginRight: 10,
    width: 48
  },
  icons: {
    flexDirection: 'row',
    marginTop: 75
  },
  panel: {
    backgroundColor: BLUE_TRANSPARENT,
    color: WHITE,
    fontFamily: FONT,
    fontWeight: FONT_LIGHT,
    paddingBottom: 200,
    paddingLeft: 35,
    paddingRight: 35
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
    fontSize: 40,
    fontWeight: FONT_LIGHT,
    marginTop: 90,
    textTransform: 'uppercase'
  }
};

function mapStateToProps(state, props) {
  return {
    tournaments: state.tournaments,
    sponsor: state.tournaments.sponsorsById['sancor-seguros']
  };
}

export default connect(mapStateToProps)(Home);
