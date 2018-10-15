import React from 'react';
import Card from './Card';



/*class CardList extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
		<div>
			{
			this.props.robots.map((user, i) => {
				return (
					<Card
						key={i} 
						id={this.props.robots[i].id} 
						name={this.props.robots[i].name} 
						email={this.props.robots[i].email}
						addID={this.props.addID}
						updated={this.props.updated}
						/>
					);
				})
			}
		</div>
	);
	}
}*/
const CardList = ({ robots, addID, updated}) => {
	return (
		<div>
			{
			robots.map((user, i) => {
				return (
					<Card
						key={i} 
						id={robots[i].id} 
						name={robots[i].name} 
						email={robots[i].email}
						addID={addID}
						updated={updated}
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;