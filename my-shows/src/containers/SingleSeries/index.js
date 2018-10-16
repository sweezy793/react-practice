import React,{Component} from 'react';

class SingleSeries extends Component{
    render(){

        return(
            <div>
                <p>Single Series id:{this.props.match.params.id}</p>
            </div>
        )
    }
}

export default SingleSeries; 