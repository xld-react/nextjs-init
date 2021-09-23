import React, { useContext } from "react";
import { RootContext, RootContextSetState } from "../robot/AppState";
import style from "./RobotItem.module.css";

interface RobotProps {
  id: number;
  name: string;
  email: string;
}

const Robot: React.FC<RobotProps> = (props) => {
  const context = useContext(RootContext);
  const setState = useContext(RootContextSetState)
  const { id, name, email } = props;

  const handleAdd = () => {
    if (setState)
    setState(state =>  {
      return {
        ...state,
        shopCart: {
          items: [
            ...state.shopCart.items,
            {
              id,
              name,
              email
            }
          ]
        }
      }
    })
  }
  return (
    <div className={style.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="" />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{context.name}</p>
      <button onClick={handleAdd}>添加</button>
    </div>
  );
};

export default Robot;
