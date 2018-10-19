import React, {Component} from 'react';

class SearchBar extends Component{

    constructor(props){
        super(props);

        this.state={term:''};
    }

    render(){
        return (
        <div className="search-bar">
            <input onChange={event=>this.setState({term:event.target.value})}/>
        </div>
        ); 
    }

    // onInputChange(event){
    //     console.log(event.target.value);
    // } Method can be explicitly defined like this or arrow function as above
}

export default SearchBar;