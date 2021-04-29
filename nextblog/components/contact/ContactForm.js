import { useState } from "react";

import classes from "./ContactForm.module.css";

function ContactForm(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    async function onSubmitHandler(e) {
        e.preventDefault();
        const respone = await (
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
        console.log(respone);
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
                    <button type="submit">Send message</button>
                </div>
            </form>
        </section>
    );
}

export default ContactForm;
