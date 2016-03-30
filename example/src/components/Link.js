
import React from 'react';
import {wrapper} from 'react-hyperscript-wrapper';

import basicComponent from './basic';

const {a, span} = basicComponent;

// Presentational Component
const Link = ({active, children, onClick}) => {
  if (active) {
    return (
      span(children)
    );
  }
  return (
    a({
      href: '#',
      onClick: e => {
        e.preventDefault();
        onClick();
      }
    }, children)
  );
};

export default Link;
