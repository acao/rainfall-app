import React, { Component, PropTypes } from 'react'
import Card from 'material-ui/Card'
import ReactDOM from 'react-dom'
// import Handsontable from 'handsontable'
import { reverseData } from '../utils/lib'

import './data-table.css'

class DataTable extends Component {
  input = null
  static propTypes = {
    headers: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    reverse: PropTypes.bool,
    onInputUpdate: PropTypes.func,
    colHeaders: PropTypes.array,
    columns: PropTypes.array
  }
  static defaultProps = {
    headers: [ 'Time', 'Stress', 'Strain' ],
    data: [],
    reverse: false,
    onInputUpdate: () => null
  }
  constructor(props, state) {
    super(props, state)
    state = {
      editRows: false
    }
    this._installRTE = this._installRTE.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  _installRTE() {
    var el = ReactDOM.findDOMNode(this)
    const { colHeaders, data, columns, handleChange } = this.props
    console.log(reverseData(data));
    // console.log(this.props.input)
    this.rte = new Handsontable(el, {
      data,
      allowInsertColumn: false,
      minRows: 3,
      minCols: 3,
      // width: 'auto',
      stretchH: 'all',
      colWidths: 55,
      rowHeaders: true,
      colHeaders,
      columns,
      minSpareRows: 1,
      minSpareCols: 1,
      persistentState: true,
      currentRowClassName: 'currentRow',
      currentColClassName: 'currentCol',
      //afterChange: this.handleChange
    })
  }
  componentDidMount() {
    if (!this.rte) {
      this._installRTE()
    }
  }
  componentWillReceiveProps(nextProps) {
    if (!this.rte) {
      this._installRTE()
    }
    // console.log(nextProps.input, this.input)
    if (nextProps.input !== this.input) {
      // TODO: do this only sparingly under certain conditions
      // this might have been updated from the editor itself.
      // console.log(this.rte)
      // this.rte.loadData(nextProps.input);
    }
  }
  _syncChanges(input, changes) {
    // ex. [row, col, old, new]
    // ex. [3, 2, "ice", "water"]
    var output = input
    for (var i in changes) {
      var change = changes[i]

      if (!output[change[0]]) {
        output[change[0]] = []
      }
      output[change[0]][change[1]] = change[3]
    }
    return output
  }

  handleChange(changes, source) {
    // console.log('change', changes, source);
    if (changes) {
      this.input = this._syncChanges(this.props.input, changes)
      if (this.props.onInputUpdate) this.props.onInputUpdate(this.input, changes)
    }
  }
  render() {
    return (
      <Card>
      <div style={{ marginTop: 6 }} className={this.props.className + ' handsontable'}></div>
      </Card>
    )
  }
}
export default DataTable
