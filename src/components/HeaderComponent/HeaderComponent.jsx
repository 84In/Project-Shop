import React from "react";
import { Col } from "antd";
import {
  WrapperHeader,
  WrapperHeaderAccount,
  WrapperTextHeader,
} from "./style";
import Search from "antd/es/input/Search";
import { CaretDownOutlined, UserOutlined } from "@ant-design/icons";

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={6}>
          <WrapperTextHeader>Sky Store</WrapperTextHeader>
        </Col>
        <Col span={12}>
          <Search
            placeholder="input search text"
            // onSearch={onSearch}
            enterButton
          />
        </Col>
        <Col span={6}>
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize: `30px` }} />
            <div>
              <span>Đăng Nhập/Đăng Ký</span>
              <div>
                <span>Tài Khoản</span>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
