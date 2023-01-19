import React from "react";
import { Link } from "react-router-dom";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import "./header.scss";
import { useStateValue } from "./StateProvider";

const Header = () => {
  const { myReducer } = useStateValue();
  const [data] = myReducer;
  console.log(data.authInfo);
  return (
    <header className='header'>
      <div className='header__logo'>
        <Link to='/'>
          <MenuBookIcon fontSize='large' />
          <span className='header__logoName'>E-READ</span>
        </Link>
      </div>
      <div className='header__search'>
        <input />
      </div>

      <div className='header__nav'>
        <Link to='/login'>
          <div className='header__nav__user'>
            <span className='header__nav__lineOne'>
              {data.authInfo.user ? data.authInfo.user.email : ""}
              Hello Guest
            </span>
            <span className='header__nav__lineTwo'>Sign In</span>
          </div>
        </Link>

        <div className='header__nav__itemBasket'>
          <Link to='/checkOut'>
            <ShoppingCartTwoToneIcon fontSize='small' />
            {data.cartList?.length}
            Cart
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
