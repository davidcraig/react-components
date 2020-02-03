// Link.react.test.js
import React from 'react'
import { Breadcrumb } from './Breadcrumbs'
import renderer from 'react-test-renderer'

beforeEach(() => {
  global.___loader = {
    enqueue: jest.fn()
  }
})

test('Breadcrumb renders as expected', () => {
  const component = renderer.create(
    <Breadcrumb title='Test Breadcrumb' href='/'></Breadcrumb>
  )

  expect(component.toJSON()).toMatchSnapshot()
})
