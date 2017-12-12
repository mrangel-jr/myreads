import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import debounce from 'lodash/debounce';
import './searchbar.css';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { query:'' };
    this.submitQuery = debounce(() => this.props.onSearch(this.state.query),200);
    this.updateQuery = this.updateQuery.bind(this);
    this.selectedBook = this.props.selectedBook;
  }

  updateQuery(e) {
    (
      async () => {
        const value = e.target.value;
        await this.setState({ query: e.target.value });
        this.setState({ query: value });
        this.submitQuery();
    })();
  }

  render() {

    const {clearSearch} = this.props;
    const {query} = this.state;
    return (
      <div className="searchbar">
      <Link className="fa fa-arrow-left button-icon" aria-hidden="true" to="/" onClick={clearSearch}/>      
        <input
          className="input-data"
          type="text"
          placeholder="Type something to find a book"
          value={query}
          onChange={this.updateQuery}
        />
      </div>
    );
  }
}

export default SearchBar;
