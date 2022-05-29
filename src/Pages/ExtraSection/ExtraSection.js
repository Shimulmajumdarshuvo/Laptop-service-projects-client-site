import React from 'react';

const ExtraSection = () => {
    return (
        <div className=' '>

            <h2 className='text-5xl text-center text-cyan-400'>Our Business Summary</h2>




            <div class="card py-8 w-full bg-base-100 shadow-xl">
                <div class="card-body">

                    <div class="stats shadow">

                        <div class="stat">
                            <div class="stat-figure text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <div class="stat-title">Downloads</div>
                            <div class="stat-value">31K</div>
                            <div class="stat-desc">Projects Completed per week</div>
                        </div>

                        <div class="stat">
                            <div class="stat-figure text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                            </div>
                            <div class="stat-title">New Users</div>
                            <div class="stat-value">4,200</div>
                            <div class="stat-desc">Happy Client</div>
                        </div>

                        <div class="stat">
                            <div class="stat-figure text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <div class="stat-title">Page Views</div>
                            <div class="stat-value text-secondary">120M +</div>
                            <div class="stat-desc">Annual Revenue</div>
                        </div>

                        <div class="stat">
                            <div class="stat-figure text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                            </div>
                            <div class="stat-title">We Serverd</div>
                            <div class="stat-value">100 +</div>
                            <div class="stat-desc">Customer</div>
                        </div>

                    </div>



                </div>
            </div>









        </div>
    );
};

export default ExtraSection;