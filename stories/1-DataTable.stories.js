import React from 'react'
import { DataTable } from '../src/Components/DataTable/DataTable'

export default {
  title: 'DataTable',
  component: DataTable
}

const componentWrap = {
  padding: '16px 0'
}

export const Default = () => (
  <>
    <div className='content'>
      <h2>Standard Example</h2>
      <p>The default standard example would be specifying both items and columns.</p>
      <div style={componentWrap}>
        <DataTable items={[{ id: 1, name: 'David' }, { id: 2, name: 'Craig' }]} columns={[{ name: 'Name', field: 'name' }]} />
      </div>
      <code>{'<DataTable items={[ {id: 1, name: \'David\'}, {id: 2, name: \'Craig\'} ]} columns={[ { name: \'Name\', field: \'name\' } ]} />'}</code>
    </div>
  </>
)

export const EmptyData = () => (
  <>
    <h2>DataTable with just columns (empty data set)</h2>

    <div style={componentWrap}>
      <DataTable columns={[{ name: 'Name' }, { name: 'Age' }]} />
    </div>

    <code>{'<DataTable columns={[ { name: \'Name\' }, { name: \'Age\' } ]}>'}</code>
  </>
)

export const ImplicitColumns = () => (
  <>
    <h2>DataTable with just items set (implicit columns)</h2>
    <div style={componentWrap}>
      <DataTable items={[{ id: 1, name: 'David' }, { id: 2, name: 'Craig' }]} />
    </div>
    <code>{'<DataTable items={[ {id: 1, name: \'David\'}, {id: 2, name: \'Craig\'} ]} />'}</code>
  </>
)

export const DynamicColumns = () => (
  <>
    <div className='content'>
      <h2>DataTable Dynamic/Functional Columns</h2>
      <p>The following is an example of creating a column using dynamic properties to build a table column, useful for when data is in a different format to how you would like to present it, computed columns, etc.</p>
      <div style={componentWrap}>
        <DataTable items={[{ id: 1, forename: 'David', surname: 'Craig' }, { id: 2, forename: 'John', surname: 'Doe' }]} columns={[{ name: 'Name', field: (user) => { return user.forename + ' ' + user.surname } }]} />
      </div>
      <code>{'<DataTable items={[{ id: 1, forename: \'David\', surname: \'Craig\' }, { id: 2, forename: \'John\', surname: \'Doe\' }]} columns={[{ name: \'Name\', field: (user) => { return user.forename + \' \' + user.surname } } ]} />'}</code>
    </div>
  </>
)
