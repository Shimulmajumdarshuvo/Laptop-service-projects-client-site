import React from 'react';

const NavBanner = () => {
    return (
        <div>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://techwithtech.com/wp-content/uploads/featured_laptop_parts.jpg" class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Main features of laptop</h1>
                        <p class="py-6">The parts of laptop include display screen, keyboard, base panel, <br />
                            top panel, Cooling Fan, RAM, hard disk, palm rest assembly, battery, hinges, speaker, <br />
                            optical drive, antenna etc. Introduction: As we know laptop is most common <br /> computing
                            device used around the world due to its portable nature.</p>
                        <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBanner;