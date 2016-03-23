
import React from 'react';

let wrapComponent = (Component) => {

  return (identifies, props, children) => {

    if (typeof identifies === 'string' && identifies) {
      let identifiesList = identifies.split('#');
      let id = null;
      let className = '';

      identifiesList.forEach((entry) => {
        if (entry.length > 0) {
          let [tmpId, ...tmpClass] = entry.split('.');

          if (tmpId) {
            id = tmpId;
          }

          if (tmpClass) {
            className += tmpClass.join(' ');
          }
        }
      });

      if (id) {
        props['id'] = id;
      }

      if (className) {
        props['className'] = className;
      }
    }
    return React.createElement(Component, props, children);
  };
};


export const wrapper = (components) => {

  let hyperComponents = {};

  Object.keys(components).forEach((key) => {
    hyperComponents[key] = wrapComponent(components[key]);
  });

  return hyperComponents;
};
