import Link from "next/link";

const Home = (props) => {
    return (
        <main>
            <h1>Home</h1>
            <ul>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/blogs">Blogs</Link>
                </li>
                <li>
                    <Link href="/clients">Clients</Link>
                </li>
            </ul>
        </main>
    );
};

export default Home;
