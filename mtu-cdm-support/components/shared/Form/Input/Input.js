import classes from "./Input.module.scss";

const Input = (props) => {
    const classNames = [classes.Input];

    if (!props.valid && props.touch) {
        classNames.push(classes.Input__Invalid);
    }
    switch (props.type) {
        case "textarea":
            return (
                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    className={classNames.join(" ")}
                    {...props.config}
                    value={props.value}
                    onChange={props.onChangeHandler}
                />
            );
        case "select":
            return (
                <select
                    name=""
                    id=""
                    className={classNames.join(" ")}
                    value={props.value}
                    onChange={props.onChangeHandler}
                >
                    {props.options.map((option, i) => (
                        <option value={option.value} key={i}>
                            {option.shownValue}
                        </option>
                    ))}
                </select>
            );
        default:
            return (
                <input
                    type="text"
                    className={classNames.join(" ")}
                    {...props.config}
                    value={props.value}
                    onChange={props.onChangeHandler}
                />
            );
    }
};

export default Input;
