import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './searchbar.css';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { query:'' };

    this.submitQuery = this.submitQuery.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
  }

  updateQuery(e) {
    this.setState({ query: e.target.value });
  }


  submitQuery(e) {
    e.preventDefault();
    this.props.onSearch(this.state.query);
  }

  render() {

    const {clearSearch} = this.props;
    return (
      <form className="form-searchbar" onSubmit={this.submitQuery}>
      <Link className="fa fa-arrow-left button-icon" aria-hidden="true" to="/" onClick={() => clearSearch()}/>      
        <input
          className="input-data"
          type="text"
          placeholder="Type something to find a book"
          value={this.state.query}
          onChange={this.updateQuery}
        />
        <button className="fa fa-search button-icon" aria-hidden="true" type="submit" />
      </form>
    );
  }
}

export default SearchBar;
