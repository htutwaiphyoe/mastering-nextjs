import classes from "./Table.module.scss";

const Table = ({ donors }) => {
    return (
        <table className={classes.Table}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Batch</th>
                    <th>Amount (Ks)</th>
                </tr>
            </thead>
            <tbody>
                {donors.map((el, i) => (
                    <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{el.name}</td>
                        <td>{el.batch}</td>
                        <td>{el.amount}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
