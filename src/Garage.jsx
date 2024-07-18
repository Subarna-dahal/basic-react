import Car from "./Car";
const Garage = () => {
    const Cars=['bmw','tata','auto'];
  return (
    <div>
        {Cars.length>0&& Cars.map((car,index)=><Car Brand={car} key={index}/>)}
    </div>
  )
}

export default Garage;