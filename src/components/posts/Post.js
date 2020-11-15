import React from "react";

const posts = [
    {id: 1, title: "Post 1", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus congue sapien sit amet fringilla. Aliquam sodales lacus eu nisi semper, vel sollicitudin ante tempor. Curabitur facilisis nibh a suscipit ornare"},
    {id: 2, title: "Post 2", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus congue sapien sit amet fringilla. Aliquam sodales lacus eu nisi semper, vel sollicitudin ante tempor. Curabitur facilisis nibh a suscipit ornare"},
    {id: 3, title: "Post 3", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus congue sapien sit amet fringilla. Aliquam sodales lacus eu nisi semper, vel sollicitudin ante tempor. Curabitur facilisis nibh a suscipit ornare"},
    {id: 4, title: "Post 4", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus congue sapien sit amet fringilla. Aliquam sodales lacus eu nisi semper, vel sollicitudin ante tempor. Curabitur facilisis nibh a suscipit ornare"}
];

const Post = (props) => {
    return (
        <div>
            <h1>Posts</h1>
            {posts.map(post => {
                return (
                    <div key={post.id}>
                        <hr/>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Post;