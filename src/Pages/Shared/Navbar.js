import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Navbar.css'

import { Link } from 'react-router-dom';
import auth from '../../firebase.init';


const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    const menuItems = <>
        <li>< Link to="/">Home</Link></li>
        <li>< Link to="/service/id">Purchase</Link></li>

        <li>< Link to="/blogs">Blogs</Link></li>
        <li>< Link to="/about">About</Link></li>
        <li>< Link to="/myprofile">Profile</Link></li>


        {
            user && <li>< Link to="/dashboard">Dashboard</Link></li>
        }
        <li>{user ? <button onClick={logout} class="btn btn-ghost">Sign Out</button> : < Link to="/login">Login</Link>}</li>

    </>
    return (
        <div>
            <div class="navbar bg-base-100 sticky ">
                <div class="navbar-start headerPart">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            {menuItems}

                        </ul>
                    </div >
                    <h2 ><span>G</span>reat<span>T</span>ech<span>M</span>ate</h2>
                    {/* <img className='mx-3 ' src="https://cdn3.vectorstock.com/i/thumb-large/63/87/laptop-computer-and-smartphone-in-silver-circle-vector-30146387.jpg" alt="" width={60} /> */}

                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>




            </div>
        </div>
    );
};

export default Navbar;