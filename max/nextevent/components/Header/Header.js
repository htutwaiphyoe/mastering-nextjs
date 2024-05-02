import Link from "next/link";
import classes from "./Header.module.css";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href="/">NextEvents</Link>
            </div>
            <ul className={classes.navigation}>
                <li>
                    <Link href="/events">All events</Link>
                </li>
            </ul>
        </header>
    );
};
export default Header;
