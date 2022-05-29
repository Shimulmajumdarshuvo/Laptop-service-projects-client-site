import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const MyOrder = () => {
    const [user] = useAuthState(auth);

    const url = `http://localhost:5000/orders/${user?.email}`;
    const { data: orders, isLoading } = useQuery(('orders'), () => fetch(url).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2>My order: {orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>List</th>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <th>
                                    <div class="avatar">
                                        <div class="w-16 rounded">
                                            <img src={order.img} alt="" />
                                        </div>
                                    </div>
                                </th>
                                <td>{order.purchaseName}</td>
                                <td>{order.price}</td>
                                <td>{order.quantity}</td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;