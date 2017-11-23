import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import escapeRegExp from 'escape-string-regexp';
import * as BooksAPI from './BooksAPI';
import './App.css'

class SearchBooks extends Component {
	
	state = {
		query: ''
	}

	updateQuery = (query) => {
		this.setState({	query: query.trim() });
	}

	render() {

		const { query } = this.state;
		const { onUpdateBook } = this.props;

		let search = [];

		if (query) {
			BooksAPI.search(query,20).then((books) => {
				// || match.test(book.authors.toString())
				const match = new RegExp(escapeRegExp(query),"i")
				search = books.filter((book) => match.test(book.title) )
				console.log(search)
			});
		}

		console.log(search)

		// search = searchBook(query);


		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to="/">Close</Link>
					<div className="search-books-input-wrapper">
						{/*
						NOTES: The search from BooksAPI is limited to a particular set of search terms.
						You can find these search terms here:
						https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

						However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
						you don't find a specific author or title. Every search is limited by search terms.
						*/}
						<input 
							type="text"
							placeholder="Search by title or author"
							value={query}
							onChange={(event) => this.updateQuery(event.target.value)}
						/>

					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{
		                  	search.map( (book) =>
			                    <li key={book.title}>
			                      {book.title}
			                    </li>
		                  	)
		                  }
					</ol>
				</div>
			</div>
		)
	}
}

export default SearchBooks;