
import React from 'react';

let isChildren = (value) => {
  return Array.isArray(value) || React.isValidElement(value) || typeof value === 'string';
};

let filterArgument = (args) => {

  switch (args.length) {

    case 3:
      return [...args];

    case 2:
      // Check args[0] is identifies
      if (typeof args[0] === 'string') {

        // Check args[1] is children or text
        if (isChildren(args[1])) {
          return [args[0], {}, args[1]];
        }

        // args[1] is property
        return [...args, null];
      } else {
        // Check args[1] is children
        if (isChildren(args[1])) {
          return [null, ...args];
        }
        return [null, {}, null];
      }

    case 1:
      if (typeof args[0] === 'string') {
        // Check args[0] is identifies
        if (args[0].startsWith('.') || args[0].startsWith('#')) {
          return [args[0], {}, null];
        }
        // args[0] is the text as children
        return [null, {}, args[0]];
      } else if (isChildren(args[0])) {
        return [null, {}, args[0]];
      }
      return [null, args[0], null];

    case 0:
      return [null, {}, null];

    default:
      return [...args];
  }
};

let wrapComponent = (Component) => {

  return function() {

    let [identifies, props, children] = filterArgument(arguments);

    if (identifies) {
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
