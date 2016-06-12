import React, {Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost , deletePost } from '../actions/index' ;
import { Link } from 'react-router';

class PostShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  }; 

  componentWillMount(){
    this.props.fetchPost(this.props.params.id); 
  }

  onDeleteClick(){
    // pass in action creator deletePost
    this.props.deletePost(this.props.params.id)
    .then(() => { this.context.router.push('/');  });
  }

  render(){
    const {post} = this.props; 
    // const post = this.props.post; 
    if (!post) {
      return <div> Loading... </div> ; 
    }

    return (
      <div> 
      <Link to="/">All Posts</Link> 
        <button 
          onClick={this.onDeleteClick.bind(this)}
          className="btn btn-danger pull-xs-right">Delete</button> 
        <h3> {post.title} </h3> 
        <h6> Categories: {post.categories} </h6>
        <p> {post.content} </p> 
      </div>  
    );
  }
}

function mapStateToProps(state){
  return { post: state.posts.post }
}

export default connect(mapStateToProps, { fetchPost: fetchPost, deletePost: deletePost })(PostShow) ; 
// mapStateToProps arg was null cuz we're not mapping any state to props,, not null anymore
