import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import DeleteButton from '../components/DeleteButton';
import Form from '../components/Form';
import './App.css';


class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: '',
			selected: [],
			count: 0
		}
		this.deleting = this.deleting.bind(this);
		this.addID = this.addID.bind(this);
		this.addRobot = this.addRobot.bind(this);
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users => this.setState({ robots: users, count: users.length}));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value})
	};
	deleting = (event) => {
		let robs = this.state.robots.filter(robot => {
			return !(this.state.selected.includes(robot.id))});
		let sels = robs.map((rob)=>rob.id);
		this.setState({robots: robs});
		this.setState({selected: []});
		
	};
	addRobot = (name, email) => {
		let robs = this.state.robots;
		robs.push({id: robs.length + 1, name: name, email: email});
		this.setState({robots: robs});
	};
	addID = (id) => {
		let select = this.state.selected;
		if (select.includes(id)){
			this.setState((state) => { selected: state.selected.splice(select.indexOf(id), 1); });
		} else {
	    	this.setState((state) => { selected: state.selected.push(id) });
    	}
  	};
	render() {
		const { robots, searchfield} = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		});
		if (!robots.length) {
			return <h1>Loading</h1>
		} else {
			return (
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<div className='flex justify-around'>
						<div className='w-25 pa3 mr2 pt4'>
							<Form handleElement={this.addRobot}/>
						</div>
						<div className='w-25 pa3 mr2 pt4'>
							<DeleteButton click={this.deleting}/>
						</div>
						<div className='w-25 pa3 mr2'>
							<SearchBox searchChange={this.onSearchChange}/>
						</div>
					</div>
					<Scroll>
						<ErrorBoundry>
							<CardList robots={filteredRobots.reverse()} addID={this.addID} updated={true}/>
						</ErrorBoundry>
					</Scroll>
				</div>
			);
		}
	}
	
}

export default App;