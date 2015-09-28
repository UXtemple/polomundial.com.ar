import { Action as PanelsAction, Panel } from 'panels-ui';
import { BLUE_TRANSPARENT, FONT, FONT_LIGHT, WHITE, WHITE_TRANSPARENT } from '../style';
import { connect } from 'react-redux';
import Action from '../widgets/action';
import Info from '../widgets/info';
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
  <a href={props.href} target='_blank' title={props.name} className='Social'>
    <img src={`/icons/${props.name}.svg`} alt={props.name} style={style.icon} />
  </a>
);

const socialStyle = (
  <style>{`
  .Social {
    transition: all 0.25s linear;
  }
  .Social:hover {
    transform: scale(1.2);
  }`}</style>
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
      {socialStyle}
      {socialLinks.map(link => <Social {...link} key={link.name} />)}
    </div>

    <PanelsAction href='https://uxtemple.com/' style={style.UXtemple}>
      <Info type='uxtemple' text='made by UXtemple in Panels' />
    </PanelsAction>
  </Panel>
);

const style = {
  icon: {
    marginRight: 10,
    width: 35
  },
  icons: {
    alignItems: 'center',
    msAlignItems: 'center',
    WebkitAlignItems: 'center',
    flexDirection: 'row',
    msFlexDirection: 'row',
    WebkitFlexDirection: 'row',
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
  },
  UXtemple: {
    color: WHITE,
    marginTop: 75,
    textDecoration: 'none'
  }
};

function mapStateToProps(state, props) {
  return {
    tournaments: state.tournaments,
    sponsor: state.tournaments.sponsorsById['sancor-seguros']
  };
}

export default connect(mapStateToProps)(Home);
