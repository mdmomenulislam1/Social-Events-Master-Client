

const DashboardCard = ({ service }) => {
  const { id, img, title, name, price, short_description, description } = service || {};

  return (
    
      <div className="overflow-x-auto gap-5 my-2 py-2 flex justify-around items-center">
        
              <p>{id}</p>
              <p>{title}</p>
              <p>{price}</p>
              
            
      </div>
    
  );
};

export default DashboardCard;