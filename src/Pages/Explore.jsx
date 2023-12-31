import { useLoaderData } from "react-router-dom";
import ServiceCard from "../Component/ServiceCard";


const Explore = () => {

    const services = useLoaderData();
    // const allService = services.events;
    return (
        <div className="px-14 mx-auto">
           

            <h2 className="text-5xl font-bold text-black text-center my-10">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 px-5 lg:px-0 lg:grid-cols-4 gap-16 md:gap-5 lg:gap-8 my-10">
                {
                    services?.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Explore;