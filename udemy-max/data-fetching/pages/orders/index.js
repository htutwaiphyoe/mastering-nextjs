import { useState, useEffect } from "react";
import useSWR from "swr";

const Orders = (props) => {
    const [ingredients, setIngredients] = useState(props.ingredients);

    const { data, error } = useSWR("https://burgerbuilder-413b0.firebaseio.com/ingredients.json");
    useEffect(() => {
        if (data) {
            let ingredients = Object.keys(data).map((key) => ({ id: key, amount: data[key] }));
            setIngredients(ingredients);
        }
    }, [data]);

    if (error) {
        return <p>Failed to load</p>;
    }

    return (
        <ul>
            {ingredients.map((ingredient) => (
                <li key={ingredient.id}>
                    {ingredient.id} - {ingredient.amount}
                </li>
            ))}
        </ul>
    );
};

export async function getStaticProps(context) {
    const data = await (
        await fetch("https://burgerbuilder-413b0.firebaseio.com/ingredients.json")
    ).json();

    let ingredients = Object.keys(data).map((key) => ({ id: key, amount: data[key] }));
    return {
        props: {
            ingredients,
        },
    };
}
export default Orders;
