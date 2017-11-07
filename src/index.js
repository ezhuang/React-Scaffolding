import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import About from './components/About.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
  
require('./css/main.scss');

ReactDOM.render(
	<Router>
		<div>
		<ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/about">About</Link></li>
		</ul>
		<hr/>
			<Route exact path="/" component={App}/>
			<Route path="/about" component={About}/>
		</div>
	</Router>,
	document.getElementById('root'));