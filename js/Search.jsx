// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import ShowCard from './ShowCard';

class Search extends Component {
  static defaultProps = {
    // <-- DEFAULT PROPS
    shows: [] // undefined gets converted to array,render won't trigger error
  };

  state = {
    searchTerm: ''
  };

  props: {
    shows: Array<Show>
  };
  handleSearchTermChange = (event: SyntheticKeyboardEvent & { target: HTMLInputElement }) => {
    this.setState({ searchTerm: event.target.value });
  };
  render() {
    return (
      <div className="search">
        <Header searchTerm={this.state.searchTerm} handleSearchTermChange={this.handleSearchTermChange} showSearch />
        <div>
          {this.props.shows
            .filter(
              show =>
                `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
