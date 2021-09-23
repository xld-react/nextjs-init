import { useState, useEffect } from "react";
import { RootContextProvider } from "./AppState";
import RobotItem from "../robotItem/RobotItem";
import ShopCard from "../shopCart/ShopCart";
import style from "./Robot.module.css";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setList(data);
    };

    getData();
  }, []);

  console.log(list, "list");

  return (
    <RootContextProvider>
      <div className={style.app}>
        <div className={style.appHeader}>
          <img
            className={style.appLogo}
            src="https://img2.baidu.com/it/u=2108319215,1494231136&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=690"
            alt=""
          />
          <h2>Robot 购物车</h2>
        </div>
        <ShopCard />
        <div className={style.robotList}>
          {list.map((item: any, index: number) => {
            return (
              // <span key={index.toString()}>{item?.name}</span>
              <RobotItem key={item.id} id={item.id} name={item.name} email={item.email} />
            );
          })}
        </div>
      </div>
    </RootContextProvider>
  );
}

export default App;
