import React, { useEffect, useState } from 'react';
import DashboardCard from './DashboardCard';


const DashBoard = () => {
  const [order, setOrder] = useState([]);
  const [noFound, setNofound] = useState(false);
  const [isShow, setIsShow] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const ServedItem = JSON.parse(localStorage.getItem('Served'));
    console.log(ServedItem);

    if (ServedItem) {
      setOrder(ServedItem);

      const total = ServedItem.reduce((preValue, currentItem) => preValue + currentItem.price, 0)

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


        <div className="overflow-x-auto px-5 w-full text-2xl font-bold py-5">


          <div className="flex justify-around items-center ">
            <p>Id</p>
            <p>Title</p>
            <p>Price</p>
          </div>

          {
            isShow ? order?.map((service) => (
              <DashboardCard key={service.id} service={service}></DashboardCard>
            ))

              : order.slice(0, 10).map((service) => (
                <DashboardCard key={service.id} service={service}></DashboardCard>
              ))
          }
        </div>

        {noFound ? (
          <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
        ) : (
          <div>
            {order.length > 0 && (
              <div className="flex justify-between m-10">
                <button
                  onClick={handleRemove}
                  className="px-5 rounded-lg text-2xl text-white font-bold outline-2 bg-blue-950"
                >
                  Deleted All order
                </button>

                <h1 className="outline-2 bg-green-950 text-white rounded-2xl p-3 text-3xl font-bold text-center">Total price : {totalPrice}</h1>
              </div>
            )}
            {order.length > 10 && <button onClick={() => setIsShow(!isShow)} className="px-5 bg-green-200 block mx-auto">
              {isShow ? "See less" : "See more"}
            </button>}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashBoard;