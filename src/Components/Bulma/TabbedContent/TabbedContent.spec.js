// Link.react.test.js
import React from 'react';
import TabbedContent from './TabbedContent'
import renderer from 'react-test-renderer'
import {cleanup, fireEvent, render} from '@testing-library/react';

const TAB_1_TITLE = 'Tab 1'
const TAB_2_TITLE = 'Tab 2'
const TAB_1_CONTENT = 'Tab 1 Content'
const TAB_2_CONTENT = 'Tab 2 Content'

const DefaultContent = [
  { title: TAB_1_TITLE, content: TAB_1_CONTENT },
  { title: TAB_2_TITLE, content: TAB_2_CONTENT }
]

afterEach(cleanup);

test('It renders as expected', () => {
  const component = renderer.create(
    <TabbedContent content={DefaultContent} />
  )
  expect(component.toJSON()).toMatchSnapshot()
})

test('The default tab will show tab 1 content', () => {
  const component = renderer.create(
    <TabbedContent content={DefaultContent} />
  )
  expect(component.toJSON()).toEqual(
    expect.arrayContaining([TAB_1_CONTENT])
  )
})

test('The default tab will not show tab 2 content', () => {
  const component = renderer.create(
    <TabbedContent content={DefaultContent} />
  )
  expect(component.toJSON()).toEqual(
    expect.not.arrayContaining([TAB_2_CONTENT])
  )
})

test('Clicking on tab 2 will show tab 2 content', () => {
  const { getByText, queryByText } = render(
    <TabbedContent content={DefaultContent} />
  )

  expect(queryByText(TAB_1_CONTENT)).toBeTruthy()
  expect(queryByText(TAB_2_CONTENT)).toBeFalsy()

  fireEvent.click(getByText(TAB_2_TITLE));

  expect(queryByText(TAB_1_CONTENT)).toBeFalsy()
  expect(queryByText(TAB_2_CONTENT)).toBeTruthy()
})
