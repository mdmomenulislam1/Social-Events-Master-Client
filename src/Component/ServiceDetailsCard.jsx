import { stringify } from 'postcss';
import React from 'react';
import swal from "sweetalert";

const ServiceDetailsCard = ({ service }) => {
    

  const { id, img, title, price, description } = service || {}


  const handleAddToService = () => {

    const addServedItemArr = [];

    const ServedItem = JSON.parse(localStorage.getItem('Served'))
    if (!ServedItem) {
      addServedItemArr.push(service)
      localStorage.setItem('Served', JSON.stringify(addServedItemArr))
      swal("Good job!", "Products added successfully!", "success");
    }

    else {
      const isExists = ServedItem.find(service => service.id === id)

      if (!isExists) {
        addServedItemArr.push(...ServedItem, service)
        localStorage.setItem('Served', JSON.stringify(addServedItemArr))
        swal("Good job!", "Products added successfully!", "success");
        
      }
      else{
        
        swal("Error!", "No duplicate!", "error");
      }
    }


  }


  return (
    <div className="max-w-[1300px] mx-auto px-10 lg:px-0 my-10">
      <div>
        <div className="card w-full glass relative">
          <img src={img} className="w-full h-[500px] rounded-lg" alt="car!" />
        </div>
        <div className="py-10">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-justify font-normal">{description}</p>
          <p className="text-3xl font-bold my-3">Booking Money:  {price}</p>
        </div>

        <button onClick={handleAddToService} className="p-5 bg-black text-white w-full font-bold rounded-full">Book Now</button>
      </div>
    </div>
  );
};

export default ServiceDetailsCard;