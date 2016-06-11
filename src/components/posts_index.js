import React, {Component} from 'react';

class PostsIndex extends Component {
	componentWillMount(){
		console.log("This would be agood time to call action creator to get posts"); 
	}

	render(){
		return (
			<div> List of posts </div> 
		);
	}
}

export default PostsIndex; 
