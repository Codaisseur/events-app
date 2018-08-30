import React from 'react'
import EventsListContainer from './EventsListContainer'
import EventDetailsContainer from './EventDetailsContainer'
import LoginFormContainer from './LoginFormContainer'
import {Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

function Routes(props) {
  return (<div>
    {!props.authenticated && 
      <Switch>
        <Route path="/login" component={LoginFormContainer} />
        <Route path="" render={() => <Redirect to="/login" />} /> 
      </Switch>}
    
    {props.authenticated && 
      <Switch>
        <Route path="/" exact component={EventsListContainer} />
        <Route path="/events/:id" component={EventDetailsContainer} />
        <Route path="" render={() => <Redirect to="/" />} /> 
      </Switch> }
  </div>)
}

const mapStateToProps = state => ({
  authenticated: !!state.currentUser
})

export default withRouter(connect(mapStateToProps)(Routes))