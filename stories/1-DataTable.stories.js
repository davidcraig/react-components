import React from 'react';
import { action } from '@storybook/addon-actions';
import { DataTable } from '../src/Components/DataTable/DataTable';

export default {
  title: 'DataTable',
  component: DataTable,
};

export const Default = () => <DataTable columns={[ { name: 'Name' }, { name: 'Age' } ]} />

// export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

// export const Emoji = () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );
