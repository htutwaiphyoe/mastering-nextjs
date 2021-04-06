import { useRouter } from "next/router";

const Project = (props) => {
    const router = useRouter();
    console.log(router);
    return (
        <main>
            <h1>Project</h1>
        </main>
    );
};

export default Project;
