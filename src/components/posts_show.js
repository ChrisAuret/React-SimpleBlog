import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component {
 
 render() {
     return <div>Show post {this.props.params.id}</div>
 }
    
}

export default PostsShow;