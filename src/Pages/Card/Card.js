import React from 'react';

const Card = ({ service }) => {


    const { name, img, price, availableQuantity, orderQuantity, description, } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <img src={img} alt="" />
                <h2 className="text-xl font-bold text-secondary">{name}</h2>
                <h2 className=" font-bold ">{description}</h2>
                <h2 className="text-xl font-bold ">Order Quantity : {orderQuantity}</h2>
                <h2 className="text-xl font-bold ">Available Quantity : {availableQuantity}</h2>
                <h2 className="text-xl font-bold ">Price :${price}</h2>


                <div className="card-actions justify-center">
                    <label
                        className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
                    >Purchase</label>
                </div>
            </div>
        </div>
    );
};

export default Card;