import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute  } from 'react-router';
import HelloWorld from './Componants/helloworld';
import HelloWorld2 from './Componants/helloworld.2'




ReactDOM.render(
   <Router history={hashHistory} >
     <Route path="/">

            <IndexRoute  component={HelloWorld}>
            
            </IndexRoute>
            <Route path="hello2" component={HelloWorld2} />
            </Route>
            </Router>
            
        ,
  document.getElementById('app')
);