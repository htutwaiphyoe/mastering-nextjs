const Profile = (props) => {
    return <h1>{props.user.username}</h1>;
};

export async function getServerSideProps(context) {
    return {
        props: {
            user: {
                username: "Maii",
            },
        },
    };
}

export default Profile;
