import { useState } from "react";

import { validateEmail } from "../../helpers/utils";
import classes from "./NewsletterRegistration.module.css";

function NewsletterRegistration() {
    const [email, setEmail] = useState("");
    const [valid, setValid] = useState(false);
    const onChangeHandler = (e) => {
        setEmail(e.target.value);
        if (validateEmail(e.target.value)) {
            setValid(true);
        }
    };
    async function registrationHandler(event) {
        event.preventDefault();

        const response = await (
            await fetch("/api/newsletter", {
                method: "POST",
                body: JSON.stringify({ email }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
        ).json();
        console.log(response);
    }

    return (
        <section className={classes.newsletter}>
            <h2>Sign up to stay updated!</h2>
            <form onSubmit={registrationHandler}>
                <div className={classes.control}>
                    <input
                        type="email"
                        id="email"
                        placeholder="Your email"
                        aria-label="Your email"
                        required
                        onChange={onChangeHandler}
                    />
                    <button disabled={valid ? false : true}>Register</button>
                </div>
            </form>
        </section>
    );
}

export default NewsletterRegistration;
