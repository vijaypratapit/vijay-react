/** @format */
import { productImage } from "../../utils/constant";
const Resturent = (props) => {
  const { cusion, name, img, rating, time } = props.objData;
  return (
    <div className='reas-car'>
      <div className='p-img'>
        <img src={productImage} width={50} />
      </div>
      <div className='p-details'>
        <h1>{name}</h1>
        <h1>{cusion}</h1>
        <h1>{rating} Rating</h1>
        <h1>{time} Minut</h1>
      </div>
    </div>
  );
};
export const withPramoted = (Resturent) => {
  return (props) => {
    return (
      <div>
        <label style={{ color: "green" }}>Pramoted</label>
        <Resturent {...props} />
      </div>
    );
  };
};

export default Resturent;
