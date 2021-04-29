import classes from "./ContactForm.module.css";

function ContactForm(props) {
    return (
        <section className={classes.contact}>
            <h1>Get in touch with me</h1>
            <form className={classes.form}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Your name" required />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Your email" required />
                    </div>
                </div>
                <div className={classes.control}>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" placeholder="Your message" required rows="5" />
                </div>
                <div className={classes.actions}>
                    <button type="submit">Send message</button>
                </div>
            </form>
        </section>
    );
}

export default ContactForm;
