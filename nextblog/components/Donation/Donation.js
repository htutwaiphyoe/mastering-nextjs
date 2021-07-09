import Image from "next/image";

import classes from "./Donation.module.css";

const Donation = (props) => {
    return (
        <section className={classes.Donation}>
            <figure>
                <h2>
                    You can donate money <br /> starting from 100 kyats.
                </h2>
                <Image src="/images/site/kbzpay.jpg" width="300" height="450" />
            </figure>
        </section>
    );
};

export default Donation;
