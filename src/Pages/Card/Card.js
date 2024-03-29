import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

const Card = ({ service }) => {
    const { _id, name, img, price, availableQuantity, orderQuantity, description, } = service;



    const navigate = useNavigate();




    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl ">

            <div className="card-body text-center cardPart">
                <img src={img} alt="" />
                <h2 className="text-xl font-bold text-secondary">{name}</h2>
                <h2 className=" font-bold ">{description}</h2>
                <h2 className="text-xl font-bold ">Order Quantity : {orderQuantity}</h2>
                <h2 className="text-xl font-bold ">Available Quantity : {availableQuantity}</h2>
                <h2 className="text-xl font-bold ">Price :${price}</h2>




                <div className="card-actions justify-center">
                    <label

                        className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary px-5 "
                        onClick={() => navigate(`/service/${_id}`)}
                    >Purchase</label>
                </div>


            </div>


        </div>
    );
};

export default Card;