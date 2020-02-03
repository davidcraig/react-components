import React from 'react'
import { Card } from '../src/Components/Bulma/Card/Card'
import TabbedContent from '../src/Components/Bulma/TabbedContent/TabbedContent'

export default {
  title: 'Bulma',
  component: Card
}

const componentWrap = {
  padding: '16px 0'
}

export const Bulma = () => (
  <>
    <h2>Bulma Components</h2>
  </>
)

export const BulmaCard = () => (
  <>
    <h2>Simple Card (Title and Content)</h2>
    <code>{'<Card title="Test">This is card Content</Card>'}</code>

    <div style={componentWrap}>
      <Card title="Test">This is card Content</Card>
    </div>
  </>
)

export const BulmaTabbedContent = () => (
  <>
    <h2>TabbedContent</h2>
    <code>{'<Card title="Test">This is card Content</Card>'}</code>

    <div style={componentWrap}>
      <TabbedContent content={[{ title: 'Tab 1', content: 'Tab 1 Content' }]}></TabbedContent>
    </div>
  </>
)
