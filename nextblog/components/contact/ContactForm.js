import { useState, useEffect } from "react";

import Notification from "../ui/Notification";
import classes from "./ContactForm.module.css";

function ContactForm(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [notificationStatus, setNotificationStatus] = useState(null);

    useEffect(() => {
        if (notificationStatus && notificationStatus.status !== "pending") {
            const timer = setTimeout(() => {
                setNotificationStatus(null);
            }, 1000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [notificationStatus]);

    async function onSubmitHandler(e) {
        e.preventDefault();

        setNotificationStatus({
            status: "pending",
            title: "Sending message...",
            message: "Your message is on its way.",
        });
        try {
            const response = await (
                await fetch("/api/contact", {
                    method: "POST",
                    body: JSON.stringify({
                        name: name.trim(),
                        email: email.trim(),
                        message: message.trim(),
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
            ).json();
            setName("");
            setEmail("");
            setMessage("");
            if (response.status === "fail" || response.status === "error") {
                throw new Error(response.message || "Something went wrong!");
            }
            setNotificationStatus({
                status: "success",
                title: "Success!",
                message: "Your message has been sent!.",
            });
        } catch (err) {
            console.log(err);
            setNotificationStatus({
                status: "error",
                title: "Error",
                message: err.message || "Ah, something went wrong!",
            });
        }
    }
    return (
        <section className={classes.contact}>
            <h1>Get in touch with me</h1>
            <form className={classes.form} onSubmit={onSubmitHandler}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Your name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Your email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className={classes.control}>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        placeholder="Your message"
                        required
                        rows="5"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <div className={classes.actions}>
                    <button type="submit" disabled={notificationStatus ? true : false}>
                        Send message
                    </button>
                </div>
            </form>
            {notificationStatus && (
                <Notification
                    status={notificationStatus.status}
                    title={notificationStatus.title}
                    message={notificationStatus.message}
                />
            )}
        </section>
    );
}

export default ContactForm;
