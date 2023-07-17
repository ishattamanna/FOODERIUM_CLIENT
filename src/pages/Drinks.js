import React, { useEffect, useState } from 'react';
import DrinksCard from '../Components/DrinksCard';

const Drinks = () => {

    const [drinks, setDrinks] = useState([]);
    const [requiredCategory, setRequiredCategory] = useState("Cocktel");

    useEffect(() => {
        fetch(`http://localhost:5000/drinks-collection?type=${requiredCategory}`)
            .then(res => res.json())
            .then((data) => {
                setDrinks(data);
            });
    }, [requiredCategory]);


    const handleDrinksCategory = () => {
        if (requiredCategory === "ordenary_drinks") {
            setRequiredCategory("Cocktel")
        }
        else {
            setRequiredCategory("ordenary_drinks")
        }

        console.log(requiredCategory);

    }


    return (
        <div className="mt-5">
            <h1 className="text-3xl font-bold">Choose your favourite drinks</h1>
            <div className="flex justify-center mt-5">

                <div className={`badge ${requiredCategory === "ordenary_drinks" ? "badge-primary" : "badge-neutral"}`}>Ordenary Drinks</div>
                <input onChange={handleDrinksCategory} type="checkbox" className="toggle toggle-success mx-5" />
                <div className={`badge ${requiredCategory === "Cocktel" ? "badge-primary" : "badge-neutral"}`}>Cocktel</div>

            </div>
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