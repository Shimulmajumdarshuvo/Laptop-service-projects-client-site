import React from 'react';

import img from '../assets/images/appointment.png'

const Contact = () => {
    return (
        <div className='text-center'>


            <section style={{
                background: `url(${img})`
            }}
                className='flex justify-center items-center'>

                <div className='flex-1 p-5'>
                    <h3 className='text-3xl text-primary py-3'>Contact</h3>
                    <h2 className='text-4xl my-2 text-white'>Stay connect with us</h2>

                    <input type="text" placeholder="Your Name" class="input my-2 input-bordered input-primary w-full max-w-xs" />  <br />
                    <input type="email" placeholder="Your Email" class="input my-2 input-bordered input-primary w-full max-w-xs" /> <br />
                    <input type="phone" placeholder="Your Phone" class="input my-2 input-bordered input-primary w-full max-w-xs" /> <br />
                    <textarea class="textarea textarea-info w-full my-2 max-w-xs" placeholder="Address"></textarea> <br />

                    <button class="btn btn-success">Submit</button>

                </div>


            </section>

        </div>
    );
};

export default Contact;