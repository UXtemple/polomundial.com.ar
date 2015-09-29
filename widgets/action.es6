import { Action } from 'panels-ui';
import { alignSelfStretch } from 'browser-vendor-prefix';
import React from 'react';

export default function CustomAction(props) {
  const actionStyle = {
    ...style.base,
    ...props.style
  };

  return (
    <Action href={props.href} style={actionStyle} activeStyle={style.active} hoverStyle={style.active}>
      {props.children}
    </Action>
  );
}

const style = {
  active: {
    paddingLeft: 15
  },
  base: {
    ...alignSelfStretch,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingTop: 15,
    paddingBottom: 15,
    textTransform: 'uppercase',
    transition: 'padding-left 0.25s linear'
  }
};
