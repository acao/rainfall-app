import React, { Component, PropTypes } from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class DataTable extends Component {
  static propTypes = {
    headers: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired
  }
  static defaultProps = {
    headers: [ 'Time', 'Stress', 'Strain' ],
    data: []
  }
  constructor(props, state) {
    super(props, state)
  }
  buildData(data) {
    const result = []
    if (data.length) {
      for (var i = 0; i < data[0].length; i++) {
        const row = []
        for (var k = 0; k < data.length; k++) {
          row.push(data[k][i])
        }
        result.push(row)
      }
      return result
    }
    else return []
  }
  render() {
    const { props } = this
    const data = this.buildData(props.data)
    return (
     <Table selectable={false} multiSelectable={false}>
     <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
       <TableRow>
         {props.headers.map((label, i)=> {
           return <TableHeaderColumn key={i}>{label}</TableHeaderColumn>
         })}
       </TableRow>
    </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {data.map((row, i)=> {
          return (
           <TableRow key={`row-${i}`}>
           {row.map((item, k) => {
             return <TableRowColumn key={`cell-${i}-${k}`}>{item}</TableRowColumn>
           })}
           </TableRow>
          )
        })}
      </TableBody>
    </Table>
    )
  }
}
export default DataTable
