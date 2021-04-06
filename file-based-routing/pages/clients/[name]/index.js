import { useRouter } from "next/router";

const Client = (props) => {
    const router = useRouter();
    console.log(router);
    const onClickHandler = () => {
        router.push({
            pathname: "/clients/[name]/projects",
            query: { name: "mtu" },
        });
    };
    return (
        <main>
            <h1>Client</h1>
            <button onClick={onClickHandler}>Go to projects</button>
        </main>
    );
};

export default Client;
