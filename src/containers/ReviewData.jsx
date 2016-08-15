import React from 'react'
import TopNav from '../components/TopNav'
import DataTable from '../components/DataTable'
import ActionButton from '../components/ActionButton'

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


import { connect } from 'react-redux'
import { Line } from 'react-chartjs-2';

const ReviewData = (props) => (
  <div style={{paddingTop: 60}}>

    <TopNav prevRoute={"/edit-data"} title="Review Data" />
    <Card>
      <CardHeader
        title="Stress"
      />
      <CardMedia>
        <Line data={{
          labels: props.data[0],

          datasets: [
              {
                  label: "Stress In MPa",
                  data: props.data[1],
                  spanGaps: false,
              }
          ]
        }}/>
      </CardMedia>
    </Card>
    <Card>
      <CardHeader
        title="Strain"
      />
      <CardMedia>
        <Line data={{
          labels: props.data[0],

          datasets: [
            {
              label: "Strain in ?",
              data: props.data[2],
              spanGaps: false
            }
          ]
        }}/>
      </CardMedia>
    </Card>
    <ActionButton route="/calculate-data" />
  </div>
)

export default connect((state)=> {
  return { data: state.dataset.data }
})(ReviewData)
