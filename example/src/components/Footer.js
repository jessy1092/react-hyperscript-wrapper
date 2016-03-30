
import React from 'react';
import {wrapper} from 'react-hyperscript-wrapper';

import FilterLink from '../containers/FilterLink';
import basicComponent from './basic';

const {p} = basicComponent;

// Presentational Component
const Footer = () => (
  p([
    'Show:',
    '  ',
    FilterLink({filter: 'SHOW_ALL'}, 'All'),
    ', ',
    FilterLink({filter: 'SHOW_ACTIVE'}, 'Active'),
    ', ',
    FilterLink({filter: 'SHOW_COMPLETED'}, 'Completed')
  ])
);

export default wrapper({Footer}).Footer;
