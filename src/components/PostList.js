import React from 'react';

const PostList = (props) => {
    const {posts, onPostEdit} = props;

    const onEditClick = (post) => () => {
        onPostEdit(post);
    };

    return (
        <div>
            <h1>Posts</h1>
            {posts.map(post => {
                return (
                    <div key={post.id}>
                        <hr/>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <button className="btn btn-primary" onClick={onEditClick(post)}>Edit</button>
                    </div>
                )
            })}
        </div>
    );
}

export default PostList;