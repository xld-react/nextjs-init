import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";
import { GlobalOutlined, PlusOutlined } from "@ant-design/icons";
import MenuItem from "antd/lib/menu/MenuItem";
import style from "./Header.module.css";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import {
  addLanguageCreator,
  changeLanguageCreator,
} from "../../redux/language/languageActions";

const Header: React.FC = () => {
  const history = useHistory();
  const { language, langaugeList } = useSelector((state) => state);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const changeLanguage = (e: any) => {
    dispatch(changeLanguageCreator(e.key));
  };

  const addLanguage = () => {
    dispatch(addLanguageCreator("others", "others"));
  };

  return (
    <div className={style["app-header"]}>
      {/* top-header */}
      <div className={style["top-header"]}>
        <Typography.Text>{t("header.slogan")}</Typography.Text>
        <Dropdown.Button
          style={{ marginLeft: 15 }}
          overlay={
            <Menu>
              {langaugeList.map((item) => (
                <MenuItem onClick={changeLanguage} key={item.code}>
                  {item.name}
                </MenuItem>
              ))}
              <MenuItem onClick={addLanguage} key={"new"}>
                <span>
                  {" "}
                  <PlusOutlined />{" "}
                </span>
                添加新语言
              </MenuItem>
            </Menu>
          }
          icon={<GlobalOutlined />}
        >
          {language === "zh" ? "中文" : "English"}
        </Dropdown.Button>
        <Button.Group className={style["button-group"]}>
          <Button onClick={() => history.push("/register")}>
            {t("header.register")}
          </Button>
          <Button onClick={() => history.push("/signIn")}>
            {t("header.signin")}
          </Button>
        </Button.Group>
      </div>

      <Layout.Header className={style["main-header"]}>
        <Typography.Title className={style["title"]} level={3}>
          {t("header.title")}
        </Typography.Title>
        <Input.Search className={style["search-input"]} placeholder="请输入" />
      </Layout.Header>

      <Menu mode="horizontal" className={style["main-menu"]}>
        <Menu.Item key="1"> {t("header.home_page")} </Menu.Item>
        <Menu.Item key="2"> {t("header.weekend")} </Menu.Item>
        <Menu.Item key="3"> {t("header.group")} </Menu.Item>
        <Menu.Item key="4"> {t("header.backpack")} </Menu.Item>
        <Menu.Item key="5"> {t("header.private")} </Menu.Item>
        <Menu.Item key="6"> {t("header.cruise")} </Menu.Item>
        <Menu.Item key="7"> {t("header.hotel")} </Menu.Item>
        <Menu.Item key="8"> {t("header.local")} </Menu.Item>
        <Menu.Item key="9"> {t("header.theme")} </Menu.Item>
        <Menu.Item key="10"> {t("header.custom")} </Menu.Item>
        <Menu.Item key="11"> {t("header.study")} </Menu.Item>
        <Menu.Item key="12"> {t("header.visa")} </Menu.Item>
        <Menu.Item key="13"> {t("header.enterprise")} </Menu.Item>
        <Menu.Item key="14"> {t("header.high_end")} </Menu.Item>
        <Menu.Item key="15"> {t("header.outdoor")} </Menu.Item>
        <Menu.Item key="16"> {t("header.insurance")} </Menu.Item>
      </Menu>
    </div>
  );
};

export default Header;
