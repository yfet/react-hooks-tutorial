import React, {useState} from "react";
import PostList from "../PostList";
import PostEdit from "./PostEdit";

const initialPosts = [
    {id: 1, title: "Post 1", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus congue sapien sit amet fringilla. Aliquam sodales lacus eu nisi semper, vel sollicitudin ante tempor. Curabitur facilisis nibh a suscipit ornare"},
    {id: 2, title: "Post 2", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus congue sapien sit amet fringilla. Aliquam sodales lacus eu nisi semper, vel sollicitudin ante tempor. Curabitur facilisis nibh a suscipit ornare"},
    {id: 3, title: "Post 3", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus congue sapien sit amet fringilla. Aliquam sodales lacus eu nisi semper, vel sollicitudin ante tempor. Curabitur facilisis nibh a suscipit ornare"},
    {id: 4, title: "Post 4", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus congue sapien sit amet fringilla. Aliquam sodales lacus eu nisi semper, vel sollicitudin ante tempor. Curabitur facilisis nibh a suscipit ornare"}
];

const Post = (props) => {
    const [posts, setPosts] = useState(initialPosts);
    const [editMode, setEditMode] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    const onPostEdit = (post) => {
        setEditMode(true);
        setSelectedPost(post);
    };

    const onCancelEdit = () => {
        setEditMode(false);
        setSelectedPost(null);
    };

    const onSavePost = (post) => {
        const newPosts = posts.map(item => {
            if (item.id === post.id) {
                return post;
            }
            return item;
        });
        setPosts(newPosts);
        setEditMode(false);
    };

    return (
        <>
            {editMode ? 
            <PostEdit 
                onCancel={onCancelEdit}
                onSave={onSavePost}
                post={selectedPost}
            /> :
            <PostList 
                posts={posts}
                onPostEdit={onPostEdit} 
            /> 
            }
        </>
    )
}

export default Post;