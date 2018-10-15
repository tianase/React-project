import React from 'react';
import './Card';

const DeleteButton = ({click}) => {
	return (
		<button onClick={click} className='pa3 bg-lightest-blue b--green'>Delete robots</button>
		);
}

export default DeleteButton;