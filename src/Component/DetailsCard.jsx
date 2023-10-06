import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailsCard = () => {

    const [service, setService] =useState([])

    const {id} = useParams();
    console.log(id);

    const services = useLoaderData();
    const allService =services.events;

    return (
        <div className="px-14 mx-auto">
            <h2>Love You</h2>
            <div className="w-full card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn normal-case bg-gray-950 hover:bg-white text-white hover:outline hover:text-black">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;