import React, { useEffect, useState } from 'react';
import DrinksCard from '../Components/DrinksCard';

const Drinks = () => {

    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/drinks-collection?type=ordenary_drinks`)
            .then(res => res.json())
            .then((data) => {
                setDrinks(data);
            });
    }, []);


    return (
        <div className="text-3xl font-bold mt-5">
            <h1>Choose your favourite drinks</h1>
            <div className="grid grid-cols-3 gap-5 mt-5 my-5 px-10">
                {
                    drinks?.map((drink => (
                        <DrinksCard key={drink?._id} drink={drink}></DrinksCard>
                    )))
                }
            </div>
        </div>
    );
};

export default Drinks;