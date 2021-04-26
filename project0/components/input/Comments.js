import { useState, useContext } from "react";

import NotificationContext from "../../context/notificationContext";
import CommentList from "./CommentList";
import NewComment from "./NewComment";
import classes from "./Comments.module.css";

function Comments(props) {
    const { eventId } = props;
    const notificationContext = useContext(NotificationContext);

    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);

    async function toggleCommentsHandler() {
        setShowComments((prevStatus) => !prevStatus);
        if (!showComments) {
            notificationContext.showNotification({
                title: "Loading",
                status: "pending",
                message: "Loading comments...",
            });
            const response = await (await fetch("/api/comments/" + eventId)).json();
            setComments(response.comments ? response.comments : []);

            if (response.status === "success") {
                notificationContext.showNotification({
                    title: "Success",
                    status: "success",
                    message: "Loaded comments successfully",
                });
            } else {
                notificationContext.showNotification({
                    title: "Error",
                    status: "error",
                    message: response.message || "Something went wrong!",
                });
            }
        }
    }

    async function addCommentHandler(commentData) {
        notificationContext.showNotification({
            title: "Loading",
            status: "pending",
            message: "Submitting comment...",
        });
        const response = await (
            await fetch("/api/comments/" + eventId, {
                method: "POST",
                body: JSON.stringify(commentData),
                headers: { "Content-Type": "application/json" },
            })
        ).json();

        if (response.status === "success") {
            notificationContext.showNotification({
                title: "Success",
                status: "success",
                message: "Submitted comment successfully",
            });
        } else {
            notificationContext.showNotification({
                title: "Error",
                status: "error",
                message: response.message || "Something went wrong!",
            });
        }
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
