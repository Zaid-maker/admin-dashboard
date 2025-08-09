import React from "react";
import { Layout as AntdLayout, Menu } from "antd";
import { DashboardOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = AntdLayout;

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <AntdLayout style={{ minHeight: "100vh" }}>
      <Sider>
        <div style={{ height: "32px", margin: "16px", background: "rgba(255, 255, 255, 0.2)" }} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link to="/">Dashboard</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <AntdLayout>
        <Header style={{ padding: 0, background: "#fff" }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, minHeight: 360, background: "#fff" }}>
            {children}
          </div>
        </Content>
      </AntdLayout>
    </AntdLayout>
  );
};
