import React from 'react'
import { Card, CardHeader, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card'
import Paper from 'material-ui/Paper'
import Chip from 'material-ui/Chip'
import { List, ListItem } from 'material-ui/List'
import FlatButton from 'material-ui/FlatButton'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right'
import { Flex, Box } from 'reflexbox'

import { Link } from 'react-router'
import { Grid, Row, Cell } from 'react-inline-grid'

import theme, { gridOptions } from '../styles'

const ModuleCard = (props) => (
  <div>
    <Card>
      <CardMedia
          style={{ minHeight: 300, backgroundColor: theme.palette.primary1Color }}
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
  </div>
)

const ModuleActions = () => (
  <Flex>
    <Box flexColumn col={6} px={1}>
      <Paper>
        <List style={{padding:0}}>
          <ListItem primaryText="New Case" rightIcon={<NavigationChevronRight />} />
          <Divider />
          <ListItem primaryText="New Scenario" rightIcon={<NavigationChevronRight />} />
        </List>
      </Paper>
    </Box>
    <Box flexColumn col={6} px={1}>
       <Paper>
        <List style={{padding:0}}>
            <ListItem primaryText="View Scenarios" rightIcon={<NavigationChevronRight />} />
            <Divider />
            <ListItem primaryText="Example Scenarios" rightIcon={<NavigationChevronRight />} />
        </List>
      </Paper>
    </Box>
  </Flex>
)

const ModuleHistoryCard = (props) => (
  <Box flexColumn col={12} p={1}>
  <Card>
    <CardHeader
      title={props.title}
      actAsExpander={true}
      showExpandableButton={true}
      />
      <CardMedia expandable={true}>
      <List>
        {getItems(props.items)}
      </List>
    </CardMedia>
  </Card>
  </Box>
)

const getItems = (items) => {
  return items.map((item, index)=>{
    console.log(item)
      return (<ListItem
        key={index}
        leftAvatar={<Chip>{`#${index}`}</Chip>}
        primaryText={item.name}
        secondaryText={`${item.date} - ${item.author}`}
      />)
    })
}

const Overview = (props) => (
  <Flex>
      <Box flexColumn col={4} px={1}>
        <ModuleCard {...props} />
      </Box>
      <Box flexColumn col={8} px={1}>
        <ModuleActions />
        <ModuleHistoryCard
          title="Recent Scenarios"
          items={props.scenarios}
        />
        <ModuleHistoryCard
          title="Recent Cases"
          items={props.cases}
        />
      </Box>
  </Flex>
)

export default Overview
