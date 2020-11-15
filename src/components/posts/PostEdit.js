import React, {useState}  from "react";

const PostEdit = (props) => {
    const {onCancel, post, onSave} = props;
    const [title, setTitle] = useState(post ? post.title : "");
    const [body, setBody] = useState(post ? post.body : "");

    const onCancelClick = () => {
        onCancel();
    };

    const onTitleChange = (event) => {
        setTitle(event.target.value);
    }

     const onBodyChange = (event) => {
        setBody(event.target.value);
    }

    const onSaveClick = (event) => {
        event.preventDefault();
        onSave({id: post.id, title, body});
    }

    return (
        <form onSubmit={onSave}>
            <div className="form-group">
                <label htmlFor="post-title">Title</label>
                <input value={title} onChange={onTitleChange} type="text" id="post-title" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="post-body">Body</label>
            <textarea
                value={body}
                onChange={onBodyChange} 
                id="post-body" 
                className="form-control" 
                rows="5" 
            />
            </div>
            <div className="row">
                <div className="col-6">
                    <button 
                        type="button" 
                        className="btn btn-danger btn-block" 
                        onClick={onCancelClick}>
                    Cancel
                    </button>
                </div>
                <div className="col-6">
                <button 
                    type="submit" 
                    className="btn btn-primary btn-block" 
                    onClick={onSaveClick}>
                Save
                </button>
                </div>
            </div>
        </form>
    )
};

export default PostEdit;