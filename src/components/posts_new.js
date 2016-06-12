import React , {Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router'; 

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  }; 


  onSubmit(props){
    this.props.createPost(props)
      .then(()=>{ 
      //blogpost has ben created, navigate user to index
      // we navigate by calling this.context.router.push with 
        // the new path to navigate to
      
      this.context.router.push('/'); 
      });
  }

  render(){
//    const handleSubmit = this.props.handleSubmit; got this helper from redux form
    const { fields: {title,categories,content}, handleSubmit } = this.props;     
    console.log(title); 

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}> 
        <h3> Create New Post </h3> 

        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`} >
            <label> Title</label> 
            <input type="text" className="form-control" {...title} />
            <div className="text-help">
              {title.touched ? title.error : ''}
            </div>
        </div> 

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
            <label> Categories </label> 
            <input type="text" className="form-control" {...categories} />
            <div className="text-help">
              {categories.touched ? categories.error : ''}
            </div>
        </div> 

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
            <label> Content </label> 
            <textarea className="form-control" {...content}/>
            <div className="text-help">
              {content.touched ? content.error : ''}
            </div>
        </div> 

        <button type="submit" className="btn btn-primary">Create</button> 
        <Link to='/' className="btn btn-danger">Cancel</Link> 
      </form> 
    );
  }
}

function validate(values){
  const errors = {};
    
  if(!values.title){
    errors.title = "Enter a title"; 
  }

  if(!values.categories){
    errors.categories= "Enter categories"; 
  }

  if(!values.content){
    errors.content= "Enter some content"; 
  }

  return errors; 
}

export default reduxForm({
  // the name of the form doenst have to match the anme of the component
 form: 'PostsNewForm' ,
 fields: [ 'title', 'categories', 'content' ],
 validate
}, null, { createPost })(PostsNew); 

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
