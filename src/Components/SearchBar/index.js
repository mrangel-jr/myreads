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
    (
      async () => {
        await this.setState({ query: e.target.value });
        this.submitQuery();
    })();
  }


  submitQuery() {
    this.props.onSearch(this.state.query);
  }

  render() {

    const {clearSearch} = this.props;
    return (
      <div className="searchbar">
      <Link className="fa fa-arrow-left button-icon" aria-hidden="true" to="/" onClick={() => clearSearch()}/>      
        <input
          className="input-data"
          type="text"
          placeholder="Type something to find a book"
          value={this.state.query}
          onChange={this.updateQuery}
        />
      </div>
    );
  }
}

export default SearchBar;
