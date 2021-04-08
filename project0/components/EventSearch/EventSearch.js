import { useRef } from "react";

import Button from "../shared/Button/Button";
import classes from "./EventSearch.module.css";

const EventSearch = (props) => {
    const yearRef = useRef();
    const monthRef = useRef();
    const onSubmitHandler = (e) => {
        e.preventDefault();
        props.onSearch(yearRef.current.value, monthRef.current.value);
    };
    return (
        <form className={classes.form} onSubmit={onSubmitHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="year">Year</label>
                    <select name="year" id="year" ref={yearRef}>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="month">Month</label>
                    <select name="month" id="month" ref={monthRef}>
                        <option value="1">Jan</option>
                        <option value="2">Feb</option>
                        <option value="3">Mar</option>
                        <option value="4">Apr</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">Aug</option>
                        <option value="9">Sept</option>
                        <option value="10">Oct</option>
                        <option value="11">Nov</option>
                        <option value="12">Dec</option>
                    </select>
                </div>
            </div>
            <Button>Find events</Button>
        </form>
    );
};

export default EventSearch;
