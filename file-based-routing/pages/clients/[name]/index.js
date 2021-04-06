import { useRouter } from "next/router";

const Client = (props) => {
    const router = useRouter();
    console.log(router);
    return (
        <main>
            <h1>Client</h1>
        </main>
    );
};

export default Client;
