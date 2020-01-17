import React from 'react';
import { action } from '@storybook/addon-actions';
import { DataTable } from '../src/Components/DataTable/DataTable';

export default {
  title: 'DataTable',
  component: DataTable,
};

export const Default = () => (
  <>
    <h2>DataTable with just columns set</h2>
    <DataTable columns={[ { name: 'Name' }, { name: 'Age' } ]} />
    <code>{`<DataTable columns={[ { name: 'Name' }, { name: 'Age' } ]}>`}</code>

    <h2>DataTable with just items set (implicit columns)</h2>
    <DataTable items={[ {id: 1, name: 'David'}, {id: 2, name: 'Craig'} ]} />
    <code>{`<DataTable items={[ {id: 1, name: 'David'}, {id: 2, name: 'Craig'} ]} />`}</code>

    <h2>Full DataTable example</h2>
    <DataTable items={[ {id: 1, name: 'David'}, {id: 2, name: 'Craig'} ]} columns={[ { name: 'Name', field: 'name' } ]} />
    <code>{`<DataTable items={[ {id: 1, name: 'David'}, {id: 2, name: 'Craig'} ]} columns={[ { name: 'Name', field: 'name' } ]} />`}</code>
  </>
)
