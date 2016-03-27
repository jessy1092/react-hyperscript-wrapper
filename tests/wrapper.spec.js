'use strict';

import TestUtils from 'react-addons-test-utils';
import React     from 'react';
import ReactDOM  from 'react-dom';
import sinon     from 'sinon';

import {wrapper} from '../src';

import FakeComponent from './FakeComponent';

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

  context('When call method with children', () => {
    it('could have text as children', () => {

      let instance = TestUtils.renderIntoDocument(
        div(null, {}, '123')
      );
      let node = ReactDOM.findDOMNode(instance);

      assert.equal('123', node.textContent);
    });

    it('could have element children', () => {

      let instance = TestUtils.renderIntoDocument(
        div(null, {}, div(null, {}, null))
      );
      let node = ReactDOM.findDOMNode(instance);

      assert.equal('DIV', node.children[0].tagName);
    });
  });

  context('When call method with one arguments', () => {
    it('could pass identifies', () => {

      let instance = TestUtils.renderIntoDocument(
        div('#testId')
      );
      let node = ReactDOM.findDOMNode(instance);

      assert.equal('testId', node.id);
    });

    it('could pass property', () => {

      let instance = TestUtils.renderIntoDocument(
        div({'data-test': 1})
      );
      let node = ReactDOM.findDOMNode(instance);

      assert.equal(1, node.getAttribute('data-test'));
    });

    it('could pass children', () => {

      let instance = TestUtils.renderIntoDocument(
        div(div())
      );
      let node = ReactDOM.findDOMNode(instance);

      assert.equal('DIV', node.children[0].tagName);
    });

    it('could pass text as children', () => {

      let instance = TestUtils.renderIntoDocument(
        div('123')
      );
      let node = ReactDOM.findDOMNode(instance);

      assert.equal('123', node.textContent);
    });
  });

  context('When call method with two arguments', () => {
    it('could pass identifies and property', () => {

      let instance = TestUtils.renderIntoDocument(
        div('.testClass', {'data-test': 1})
      );
      let node = ReactDOM.findDOMNode(instance);

      assert.equal('testClass', node.className);
      assert.equal(1, node.getAttribute('data-test'));
    });

    it('could pass identifies and children', () => {

      let instance = TestUtils.renderIntoDocument(
        div('#testId', div())
      );
      let node = ReactDOM.findDOMNode(instance);

      assert.equal('testId', node.id);
      assert.equal('DIV', node.children[0].tagName);
    });

    it('could pass identifies and text as children', () => {

      let instance = TestUtils.renderIntoDocument(
        div('#testId', '123')
      );
      let node = ReactDOM.findDOMNode(instance);

      assert.equal('testId', node.id);
      assert.equal('123', node.textContent);
    });


    it('could pass property and children', () => {

      let instance = TestUtils.renderIntoDocument(
        div({'data-test': 1}, div())
      );
      let node = ReactDOM.findDOMNode(instance);

      assert.equal(1, node.getAttribute('data-test'));
      assert.equal('DIV', node.children[0].tagName);
    });

    it('could pass property and text as children', () => {

      let instance = TestUtils.renderIntoDocument(
        div({'data-test': 1}, '123')
      );
      let node = ReactDOM.findDOMNode(instance);

      assert.equal(1, node.getAttribute('data-test'));
      assert.equal('123', node.textContent);
    });
  });
});

describe('Wrap custom component', () => {

  let WrapFakeComponent;

  beforeEach(() => {
    WrapFakeComponent = wrapper({WrapFakeComponent: FakeComponent}).WrapFakeComponent;
  });

  it('should be the same type', () => {
    assert.isTrue(
      TestUtils.isElementOfType(WrapFakeComponent(), FakeComponent)
    );
  });
});
