import fp from 'lodash/fp';
import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import lessons from './lessons';

const routes = [
  lessons,
];

const mapRoutesToRouteComponent = fp.map(route => <Route key={route.path} {...route} />);

const ContentContainer = props => {
  console.log(props);

  return (
    <Switch>
      {mapRoutesToRouteComponent(routes)} 
    </Switch>
  );
}

export default ContentContainer;