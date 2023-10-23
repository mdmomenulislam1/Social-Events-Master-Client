import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ServiceDetailsCard from './ServiceDetailsCard';

const DetailsCard = () => {
    const [service, setService] =useState({});
    
    const {id} = useParams();

    const services = useLoaderData();
    
    useEffect(() => {
        const findService = services?.find((service) => service.id == id);
        console.log(service.id);
        setService(findService);

      }, [id, services]);

    return (
        <div>
            <ServiceDetailsCard service={service}></ServiceDetailsCard>
        </div>
    );
};

export default DetailsCard;