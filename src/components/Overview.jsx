import React from 'react'
import { Card, CardHeader, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card'
import Paper from 'material-ui/Paper'
import { List, ListItem } from 'material-ui/List'
import FlatButton from 'material-ui/FlatButton'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right'

import { Link } from 'react-router'
import { Grid, Row, Cell } from 'react-inline-grid'

import theme, { gridOptions } from '../styles'

const ModuleCard = (props) => (
  <Row>
    <Cell>
      <Card>
        <CardMedia
            style={{ minHeight: 110, backgroundColor: theme.primary1Color}}
            overlay={<CardTitle title={props.module.title} subtitle={props.module.subtitle} />}
          >
          <img src={props.module.image} />
        </CardMedia>
        <CardText>
          <Subheader>Technical Summary</Subheader>
          {props.module.description}
        </CardText>
        <CardActions>
          <Link to="/learn-more"><FlatButton label="Learn More" /></Link>
          <FlatButton onTouchTap={props.onBookmarkModule ? props.onBookmarkModule : (() => null)} label="Bookmark This" />
        </CardActions>
      </Card>
    </Cell>
  </Row>
)

const ModuleActions = () => (
  <Row>
    <Cell is="6">
    <Paper>
      <List style={{padding:0}}>
        <ListItem primaryText="New Case" rightIcon={<NavigationChevronRight />} />
        <Divider />
        <ListItem primaryText="New Scenario" rightIcon={<NavigationChevronRight />} />
      </List>
      </Paper>
    </Cell>
    <Cell is="6">
     <Paper>
        <List style={{padding:0}}>
            <ListItem primaryText="View Scenarios" rightIcon={<NavigationChevronRight />} />
            <Divider />
            <ListItem primaryText="Example Scenarios" rightIcon={<NavigationChevronRight />} />
        </List>
      </Paper>
    </Cell>
  </Row>
)

const Overview = (props) => (
  <Grid options={gridOptions}>
    <Row>
      <Cell is="4">
        <ModuleCard {...props} />
      </Cell>
      <Cell is="8">
        <ModuleActions />
      </Cell>
    </Row>
  </Grid>
)

export default Overview
