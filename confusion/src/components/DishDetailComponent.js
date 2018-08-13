import React,{Component} from 'react';
import {Media} from 'reactstrap';
import {Card, CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';

class DishDetail extends Component{


renderDish(dish) {
    if (dish != null)
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    else
        return(
            <div></div>
        );
}

// renderComments(comments) {
//     if (comments != null)
//         return(
//             <div>
//                 <h4>Comments</h4>
//             </div>
            
//         );
//     else
//         return(
//             <div></div>
//         );
// }

render(){
   return(
       <div className="container">
        <div className="row">
            <div  className="col-12 col-md-5 m-1">
                {this.renderDish(this.props.dish)}
            </div>
        </div>
            {/* <div  className="col-12 col-md-5 m-1">
                {this.renderComments(this.props.dish.comments)}
            </div> */}
        
       </div>
   ); 
}

}

export default DishDetail;