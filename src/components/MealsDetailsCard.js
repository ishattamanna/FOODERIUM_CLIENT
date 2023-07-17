import React from 'react';

const MealsDetailsCard = ({ meal }) => {

    console.log(meal);

    const { categoryId, idMeal, strMeal, strMealThumb, _id } = meal;

    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img className="h-[300px] w-full" src={strMealThumb} alt={strMeal} /></figure>
            <div className="card-body">
                <h2 className="card-title">{strMeal}</h2>
                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                {/* <div className="badge badge-neutral">Category : {}</div> */}
                <div className="card-actions justify-end">
                    <button className="btn btn-primary btn-sm">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default MealsDetailsCard;