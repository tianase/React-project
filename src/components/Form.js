import React from 'react';

class Form extends React.Component {
	constructor(props){
		super(props);
		this.state = {name: '', email: ''}
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleElement = this.handleElement.bind(this);
	}
	componentWillReceiveProps(nextProps){
		this.setState({name: '', email: ''});
	};
	handleEmailChange(e) {
   		this.setState({email: e.target.value});
   		
	};
	handleNameChange(e) {
   		this.setState({name: e.target.value});
	};
	handleElement() {
    	this.props.handleElement(this.state.name, this.state.email);
	};
	render() {
		return (
			<div >
				<div className='flex justify-around'>
					<div className='pl5'>
						<input 
							className='pa3 b1 b--green bg-lightest-blue'
							type='text' 
							placeholder='name' 
							value={this.state.name}
							id='name'
							onChange={this.handleNameChange}
						/>
					</div>
					<div className='pl2 '>
						<input 
							className='pa3 b1 b--green bg-lightest-blue'
							type='email' 
							placeholder='email' 
							value={this.state.email}
							id='email'
							onChange={this.handleEmailChange}
						/>
					</div>
				</div>
				<div className='pt2 pl5'>
					<input type='submit' value='Add robot' onClick={this.handleElement} className='pa3 bg-lightest-blue b--green'/>
				</div>
			</div>
		);
	}
}

export default Form;