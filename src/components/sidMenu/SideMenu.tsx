import { Menu } from "antd";
import React from "react";
import style from "./SideMenu.module.css";
import { sideMenuList } from "./mockup";
import { GifOutlined } from "@ant-design/icons";

export const SideMenu: React.FC = () => {
  return (
    <Menu mode="vertical" className={style["side-menu"]}>
      {sideMenuList.map((m: any, index: number) => (
        <Menu.SubMenu
          key={`side-menu-${m.title}-${index}`}
          title={
            <span>
              <GifOutlined />
              {m.title}
            </span>
          }
        >
          {m.subMenu.map((sm: any, sindex: number) => (
            <Menu.SubMenu
              key={`sub-menu-${m.title}-${sm.title}-${sindex}`}
              title={
                <span>
                  <GifOutlined />
                  {sm.title}
                </span>
              }
            >
              {sm.subMenu.map((sms: any, smsIndex: number) => {
                return (
                  <Menu.Item key={`sub-sub-menu-${m.title}-${sm.title}-${sm}-${smsIndex}`}>
                  <span>
                    <GifOutlined />
                    <span>{sms}</span>
                  </span>
                </Menu.Item>
                )
              })}
            </Menu.SubMenu>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>
  );
};
