import React from 'react';

const DrinksCard = ({ drink }) => {

    const { strDrink, strDrinkThumb, type } = drink;

    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img className="h-[300px] w-full" src={strDrinkThumb} alt={strDrink} /></figure>
            <div className="card-body">
                <h2 className="card-title">{strDrink}</h2>
                <div className="badge badge-primary">category : {type}</div>
                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                <div className="card-actions justify-end">
                    <button className="btn btn-neutral btn-sm">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default DrinksCard;