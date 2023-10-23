import React from 'react';

const DashboardCard = (service) => {
  const { id, phone_name, brand_name, rating, price, img } = service || {};
  
  return (
    <div>
      <div className="flex justify-center items-center ">
        <div className="relative flex w-full my-5 mx-10 flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img src={img} alt="image" className="h-full w-full object-cover" />
          </div>
          <div className="p-6">
            <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
              {price}
            </h6>
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {id}
            </h4>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;