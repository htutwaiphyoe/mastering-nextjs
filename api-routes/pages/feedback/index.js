import { getFileData } from "../api/feedback";

const Feedback = (props) => {
    return (
        <main>
            <ul>
                {props.feedbacks.map((f) => (
                    <li key={f.id}>{f.feedback}</li>
                ))}
            </ul>
        </main>
    );
};

export const getStaticProps = async (context) => {
    const feedbacks = await getFileData();

    return {
        props: {
            feedbacks,
        },
    };
};
export default Feedback;
