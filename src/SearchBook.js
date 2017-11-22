import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './utils/BooksAPI'
import './App.css';



class SearchBook extends Component {

	state = {
		query: ''
	}

	updateQuery = (query) => {
		this.setState({query: query.trim()})
	}

	clearQuery = () => {
		this.setState({query:''})
	}

	searchBooks(query) {
		BooksAPI.search(query).then( (books) =>
			console.log(books)
		)
	}

	render() {

		// const { searchBook } = this.props;
		const { query } = this.state;

		let showingContacts
		if (query) {
			// const match = new RegExp(escapeRegExp(query),"i")
			// showingContacts = contacts.filter((contact) => match.test(contact.name))
			this.searchBooks(query)
		} 

		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to="/">Close</Link>
					<div className="search-books-input-wrapper">
					{
					  // NOTES: The search from BooksAPI is limited to a particular set of search terms.
					  // You can find these search terms here:
					  // https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

					  // However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
					  // you don't find a specific author or title. Every search is limited by search terms.
					}
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
						books.filter( book => typeShelf.key === book.shelf).map( book =>
							<li key={book.title}>
								<div className="book">
									<div className="book-top">
										<div className="book-cover" style={{ width: 128, height: 190, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
											<div className="book-shelf-changer">
												<select value={typeShelf.key} onChange={(event) => onUpdateBook(book,event.target.value)
					                            }>
													<option key="moveTo" value="none" disabled>Move to...</option>
													{
														Globals.typesShelf.map( types =>
															<option key={types.key} value={types.key}> {types.value} </option>
														)
													}
					                              	<option key="none" value="none"> None </option>
												</select>
											</div>
										</div>
											<div className="book-title">{book.title}</div>
											<div className="book-authors">{book.authors.toString()}</div>
								</div>
							</li>
						)
					}
					</ol>
				</div>
			</div>
		)
	}
}

export default SearchBook;