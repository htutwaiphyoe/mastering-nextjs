import classes from "./Box.module.scss";

const Box = (props) => {
    const classNames = [classes.Box];
    if (props.vertical) classNames.push(classes.Box_Vertical);
    return <div className={classNames.join(" ")}>{props.children}</div>;
};

export default Box;
