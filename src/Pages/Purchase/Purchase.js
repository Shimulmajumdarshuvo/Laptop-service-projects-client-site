import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';



const Purchase = () => {
    const { serviceId } = useParams();
    const [user] = useAuthState(auth);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const url = `http://localhost:5000/service/${serviceId}`;
    const { data: tool, isLoading } = useQuery((['tool', serviceId]), () => fetch(url).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    const {
        price,
        availableQuantity,
        orderQuantity,
        name,
        img,
        description,
    } = tool;

    const onSubmit = (data) => {

        const quantity = parseInt(data.quantity);
        if (orderQuantity > quantity || quantity > availableQuantity) {
            toast.error(
                `Order Quantity minimum ${orderQuantity} and less than ${availableQuantity}`,
                {
                    position: toast.POSITION.TOP_CENTER,
                }
            );
            return;

        } else {
            const order = {
                purchaseName: name,
                quantity: quantity,
                price: price,
                img: img,
                userName: user?.displayName,
                email: user?.email,
                address: data.address,
                phone: data.phone,
            };

            fetch(`http://localhost:5000/service`, {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(result => {
                    reset()
                    console.log(result);
                })
        }
    }
    return (
        <div>
            <div class="card w-96 mx-auto bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                        {name}
                    </h2>
                    <p>{description}</p>
                    <p>Price :${price}</p>
                    <p>Minimum Order Quantity :${orderQuantity}</p>
                    <p>Available Quantity :${availableQuantity}</p>

                </div>
            </div>






            <div class="card w-96 my-4 mx-auto bg-base-100 shadow-xl">
                <h2>Purchase Now Your Parst </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className='label'>
                            <span className='label-text'>Email</span>
                            <input type="email" value={user?.email} disabled className='input input-bordered w-full max-w-xs' />
                        </label>
                    </div>
                    <div>
                        <label className='label'>
                            <span className='label-text'>Name</span>
                            <input type="text" value={user?.displayName} disabled className='input input-bordered w-full max-w-xs' />
                        </label>
                    </div>
                    <div>
                        <label className='label'>
                            <span className='label-text'>Quantity</span></label>
                        <input type="number"
                            defaultValue={orderQuantity}
                            placeholder="Enter Quantity"
                            className='input input-bordered w-full max-w-xs'
                            {...register("quantity", {
                                required: {
                                    value: true,
                                    message: "Quantity is Required"
                                }
                            })} />
                        <label className=' label text-left'>
                            {errors.quantity?.type === "required " && (
                                <span className='label-text-alt text-error'>
                                    {errors.quantity.message}
                                </span>
                            )


                            }
                        </label>
                        <div className='for-control w-full max-w-x5'>
                            <label className='label'>
                                <span className='label-text'>Address</span>

                            </label>
                            <input type="text" placeholder='Your Address' className=' input input-bordered w-full max-w-xs' {
                                ...register("address")
                            } />
                        </div>


                        <div className='for-control w-full max-w-x5'>
                            <label className='label'>
                                <span className='label-text'>Phone</span>

                            </label>
                            <input type="text" placeholder='Phon Number' className=' input input-bordered w-full max-w-xs' {
                                ...register("phone")
                            } />
                        </div>
                        <input className='btn btn-primary capitalize mt-4 font-normal w-full max-w-xs text-white'
                            type='submit' value="Place Order" />




                    </div>





                </form>
            </div>



        </div>
    );
};

export default Purchase;