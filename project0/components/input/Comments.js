import { useState } from "react";

import CommentList from "./CommentList";
import NewComment from "./NewComment";
import classes from "./Comments.module.css";

function Comments(props) {
    const { eventId } = props;

    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);

    async function toggleCommentsHandler() {
        setShowComments((prevStatus) => !prevStatus);
        if (!showComments) {
            const response = await (await fetch("/api/comments/" + eventId)).json();
            setComments(response.comments);
        }
    }

    async function addCommentHandler(commentData) {
        const respone = await (
            await fetch("/api/comments/" + eventId, {
                method: "POST",
                body: JSON.stringify(commentData),
                headers: { "Content-Type": "application/json" },
            })
        ).json();
        console.log(respone);
    }

    return (
        <section className={classes.comments}>
            <button onClick={toggleCommentsHandler}>
                {showComments ? "Hide" : "Show"} Comments
            </button>
            {showComments && <NewComment onAddComment={addCommentHandler} />}
            {showComments && <CommentList items={comments} />}
        </section>
    );
}

export default Comments;
