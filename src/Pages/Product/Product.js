import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';


const Product = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                {
                    services.map(service => <Card
                        key={service._id}
                        service={service}

                    ></Card>)
                }
            </div>

        </div>
    );
};

export default Product;