import React,{Component} from 'react';
import {Media} from 'reactstrap';
import {Card, CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';

class DishDetail extends Component{


renderDish(dish) {
    if (dish != null)
        return(
            <Card className="col-12 col-md-5 m-1">
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


renderComments(comments)
{
  if(comments!=null)
    {   
        return(
            <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">
            {comments.map(comment=>(
                <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>--{comment.author}, {comment.date}</p>
                </li>
            ))}
        </ul>
        </div>
        );
        
    }
    else
        return(
            <div></div>
        );
}



render() {
    if (this.props.dish === null) {
      return ( <div/> );
    }
    else {
      return (
        <div className='row text-left'>
          {this.renderDish(this.props.dish)}
          {this.renderComments(this.props.dish.comments)}
        </div>
      );
    }
  }

}

export default DishDetail;