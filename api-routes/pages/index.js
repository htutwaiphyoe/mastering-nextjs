import { useRef, useEffect, useState } from "react";

const Home = () => {
    const emailRef = useRef("");
    const feedbackRef = useRef("");

    const [feedbacks, setFeedbacks] = useState([]);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const feedback = feedbackRef.current.value;
        const data = await (
            await fetch("/api/feedback", {
                method: "POST",
                body: JSON.stringify({ email, feedback }),
                headers: { "Content-Type": "application/json" },
            })
        ).json();
        console.log(data);
    };
    const getFeedbacks = async () => {
        const response = await (await fetch("/api/feedback")).json();

        setFeedbacks(response.data.feedbacks);
    };

    useEffect(() => {
        getFeedbacks();
    }, []);
    return (
        <main>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        ref={emailRef}
                    />
                </div>
                <div>
                    <label htmlFor="feedback">Feedback</label>
                    <textarea
                        name="feedback"
                        id="feedback"
                        rows="10"
                        cols="30"
                        placeholder="Feedback"
                        ref={feedbackRef}
                    />
                </div>
                <button type="submit">Send Feedback</button>
            </form>
            <ul>
                {feedbacks.map((f) => (
                    <li key={f.id}>{f.feedback}</li>
                ))}
            </ul>
        </main>
    );
};

export default Home;
