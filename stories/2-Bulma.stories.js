import React from 'react';
import { action } from '@storybook/addon-actions';
import { Card } from '../src/Components/Bulma/Card/Card';
import 'bulma/css/bulma.css';

export default {
  title: 'Bulma',
  component: Card,
};

export const Default = () => (
  <>
    <h2>Bulma Components</h2>
  </>
)

export const BulmaCard = () => (
  <>
    <h2>Simple Card (Title and Content)</h2>
    <pre><code style={{ marginBottom: '4px' }}>{`<Card title="Test">This is card Content</Card>`}</code></pre>

    <div style={{ padding: '16px 0' }}>
      <Card title="Test">This is card Content</Card>
    </div>
  </>
)
