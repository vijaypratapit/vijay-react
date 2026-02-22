/** @format */
import { useState } from "react";
import { logoImage } from "../../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../utils/cartSlice";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleDispatch = () => {
    dispatch(addItem("Momo"));
  };
  return (
    <div className='header'>
      <div className='logo'>
        <img src={logoImage} alt='Restaurant Logo' width={134} />
      </div>
      <ul className='nav-bar'>
        <li className='home'>Home</li>
        <li className='about'>About</li>
        <li className='contactus'>ContactUs</li>
        <button className='cart' onClick={handleDispatch}>
          Card:{cartItem.length}{" "}
        </button>
        <button
          className='login'
          onClick={() => {
            btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}>
          {btnName}
        </button>
      </ul>
    </div>
  );
};

export default Header;
