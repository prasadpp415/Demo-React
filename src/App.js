import React from 'react';
import './App.css';
import Login from './Login';
import axios from 'axios';
import pagenotfound from './pagenotfound';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Hello(props) {
	return <h1>Hello, {props.name} !!!</h1>;
}

function Hi(state) {
	return <h1>Hi, {state.name}</h1>;
}

class How extends React.Component {
	constructor(props) {
		super(props);
		this.state = { message: 'Hi, How are you', name: 'ABC', user: '' };
		this.textchanger = this.textchanger.bind(this);
	}

	componentDidMount() {
		axios.get('http://localhost:4200/login').then((response) => {
			this.setState({ user: response.data[0].user_name });
		});
	}
	textchanger() {
		this.setState((state) => ({
			message: 'How do you do ?',
			name: 'Naveen'
		}));
	}
	render() {
		return (
			<div>
				<h1>
					{this.state.message} {this.state.name} !!!
				</h1>
				<ul>
					<li>{this.state.user}</li>
				</ul>
				<br />
				<button className="btn btn-primary" onClick={this.textchanger}>
					Text Changer
				</button>
			</div>
		);
	}
}

function App() {
	return (
		// <React.Fragment>
		// 	<Login />, <Hello name="Prasad" />, <Hi name="Prasad" />, <How />;
		// </React.Fragment>
		<Router>
			<nav>
				<Link to={'/Hi'}>Hi</Link> |
				<Link to={'/Hello'}> Hello</Link> |
				<Link to={'/How'}> How</Link> |
				<Link to={'/Login'}>Login</Link>
			</nav>
			<Switch>
				<Route exact path="/login" component={Login} />
				<Route path="/Hi" component={Hi} />
				<Route path="/Hello" component={Hello} />
				<Route path="/How" component={How} />
				<Route component={pagenotfound} />
			</Switch>
		</Router>
	);
}

export default App;
