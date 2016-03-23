react-hyperscript-wrapper
=============
[![npm][npm-image]][npm-url] [![Dependency Status][david-dm-image]][david-dm-url]

Wrap react component with hyperscript function. Let write react without jsx style and display clearly.

Inspire by [react-hyperscript-helpers](https://github.com/Jador/react-hyperscript-helpers).


## Usage

```js
import React from 'react';
import {wrapper} from 'react-hyperscript-wrapper';

// Wrap react default component
let {div} = wrapper({div: 'div'});

let HelloBox = React.createClass({

  _onClick: function () {
    console.log('hello world!');
  },

  render: function () {
    return div('#testId.testClass', {onClick: this._onClick}, 'Hello World!');
  }
});

// Wrap custom component
let {WarpHelloBox} = wrapper({WarpHelloBox: HelloBox});

ReactDOM.render(
  WarpHelloBox(),
  document.getElementById('content')
);
```

Origin
```js
import React from 'react';

let HelloBox = React.createClass({

  _onClick: function () {
    console.log('hello world!');
  },

  render: function () {
    return (
      <div id="testId" className="testClass" onClick={this._onClick}>'Hello World!'</div>
    );
  }
});

ReactDOM.render(
  <HelloBox />,
  document.getElementById('content')
);
```


## API

### wrapper(components' object)

- **components' object**: `key` is the component's name. `value` is the react component.

Return the hyperscript object. `key` is the component's name. `value` is the hyperscript function.

This function has three arguments.

- **identifies**: The react component's `id` and `className` which setting by css identify rule.
- **properties**: The react component's properties.
- **children**: The react component's children.


## Contribute
[![devDependency Status][david-dm-dev-image]][david-dm-dev-url]

1. Fork it.
2. Create your feature-branch `git checkout -b your-new-feature-branch`
3. Commit your change `git commit -am 'Add new feature'`
4. Push to the branch `git push origin your-new-feature-branch`
5. Create new Pull Request with `develop` branch

## License

The MIT License (MIT)

Copyright (c) 2016 Lee  < jessy1092@gmail.com >

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


[npm-image]: https://img.shields.io/npm/v/react-hyperscript-wrapper.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/react-hyperscript-wrapper

[david-dm-image]: https://img.shields.io/david/jessy1092/react-hyperscript-wrapper.svg?style=flat-square
[david-dm-url]: https://david-dm.org/jessy1092/react-hyperscript-wrapper
[david-dm-dev-image]: https://img.shields.io/david/dev/jessy1092/react-hyperscript-wrapper.svg?style=flat-square
[david-dm-dev-url]: https://david-dm.org/jessy1092/react-hyperscript-wrapper#info=devDependencies
