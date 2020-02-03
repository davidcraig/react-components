// Link.react.test.js
import React from 'react'
import Card from './Card'
import renderer from 'react-test-renderer'
import { cleanup } from '@testing-library/react'

afterEach(cleanup)

test('It renders as expected', () => {
  const component = renderer.create(
    <Card></Card>
  )
  expect(component.toJSON()).toMatchSnapshot()
})
