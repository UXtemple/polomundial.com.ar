import { Action, Panel } from 'panels-ui';
import { connect } from 'react-redux';
import React from 'react';

export const PatternCard = props => (
  <Action href={`${props.id}/`}>
    <img src={props.image} alt={props.name} />
    <button>Use</button>
  </Action>
);

export const Home = props => (
  <Panel width={props.width}>
    <h1 style={style.title}>How to get Hugru?</h1>

    <h2>First</h2>
    <p>Choose the pattern for your custom made Hugru below.</p>

    <h2>Next</h2>
    <p>Select how you want the Sugru to be shaped and add your message.</p>

    <h2>In return</h2>
    <p>We will produce and send you your Hugru.</p>

    {props.patterns.list.map(pattern => <PatternCard {...props.patterns.byId[pattern]} />)}
  </Panel>
);

const style = {
  title: {
    fontSize: 100
  }
}

function mapStateToProps(state, props) {
  return {
    patterns: state.patterns
  };
}

export default connect(mapStateToProps)(Home);
