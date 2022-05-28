import React from 'react';
import images from '../../assets/images/173974943_485927659212867_978170476069834738_n.jpg'

import img from '../../assets/images/appointment.png'

const Profile = () => {
    return (

        <div>
            <section style={{
                background: `url(${img})`
            }}
                className='flex justify-center items-center'>
                <img className='m-12' src={images} alt="" />
                <div className='flex-1 p-5'>
                    <h3 className='text-xl text-primary py-3'>Personal Information</h3>
                    <h2 className='text-3xl text-white'>I am Shimul Majumdar Shuvo</h2>
                    <p className='text-white py-5'>I am a MERN stack web developer from Khulna, Bangladesh. I work as a freelance web developer
                        for clients across the globe with great product delivery. I also worked with Edumonk Foundation
                        and Inception Wave Pvt. Ltd as a Software Developer intern and am looking for opportunities to further develop my skills. <br />

                        Skilled in HTML, CSS, Bootstrap, TailwindCSS, Javascript(ES6), and MERN (Mongo DB, Express, React, Node) stack, I also have sound knowledge of Data Structures and Algorithms with great problem-solving capabilities.

                        I can vouch for the fact that I am a fast learner with a penchant to both learn and unlearn; That is learning the latest relevant technologies and skills. I also bring with me some fresh ideas and I am confident you will find many of them to be quite useful and innovative.</p>

                </div>


            </section>
            <div>

            </div>
            <div class="card m-16 px-16 w-full bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Professional Skills</h2>

                    <h2>HTML</h2>
                    <progress class="progress progress-info w-56" value="85" max="100"></progress>
                    <h2>CSS</h2>
                    <progress class="progress progress-info w-56" value="80" max="100"></progress>
                    <h2>Java Script</h2>
                    <progress class="progress progress-info w-56" value="80" max="100"></progress>
                    <h2>React</h2>
                    <progress class="progress progress-info w-56" value="75" max="100"></progress>
                    <h2>Node js</h2>
                    <progress class="progress progress-info w-56" value="70" max="100"></progress>
                    <h2>Mongo DB</h2>
                    <progress class="progress progress-info w-56" value="60" max="100"></progress>





                    <div>
                        <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                            <div class="collapse-title text-xl font-medium">
                                My Project live link.
                            </div>
                            <div class="collapse-content">
                                <p>Tech BD live link<link rel="stylesheet" href="{https://tech-bd-abf2a.web.app}" /></p>
                                <link rel="stylesheet" href="https://tech-bd-abf2a.web.app" />

                                https://tech-bd-abf2a.web.app
                            </div>
                        </div>
                    </div>

                </div>

            </div>



        </div>
    );
};

export default Profile;