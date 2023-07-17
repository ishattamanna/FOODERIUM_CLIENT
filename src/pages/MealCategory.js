import React, { useEffect, useState } from 'react';
import MealsCard from '../Components/MealsCard';

const MealCategory = () => {

    const [mealsCategory, setMealsCategory] = useState([]);


    useEffect(() => {
        fetch("http://localhost:5000/meals-collection")
            .then(res => res.json())
            .then((data) => {

                setMealsCategory(data);
            });
    }, []);



    return (
        <div className="mt-5">
            <h1 className="text-3xl font-bold">Choose your favourite meals category</h1>
            <div className="grid grid-cols-3 gap-5 mt-5 my-5 px-10">
                {mealsCategory?.map((category) => (
                    <MealsCard key={category?.id} category={category}></MealsCard>
                ))}
            </div>

        </div>
    );
};

export default MealCategory;