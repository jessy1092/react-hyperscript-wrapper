'use strict';

import TestUtils from 'react-addons-test-utils';
import React     from 'react';
import ReactDOM  from 'react-dom';
import sinon     from 'sinon';

import {wrapper} from '../src';

describe('Wrap react default component', () => {

  let div;

  beforeEach(() => div = wrapper({div: 'div'}).div);

  context('When call method', () => {
    it('should be element', () => {
      assert.isTrue(TestUtils.isElementOfType(div(), 'div'));
    });
  });

  context('When call method with id', () => {
    it('should have id', () => {

      let instance = TestUtils.renderIntoDocument(
        div('#testID', {}, '')
      );
      let node = ReactDOM.findDOMNode(instance);

      assert.equal('testID', node.id);
    });
  });

  context('When call method with className', () => {
    it('should have className', () => {

      let instance = TestUtils.renderIntoDocument(
        div('.testClass', {}, '')
      );
      let node = ReactDOM.findDOMNode(instance);

      assert.equal('testClass', node.className);
    });
  });

  context('When call method with className and id', () => {

    let node;

    beforeEach(() => {
      let instance = TestUtils.renderIntoDocument(
        div('#testId.testClass', {}, '')
      );
      node = ReactDOM.findDOMNode(instance);
    });

    it('should have id', () => {
      assert.equal('testId', node.id);
    });

    it('should have className', () => {
      assert.equal('testClass', node.className);
    });
  });

  context('When call method with onClick property', () => {
    it('should call onClick callback', () => {

      let onClick = sinon.spy();
      let instance = TestUtils.renderIntoDocument(
        div(null, {onClick}, '')
      );
      let node = ReactDOM.findDOMNode(instance);

      TestUtils.Simulate.click(node);

      assert.isTrue(onClick.called);
    });
  });

  context('When call method with custom property', () => {
    it('should have custom property', () => {

      let instance = TestUtils.renderIntoDocument(
        div(null, {'data-test': 1}, '')
      );
      let node = ReactDOM.findDOMNode(instance);

      assert.equal(1, node.getAttribute('data-test'));
    });
  });
});
