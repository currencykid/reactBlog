import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index' ;
import { Link } from 'react-router'; 

class PostsIndex extends Component {
  // whenever this comopnent about to mount, fetch data w action creator
  componentWillMount(){
    this.props.fetchPosts(); 
  }

  render(){
    return (
      <div> 
        <div className='text-xs-right'>
          <Link to="/posts/new" className='btn btn-primary'> 
            Create post
          </Link> 
        </div> 
        <div> List of posts </div> 
      </div> 
    );
  }
}

// won't need this w the object we passed as second arg to connect
//function mapDispatchToProps(dispatch){
// return bindActionCreators({ fetchPosts }, dispatch); 
// } 
// also won't need bindActionCreators cuz of this refactor

// first argumnet is state
export default connect(null, { fetchPosts: fetchPosts })(PostsIndex) ; 
// can also do just { fetchPosts } cuz of es6 
