import React from 'react'
import { linkTo } from '@storybook/addon-links'
import { Welcome } from '@storybook/react/demo'

export default {
  title: 'Welcome',
  component: Welcome
}

export const ToStorybook = () => (
  <>
    <h1>React Components</h1>

    <h2>Installation</h2>
    <pre><code>npm install @dcraig/react-components</code></pre>
  </>
)

ToStorybook.story = {
  name: 'to Storybook'
}
