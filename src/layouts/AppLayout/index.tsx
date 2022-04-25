import './index.less';
import { Layout, Menu } from 'bellejs';
import { Content, Header,Row } from 'bellejs/lib/layout/layout';
import Sider from 'bellejs/lib/layout/Sider';
import { Outlet } from 'react-router-dom';
import MenuItem from 'bellejs/lib/menu/MenuItem';
const AppLayout = () => {
  return (
    <Layout className="g-h100 app-layout">
      <header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} />
      </header>
      <Layout className="g-row">
        <Sider theme="light" collapsible>
          sider
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" />
        </Sider>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
