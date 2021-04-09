const User = (props) => {
    return <h1>{props.id}</h1>;
};

export default User;

export async function getServerSideProps(context) {
    const { params, req, res } = context;
    console.log("Server");
    const id = params.uid;
    return {
        props: {
            id,
        },
    };
}
