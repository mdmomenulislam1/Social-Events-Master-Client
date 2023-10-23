import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {id, title, name, price, description, img} = service || {};
    
    return (
        <div>
            <div className="card w-[320px] h-[450px] bg-base-100 shadow-xl">
                                <img src={service.img} alt="" />
                                <div className="card-body">
                                    <h2 className="card-title">{title}</h2>
                                    <p className="text-black font-semibold">{service.short_description}</p>
                                    <p className="text-2xl font-bold ">Price: {service.price}</p>

                                    <div className="card-actions ">
                                        <Link to={`/services/${id}`} className="w-full">
                                        <button className="btn bg-orange-900 text-white hover:text-black hover:outline font-bold w-full normal-case">Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
        </div>
    );
};

export default ServiceCard;