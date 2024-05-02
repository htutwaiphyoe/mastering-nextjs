import Image from "next/image";

import classes from "./Hero.module.css";

function Hero() {
    return (
        <section className={classes.hero}>
            <figure className={classes.image}>
                <Image
                    src="/images/site/profile.jpg"
                    width="300"
                    height="300"
                    alt="Profile Picture"
                />
            </figure>
            <h1>Hi, I'm HWP</h1>
            <p>I write aritcles about web development - especially for JavaScript and MERN Stack</p>
        </section>
    );
}

export default Hero;
