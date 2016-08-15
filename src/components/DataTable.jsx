import React, { Component, PropTypes } from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import { reverseData } from '../utils/lib'

const EditableRow = (props, state) => {

}

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
  }
  render() {
    const { props } = this
    const data = props.reverse ? reverseData(props.data) : props.data ;
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
