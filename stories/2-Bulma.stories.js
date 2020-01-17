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
    <h2>Simple Card (Header and Title)</h2>
    <code>{`<Card title="Test">`}</code>
    <Card title="Test" />
  </>
)
