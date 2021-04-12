import Image from "next/image";

import classes from "./Logo.module.scss";
const Logo = (props) => {
    return (
        <figure className={classes.Logo}>
            <Image
                src="/imgs/logo192.png"
                alt="MTU logo"
                className={classes.Logo__Image}
                width={50}
                height={50}
                priority={true}
            />
        </figure>
    );
};

export default Logo;
