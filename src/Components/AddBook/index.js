import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './addbook.css';


const AddBook = ({clearSearch}) => {

	AddBook.propTypes = {
		clearSearch: PropTypes.func
	}

	return (
		<Link className="scroll" to="/search" onClick={clearSearch}></Link>
	);

}

export default AddBook;