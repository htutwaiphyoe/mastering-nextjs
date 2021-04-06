import Link from "next/link";

const Clients = (props) => {
    const clients = [
        { id: "mtu", name: "Mandalay Technological University" },
        { id: "asdf", name: "sf" },
    ];
    return (
        <main>
            <h1>Clients</h1>
            <ul>
                {clients.map((c, i) => (
                    <li key={i}>
                        <Link
                            href={{
                                pathname: "/clients/[name]",
                                query: { name: c.id },
                            }}
                        >
                            {c.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default Clients;
