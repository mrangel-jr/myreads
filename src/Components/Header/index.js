import React from 'react';
import PropTypes from 'prop-types';
import "./header.css";

const Header = ({title}) => {
	
	Header.propTypes = {
		title: PropTypes.string
	}

	return (
		<div className="diagonal-gradient">
  			<div className="img-logo"></div>
  			<h1 className="text-logo">{title}</h1>
		</div>
	);

};

export default Header;