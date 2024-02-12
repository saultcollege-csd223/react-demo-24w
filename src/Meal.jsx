import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

export default function Meal() {

    const { id } = useParams();

    const [mealInfo, setMealInfo] = useState({});

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${encodeURIComponent(id)}`)
            .then(response => response.json())
            .then(data => {
                setMealInfo({
                    title: data.meals[0].strMeal,
                    category: data.meals[0].strCategory,
                    instructions: data.meals[0].strInstructions
                })
            })
    }, [id]);

    return (
        mealInfo.title === undefined ?
        <div>Loading...</div>
        :
        <div>
           <h1>Meal</h1>
           <h2>{mealInfo.title}</h2>
           <h3>{mealInfo.category}</h3>
           <p>{mealInfo.instructions}</p>
        </div>
    )
}