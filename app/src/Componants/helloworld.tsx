import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, Link } from 'react-router';


class HelloeWorld extends React.Component<any,any> {
     constructor(props:any) {
         super(props);
     }

    render() {
        return (
        <div>Hello world
         <Link to="/hello2">About</Link>
        </div>
        );
    }
}

export default HelloeWorld;

