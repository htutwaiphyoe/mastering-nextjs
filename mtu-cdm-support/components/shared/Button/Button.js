import classes from "./Button.module.scss";

const Button = (props) => {
    const classNames = [classes.Button];
    if (!props.valid) {
        classNames.push(classes.Button_Disable);
    }
    if (props.link) {
        return (
            <a href={props.url} className={classes.Button}>
                {props.children}
            </a>
        );
    }
    if (props.loading) {
        return (
            <button className={`${classes.Button} ${classes.Button_Disable}`} disabled={true}>
                Loading...
            </button>
        );
    }
    return (
        <button onClick={props.onClick} className={classNames.join(" ")} disabled={!props.valid}>
            {props.children}
        </button>
    );
};

export default Button;
