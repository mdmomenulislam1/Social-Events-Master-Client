import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ServiceDetailsCard from './ServiceDetailsCard';

const DetailsCard = () => {

    const [service, setService] =useState({});
    

    const {id} = useParams();
    console.log(id);

    const services = useLoaderData();
    console.log(services);

    useEffect(() => {
        const findService = services.events?.find((service) => service.id == id);
        console.log(service);
        setService(findService);

      }, [id, services]);

    return (
        // <div className="px-14 mx-auto">
        //     <h2>Love You</h2>
        //     <div className="w-full card bg-base-100 shadow-xl">
        //         <figure className="px-10 pt-10">
        //             <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl w-full" />
        //         </figure>
        //         <div className="card-body items-center text-center">
        //             <h2 className="card-title">Shoes!</h2>
        //             <p>If a dog chews shoes whose shoes does he choose?</p>
        //             <div className="card-actions">
        //                 <button className="btn normal-case bg-gray-950 hover:bg-white text-white hover:outline hover:text-black">Book Now</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div>
            <ServiceDetailsCard service={service}></ServiceDetailsCard>
        </div>
    );
};

export default DetailsCard;