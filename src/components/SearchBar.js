import React from 'react';


class SearchBar extends React.Component {
state = {term: 'Insert criteria and press enter'};

onInputChange = (event) => {
        this.setState({term: event.target.value});
        
    };
onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  }

  render () {    

    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
            <label>Video Search</label>
          <input 
          onChange={this.onInputChange}
            placeholder={this.state.term}
            type="text" 
            
          />
        </form> 
      </div>
    );
  }
} 

export default SearchBar;
