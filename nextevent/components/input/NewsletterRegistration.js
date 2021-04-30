import { useState, useContext } from "react";

import { validateEmail } from "../../helpers/utils";
import NotificationContext from "../../context/notificationContext";
import classes from "./NewsletterRegistration.module.css";

function NewsletterRegistration() {
    const [email, setEmail] = useState("");
    const [valid, setValid] = useState(false);
    const notificationContext = useContext(NotificationContext);
    const onChangeHandler = (e) => {
        setEmail(e.target.value);
        if (validateEmail(e.target.value)) {
            setValid(true);
        }
    };
    async function registrationHandler(event) {
        event.preventDefault();
        notificationContext.showNotification({
            title: "Signing up",
            status: "pending",
            message: "Registering for newsletter...",
        });
        const response = await (
            await fetch("/api/newsletter", {
                method: "POST",
                body: JSON.stringify({ email }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
        ).json();
        if (response.status === "success") {
            notificationContext.showNotification({
                title: "Success",
                status: "success",
                message: "Registeration success",
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
