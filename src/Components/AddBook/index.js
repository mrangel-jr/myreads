import React from 'react';
import { Link } from 'react-router-dom';
import './addbook.css';


const AddBook = ({clearSearch}) => {

	return (
		<Link className="scroll" to="/search" onClick={() => clearSearch()}></Link>
	);
}

export default AddBook;