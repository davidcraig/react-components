import React from 'react'
import PropTypes from 'prop-types';

/**
 * This component creates a tabular view of a data set given some items and optional columns
 */
class DataTable extends React.Component {
  getColumns () {
    let cols = this.props.columns
    if (!cols) {
      // If we dont have explicit columns, try to be implicit.
      cols = this.getImplicitColumns()
    }
    return cols
  }

  getImplicitColumns () {
    let columns = {}
    if (typeof this.props.items != 'undefined') {
      this.props.items.map(i => {
        Object.keys(i).map(col => {
          if (typeof columns[col] === 'undefined') {
            columns[col] = {
              field: col,
              name: col
            }
          }
        })
      })
    }
    

    let columnArray = []
    Object.keys(columns).map(col => {
      columnArray.push(columns[col])
    })

    return columnArray
  }

  renderColumnHeadings () {
    let cols = this.getColumns()

    return <tr>{cols.map(c => {
      return <th key={c.field}>{c.name}</th>
    })}</tr>
  }

  getFieldKey (item, column) {
    return item.name + column.field
  }

  renderField (item, column) {
    let key = this.getFieldKey(item, column)
    if (typeof column.field === 'function') {
      return <td key={key}>{column.field(item)}</td>
    }

    return <td key={key}>{item[column.field]}</td>
  }

  renderData () {
    let items = this.props.items
    let columns = this.getColumns()
    if (!items || !columns) {
      return ''
    }

    return items.map(i => {
      let cssClass = ''
      if (typeof i.className !== 'undefined') {
        cssClass = i.className
      }

      return <tr key={i.name} className={cssClass}>
        {
          columns.map(c => {
            return this.renderField(i, c)
          })
        }
      </tr>
    })
  }

  tableClasses () {
    let classNames = ['table']
    if (typeof this.props.classes !== 'undefined') {
      this.props.classes.map(c => {
        classNames.push(c)
      })
    }
    return classNames.join(' ')
  }

  render () {
    let headings = this.renderColumnHeadings()
    let data = this.renderData()
    let tClass = this.tableClasses()

    return (
      <table className={tClass}>
        <thead>{headings}</thead>
        <tbody>{data}</tbody>
      </table>
    )
  }
}

DataTable.propTypes = {

  /**
   * An array of columns (objects) with the following properties:
   *
   * - name: 'The display name of the column'
   * - value: Either the key of a property on item to return or a function returning the value
   */
  columns: {
    type: PropTypes.array,
  },
  /**
   * An array of data items to be shown in the table
   */
  items: {
    type: PropTypes.array,
    required: true
  },
  /**
   * Test
   */
  primaryKey: {
    type: PropTypes.string,
    required: false
  }
}

DataTable.defaultProps = {
  primaryKey: 'id'
}

export default DataTable
export { DataTable }
