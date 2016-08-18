import React, { Component, PropTypes } from 'react'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import { reverseData } from '../utils/lib'


class DataTable extends Component {
  static propTypes = {
    headers: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    reverse: PropTypes.bool
  }
  static defaultProps = {
    headers: [ 'Time', 'Stress', 'Strain' ],
    data: [],
    reverse: false
  }
  constructor(props, state) {
    super(props, state)
    state = {
      editRows: false
    }
  }
  renderHeaders(props) {
    return props.headers.map((label, i)=> {
      return <TableHeaderColumn key={i}>{label}</TableHeaderColumn>
    })
  }
  renderRows(props, data) {
    return data.map((row, i)=> {
      return this.renderRow(row, i)
    })
  }
  renderRow(row, i) {
    return (
     <TableRow key={`row-${i}`}>
       {row.map((item, k) => {
         return <TableRowColumn key={`cell-${i}-${k}`}>{item}</TableRowColumn>
       })}
     </TableRow>
    )
  }
  render() {
    const { props } = this
    const data = props.reverse ? reverseData(props.data) : props.data
    return (
     <Table fixedHeader selectable={false} multiSelectable={false} {...this.tableProps}>
     <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
       <TableRow>
         {this.renderHeaders(props, data)}
       </TableRow>
    </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {this.renderRows(props, data)}
      </TableBody>
    </Table>
    )
  }
}
export default DataTable
