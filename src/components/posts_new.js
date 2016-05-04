import React, { Component } from 'react';
import { reduxForm  } from 'redux-form';
import { createPost } from '../actions/index'; 

class PostsNew extends Component {  
    render() {
        const { fields: { title, categories, content}, handleSubmit } = this.props;
        
        return (
            <form onSubmit={handleSubmit(this.props.createPost)}>
                <h3>Create A New Post</h3>
                
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />
                    <div className="text-help">
                    {title.touched ? title.error : ""}
                    </div>
                </div>
                
                <div className="form-group">
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories}  />
                </div>
                
                <div className="form-group">
                    <label>Content</label>
                    <input type="text" className="form-control" {...content} />
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>      
            </form>
        );   
    }
}

function validate(values){
    const errors = {};
    
    if(!values.title){
        errors.title = "Please enter a username";
    }
    
    if(!values.categories){
        errors.title = "Please enter a category";
    }
    
    if(!values.content){
        errors.title = "Please enter some content";
    }
    
    return errors;
}

// Connect:
// first arg is mapStateToProps, 
// 2nd arg is mapDispatchToProps
// ReduxForm:
// 1st is form config
// 2nd arg is mapStateToProps, 
// 3rd arg is mapDispatchToProps
export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content']   
}, null, {createPost})(PostsNew);

//export default connect(null, {fetchPosts: fetchPosts })(PostsNew);