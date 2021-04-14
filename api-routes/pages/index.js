import { useRef } from "react";

const Home = () => {
    const emailRef = useRef("");
    const feedbackRef = useRef("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const feedback = feedbackRef.current.value;
        fetch({
            url: "http://localhost:3000/api/feedback",
            method: "POST",
            body: JSON.stringify({ email, feedback }),
        });
    };
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
        </main>
    );
};

export default Home;
