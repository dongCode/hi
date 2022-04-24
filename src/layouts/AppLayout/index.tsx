import { Layout } from 'bellejs';
import { Content, Header } from 'bellejs/lib/layout/layout';
import Sider from 'bellejs/lib/layout/Sider';
import { Outlet } from 'react-router-dom';
const AppLayout = () => {
  return (
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>sider</Sider>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
