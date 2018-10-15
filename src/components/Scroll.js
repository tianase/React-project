import React from 'react';

const Scroll = (props) => {
	return (
		<div className='pt4'>
		<div style={{overflowY: 'scroll', border: '5px solid black', height: '450px'}}>
			{props.children}
		</div>
		</div>
	);
};

export default Scroll;