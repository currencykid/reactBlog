import React , {Component } from 'react';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {
  render(){
    return(
      <form> 

        <h3> Create New Post </h3> 
        <div className="form-group">
            <label> Title</label> 
            <input type="text" className="form-control" />
        </div> 
        <div className="form-group">
            <label> Categories </label> 
            <input type="text" className="form-control" />
        </div> 
        <div className="form-group">
            <label> Content </label> 
            <textarea className="form-control" />
        </div> 

        <button type="submit" className="btn btn-primary">Create</button> 
      </form> 
    );
  }
}

export default reduxForm({
  // the name of the form doenst have to match the anme of the component
 form: 'PostsNewForm' ,
 fields: [ 'title', 'categories', 'content' ], 

})(PostsNew); 

// this happens behnd the scenes on App state
// state === {
//  form: //form the name of the reducer,,, {
//    PostsNewForm: {
//        title: '...asdfnew input',
//        categories: 'one, house, dolls, dogs',
//        content: ' ajsldfkja  new content'
//    }
//  }
// }
