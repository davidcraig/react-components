// Link.react.test.js
import React from 'react'
import { Breadcrumb } from './Breadcrumbs'
import renderer from 'react-test-renderer'

test('Breadcrumb renders as expected', () => {
  const component = renderer.create(
    <Breadcrumb href='/' name='Home'></Breadcrumb>
  )

  expect(component.toJSON()).toMatchSnapshot()
})
