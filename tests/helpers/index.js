
import chai  from 'chai';
import jsdom from 'jsdom';

chai.config.includeStack = true;
global.assert = chai.assert;

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = {userAgent: 'node.js'};
