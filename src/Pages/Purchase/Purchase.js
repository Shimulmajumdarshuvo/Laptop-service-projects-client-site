import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';


const Purchase = () => {

    const { serviceId } = useParams();

    const [service, setService] = useState({});
    const [user, loading, error] = useAuthState(auth);


    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;


    }


    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setService(data);
            });
    });




    return (
        <div className=''>


            <div className='card-actions justify-center'>




                <div class="card w-96 bg-base-100 shadow-xl ">
                    <figure class="px-10 pt-10">
                        <img src={service.img} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">{service?.name}</h2>
                        <h2 className=" font-bold ">{service?.description}</h2>
                        <h2 className=" font-bold ">Price :${service?.price}</h2>
                        <h2 className=" font-bold ">Order Quantity : {service?.orderQuantity}</h2>
                        <h2 className=" font-bold ">Available Quantity : {service?.availableQuantity}</h2>


                    </div>
                </div>
            </div>


            <br /><br />

            <div>

                <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>


                    <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                    <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                    <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Price" value={service?.price} class="input w-full max-w-xs" />
                    <input type="text" placeholder="Your Address" class="input w-full max-w-xs" />
                    <input type="text" placeholder="Quantity" class="input input-bordered input-accent w-full max-w-xs" />
                    <input type="submit" value="Buy Now" className="btn btn-secondary w-full max-w-xs" />
                </form>


            </div>


        </div>
    );
};

export default Purchase;