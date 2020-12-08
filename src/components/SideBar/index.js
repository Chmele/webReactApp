import "./styles.css";
import { Menu } from "antd";
import { Link } from "react-router-dom";

import {
  RadarChartOutlined, 
  SmileOutlined,
  LoginOutlined
  } from "@ant-design/icons";

export default () => {
return (
    <div className="sidebar">
      <Menu>
        <Menu.Item key="0" icon={<RadarChartOutlined />}>
          <Link to="/carwashes">Список автомийок</Link>
        </Menu.Item>
        <Menu.Item key="1" icon={<SmileOutlined />}>
          <Link to="/customers">Список замовників</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<LoginOutlined />}>
          <Link to="/login">Вхід</Link>
        </Menu.Item>
        {/* <Menu.Item key='2' icon={<CopyOutlined />}>
          <Link to="/orders">Список замовлень</Link>
        </Menu.Item>
        <Menu.Item key='3' icon={<TableOutlined />}>
          <Link to="/map">Автомийки на мапі</Link>
        </Menu.Item> */}
      </Menu>
    </div>
  );
};
