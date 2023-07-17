import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MealsDetailsCard from '../Components/MealsDetailsCard';

const Meals = () => {


    const { id } = useParams();

    const [meals, setMeals] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/category-meals?categoryId=${id}`)
            .then(res => res.json())
            .then((data) => {

                setMeals(data)
            });
    }, [id]);


    return (
        <div className="mt-5">
            <div className="text-3xl font-bold">
                All meals are here
            </div>
            <div className="grid grid-cols-3 gap-5 mt-5 my-5 px-10">
                {meals?.map((meal => (
                    <MealsDetailsCard meal={meal} key={meal?._id}></MealsDetailsCard>
                )))}
            </div>
        </div>

    );
};

export default Meals;