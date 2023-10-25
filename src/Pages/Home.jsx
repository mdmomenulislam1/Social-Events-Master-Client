import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Component/Banner";
import React from 'react'
import ServiceCard from "../Component/ServiceCard";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    const services = useLoaderData();

    AOS.init({
        duration: 800,  
        offset: 200,    
        easing: 'ease', 
    });


    const containerStyle = {
        backgroundImage: `url('https://i.ibb.co/dgXcv7D/istockphoto-1399000012-612x612.webp'), linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(9, 9, 9, 0.8))`,
        backgroundBlendMode: 'overlay',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        // Add other styles as needed
        padding: '20px',
        borderRadius: '5px',
    };




    return (
        <div className="px-8 md:px-10 lg:px-14 mx-auto">
            <Banner></Banner>
            <h2 data-aos="fade-down" className="text-5xl font-bold text-black text-center my-10">Services</h2>
            <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 px-5 lg:px-0 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-8 lg:my-10">
                {
                    services?.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>

            <h2 data-aos="fade-left" className="text-4xl font-bold text-black text-center">Meet Up </h2>
            <div data-aos="fade-right"
                style={containerStyle}
                className="mt-16 p-16 rounded-xl">
                <div className="text-center">
                    <h1 className="text-white text-4xl font-extrabold mb-5">Meet the team section</h1>
                    <p className="text-2xl text-white">Contrary to popular belief, is not simply random text. It has roots in a
                        piece of classical <br /> Latin
                        literature from 45 BC, making it over 2000 years old.
                    </p>
                </div>

                {/* <!-- Person Container  --> */}
                <div  className="mt-10 p-10 flex justify-around items-center gap-5 flex-col md:flex-row">


                    {/* <!-- First Person  --> */}
                    <div className="text-center">
                        <img className="m-auto mb-5 rounded-full w-[200px] h-[200px]" src="https://i.ibb.co/XFnM7Gf/istockphoto-1398845106-612x612.webp" alt="" />
                        <h1 className="text-3xl text-white font-bold mb-2">Awlad Hossain</h1>
                        <h3 className="text-2xl text-white font-semibold">Event Planner</h3>
                        <div className="mt-2">
                            <i className="pr-3 text-2xl fa-brands fa-facebook text-orange-700"></i>
                            <i className="pr-3 text-2xl fa-brands fa-twitter text-orange-700"></i>
                            <i className="pr-3 text-2xl fa-brands fa-linkedin text-orange-700"></i>
                        </div>
                    </div>

                    {/* <!-- Second Person  --> */}
                    <div className="text-center">
                        <img className="m-auto mb-5 rounded-full w-[200px] h-[200px]" src="https://i.ibb.co/7S31TCk/istockphoto-1178146180-612x612.webp" alt="" />
                        <h1 className="text-3xl text-white font-bold mb-2">Safia Chowdhury</h1>
                        <h3 className="text-2xl text-white font-semibold">Creative Director</h3>
                        <div className="mt-2">
                            <i className="pr-3 text-2xl fa-brands fa-facebook text-orange-700"></i>
                            <i className="pr-3 text-2xl fa-brands fa-twitter text-orange-700"></i>
                            <i className="pr-3 text-2xl fa-brands fa-linkedin text-orange-700"></i>
                        </div>
                    </div>

                    {/* <!-- Third Person  --> */}
                    <div className="text-center">
                        <img className="m-auto mb-5 rounded-full w-[200px] h-[200px]" src="https://i.ibb.co/Smj8dT3/model-2911322-640.jpg" alt="" />
                        <h1 className="text-3xl text-white font-bold mb-2">Rokib Hossain</h1>
                        <h3 className="text-2xl text-white font-semibold">Sales and Marketing Manager</h3>
                        <div className="mt-2">
                            <i className="pr-3 text-2xl fa-brands fa-facebook text-orange-700"></i>
                            <i className="pr-3 text-2xl fa-brands fa-twitter text-orange-700"></i>
                            <i className="pr-3 text-2xl fa-brands fa-linkedin text-orange-700"></i>
                        </div>
                    </div>

                    {/* <!-- Forth Person  --> */}
                    <div className="text-center">
                        <img className="m-auto mb-5 rounded-full w-[200px] h-[200px]" src="https://i.ibb.co/L6hrJrZ/friend-6236329-640.jpg" alt="" />
                        <h1 className="text-3xl text-white font-bold mb-2">Chaity</h1>
                        <h3 className="text-2xl text-white font-semibold">Logistics and Operations Manager</h3>
                        <div className="mt-2">
                            <i className="pr-3 text-2xl fa-brands fa-facebook text-orange-700"></i>
                            <i className="pr-3 text-2xl fa-brands fa-twitter text-orange-700"></i>
                            <i className="pr-3 text-2xl fa-brands fa-linkedin text-orange-700"></i>
                        </div>
                    </div>

                </div>



            </div>
            <div>

            </div>


            <h2 data-aos="zoom-in" className="text-4xl font-bold text-black text-center my-5">Offers</h2>
            <div data-aos="zoom-out">
                <section className="bg-gray-100 py-16 rounded-lg my-10">
                    <div className="container mx-auto text-center px-10">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Special Offers</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Offer Card 1 */}
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">20% Off on First Purchase</h3>
                                <p className="text-gray-600 mb-4">Use code: FIRST20 during checkout to get 20% off on your first purchase.</p>

                            </div>

                            {/* Offer Card 2 */}
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Free Shipping</h3>
                                <p className="text-gray-600 mb-4">Enjoy free shipping on orders over $50. No promo code needed.</p>

                            </div>

                            {/* Offer Card 3 */}
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Limited-Time Sale</h3>
                                <p className="text-gray-600 mb-4">Shop our limited-time sale items and save big on your favorite products.</p>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;