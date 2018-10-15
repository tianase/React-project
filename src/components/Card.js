import React from 'react';
import './Card.css';

class Card extends React.Component {
	constructor(props){
		super(props);
		this.state = {class: "off", updated: this.props.updated};
		this.press = this.press.bind(this);
	}

	componentWillReceiveProps(nextProps){
		this.setState({updated: nextProps.updated});
		this.setState({class: 'off'});
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
	  	if (this.state.class === 'on' && this.state.updated === true){
	    	this.setState({updated: false});
	  	}
	}
	press(){
		this.props.addID(this.props.id);
		let className = (this.state.class === "off")?"on":"off";
		this.setState({class: className});
	}
	render(){
		return (
		<div onClick={this.press} className={'tc dib br3 pa3 ma2 grow bw2 shadow-5 ' + this.state.class}>
			<img alt='pobots' src={`https://robohash.org/${this.props.id}?size=200x200`} />
			<div>
				<h4>{this.props.name}</h4>
				<p>{this.props.email}</p>
			</div>
		</div>
		);
	};
}




/*const Card = ({name, email, id}) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='pobots' src={`https://robohash.org/${id}?size=200x200`} />
			<div>
				<h4>{name}</h4>
				<p>{email}</p>
			</div>
		</div>
	);
}*/

export default Card;