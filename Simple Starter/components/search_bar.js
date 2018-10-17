import React, {Component} from 'react';

class SearchBar extends Component{

    constructor(props){
        super(props);

        this.state={term:''};
    }

    render(){
        return (
        <div>
            <input onChange={event=>this.setState({term:event.target.value})}/>
            <p>Value of input:{this.state.term}</p>
        </div>
        ); 
    }

    // onInputChange(event){
    //     console.log(event.target.value);
    // } Method can be explicitly defined like this or arrow function as above
}

export default SearchBar;