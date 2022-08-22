import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div class="carousel w-full ">
                <div id="item1" class="carousel-item w-full mx-10">
                    <img src=" https://techwithtech.com/wp-content/uploads/featured_laptop_parts.jpg" class="h-96 w-full" />
                </div>
                <div id="item2" class="carousel-item w-full">
                    <img src="http://cdn.shopify.com/s/files/1/0607/7697/2493/files/laptop-parts_1.jpg?v=1643886106" class="h-96 w-full" />
                </div>
                <div id="item3" class="carousel-item w-full">
                    <img src="https://www.kindpng.com/picc/m/246-2460778_laptop-parts-and-accessories-hd-png-download.png" class="h-96 w-full" />
                </div>
                <div id="item4" class="carousel-item w-full">
                    <img src="https://techwithtech.com/wp-content/uploads/fan-on-a-laptop.jpeg" class="h-96 w-full" />


                </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs">1</a>
                <a href="#item2" class="btn btn-xs">2</a>
                <a href="#item3" class="btn btn-xs">3</a>
                <a href="#item4" class="btn btn-xs">4</a>
            </div>

        </div>
    );
};

export default Banner;