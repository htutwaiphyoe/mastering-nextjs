import { useState } from "react";
import classes from "./auth-form.module.css";

function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function switchAuthModeHandler() {
        setIsLogin((prevState) => !prevState);
    }

    async function onSubmitHandler(e) {
        e.preventDefault();
        let url = "signup";
        if (isLogin) {
            url = "login";
        }

        const response = await (
            await fetch(`/api/auth/${url}`, {
                method: "POST",
                body: JSON.stringify({
                    email: email.trim(),
                    password: password.trim(),
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
        ).json();

        console.log(response);
    }

    return (
        <section className={classes.auth}>
            <h1>{isLogin ? "Login" : "Sign Up"}</h1>
            <form onSubmit={onSubmitHandler}>
                <div className={classes.control}>
                    <label htmlFor="email">Your Email</label>
                    <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        placeholder="Your email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="password">Your Password</label>
                    <input
                        type="password"
                        id="password"
                        required
                        value={password}
                        placeholder="Your password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className={classes.actions}>
                    <button type="submit">{isLogin ? "Login" : "Create Account"}</button>
                    <button
                        type="button"
                        className={classes.toggle}
                        onClick={switchAuthModeHandler}
                    >
                        {isLogin ? "Create new account" : "Login with existing account"}
                    </button>
                </div>
            </form>
        </section>
    );
}

export default AuthForm;
