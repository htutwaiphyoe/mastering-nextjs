import { useRef } from "react";
import classes from "./Navigation.module.scss";
import Logo from "./Logo/Logo";
import NavigationItem from "./NavigationItem/NavigationItem";

const Navigation = (props) => {
    const items = useRef([
        { url: "/", icon: "home-sharp", text: "Home" },
        { url: "/about", icon: "information-circle-sharp", text: "About" },
        { url: "/donation", icon: "people-sharp", text: "Donation" },
        { url: "/contact", icon: "call-sharp", text: "Contact" },
    ]);
    return (
        <header>
            <Logo />
            <nav className={classes.Navigation}>
                <ul className={classes.Navigation__List}>
                    {items.current.map((el, i) => (
                        <NavigationItem {...el} key={i} />
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;
