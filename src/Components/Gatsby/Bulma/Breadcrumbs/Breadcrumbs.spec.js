// Link.react.test.js
import React from 'react'
import { Breadcrumb } from './Breadcrumbs'
import renderer from 'react-test-renderer'

function renderBreadcrumb () {
  const component = renderer.create(
    <Breadcrumb></Breadcrumb>
  )
  return component
}

test('DataTable works when fields are simple strings', () => {
  const component = renderBreadcrumb()

  expect(component.toJSON()).toMatchSnapshot()
})
