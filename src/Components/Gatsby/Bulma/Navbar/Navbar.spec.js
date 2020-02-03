// Link.react.test.js
import React from 'react'
import { Navbar } from './Navbar'
import renderer from 'react-test-renderer'

function renderNavbar () {
  const component = renderer.create(
    <Navbar></Navbar>
  )
  return component
}

test('Breadcrumb renders as expected', () => {
  const component = renderNavbar()

  expect(component.toJSON()).toMatchSnapshot()
})
