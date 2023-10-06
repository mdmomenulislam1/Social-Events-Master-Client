import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Component/Banner";
import React from 'react'
import ServiceCard from "../Component/ServiceCard";


const Home = () => {

    const services = useLoaderData();
    const allService =services.events;

    // const {id, title, name, price, description, img} = service || {}



    return (
        <div className="px-14 mx-auto">
            <Banner></Banner>

            <h2 className="text-5xl font-bold text-black text-center my-10">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 px-5 lg:px-0 lg:grid-cols-4 gap-16 md:gap-5 lg:gap-8 my-10">
                {
                    allService.map(service => <ServiceCard key={service.id} service={service}></ServiceCard> )
                }
            </div>


            <h2 className="text-4xl font-bold text-black text-center">Promotions</h2>
            <div>

            </div>


            <h2 className="text-4xl font-bold text-black text-center">Offers</h2>
            <div>

            </div>
        </div>
    );
};

export default Home;