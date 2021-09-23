import React, { useContext, useState } from "react";
import style from "./ShopCart.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RootContext } from "../robot/AppState";

const ShopCard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const rootContext = useContext(RootContext);
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(event, "event");
    setIsOpen(!isOpen);
  };

  return (
    <RootContext.Consumer>
      {(value) => (
        <div>
          <div className={style.cartContainer}>
            <button className={style.button} onClick={handleClick}>
              <AiOutlineShoppingCart />
              <span>name: {value.name}---购物车 {rootContext.shopCart.items.length}（件）</span>
            </button>
            <ul
              className={style.cartDropDown}
              style={{ display: isOpen ? "block" : "none" }}
            >
              {rootContext.shopCart.items.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </RootContext.Consumer>
  );
};

export default ShopCard;
