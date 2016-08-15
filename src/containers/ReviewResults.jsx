import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import TopNav from '../components/TopNav'
import DataTable from '../components/DataTable'
import ActionButton from '../components/ActionButton'
import { reverseData } from '../utils/lib'



import { connect } from 'react-redux'
import { Line } from 'react-chartjs-2';

const ReviewResults = (props) => (
  <div style={{paddingTop: 60}}>

    <TopNav prevRoute={"/calculate-data"} title="Review Results" />
    <Card>
      <CardHeader
        title="Stress"
      />
      <CardMedia>
        <Line data={{
          labels: props.data[0],
          datasets: [
              {
                label: "Max Stress",
                data: props.data[2],
                spanGaps: false,
              },
              {
                label: "Mean Stress",
                data: props.data[3],
                spanGaps: false
              }
          ]
        }}/>
      </CardMedia>
    </Card>
    <Card>
      <CardHeader
        title="Strain Range"
      />
      <CardMedia>
        <Line data={{
          labels: props.data[0],
          datasets: [
              {
                label: "Strain Range",
                data: props.data[1],
                spanGaps: false,
              }
          ]
        }}/>
      </CardMedia>
    </Card>
  </div>
)

export default connect((state)=> {
  return { data: reverseData(state.dataset.results) }
})(ReviewResults)
