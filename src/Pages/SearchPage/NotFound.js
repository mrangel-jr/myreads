import React from 'react';
import './notfound.css';

const NotFound = (props) => {
	return (
		<div className="notFound">
			<i className="fa fa-frown-o"/>
			{props.children}
		</div>
	)
}

export default NotFound;
