import React, { useEffect, useState } from 'react';
import DashboardCard from './DashboardCard';


const DashBoard = () => {
  const [order, setOrder] = useState([]);
  const [noFound, setNofound] = useState(false);
  const [isShow,setIsShow] = useState(false)
  const [totalPrice,setTotalPrice] = useState(0)

  useEffect(() => {
    const ServedItem = JSON.parse(localStorage.getItem('Served'));

    if (ServedItem) {
      setOrder(ServedItem);

      const total = ServedItem.reduce((preValue,currentItem)=> preValue + currentItem.price,0)

      console.log(total);

      setTotalPrice(total)


    } else {
      setNofound("No Data Found");
    }
  }, []);

  console.log(order);

  const handleRemove = () => {
    localStorage.clear();
    setOrder([]);
    setNofound("No Data Found");
  };


  console.log(isShow);
  return (
    <div>
      <div>
      

          <div className="grid gap-5">
            {
                isShow ? order.map((service) => (
                    <DashboardCard key={service.id} service={service}></DashboardCard>
                  )) 
                  
                  : order.slice(0,11).map((service) => (
                    <DashboardCard key={service.id} service={service}></DashboardCard>
                  ))
            }
          </div>

          {noFound ? (
        <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
      ) : (
        <div>
          {order.length > 0 && (
            <div>
                <button
              onClick={handleRemove}
              className="px-5 bg-green-200 block mx-auto"
            >
              Deleted All order
            </button>

            <h1>Total price : {totalPrice}</h1>
            </div>
          )}
          {order.length > 10 && <button onClick={()=>setIsShow(!isShow)} className="px-5 bg-green-200 block mx-auto">
            {isShow ? "See less" : "See more"}
          </button>}
        </div>
      )}
    </div>
    </div>
  );
};

export default DashBoard;