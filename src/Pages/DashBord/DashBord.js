import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBord = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <h2 className='text-2xl font-bold text-purple-500'>Welcome to Dashboard</h2>
                <Outlet></Outlet>
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>


            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Order</Link></li>
                    <li><Link to='/dashboard/review'>Add Review</Link></li>
                    <li><Link to='/dashboard/profile'>My Profile</Link></li>
                    <li><Link to='/dashboard/admin'>Make Admin</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default DashBord;