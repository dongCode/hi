import { Row, Col, Button, Form, Input } from 'bellejs';
import { UserOutlined, LockOutlined } from '@/utils/icons';
import { useEffect } from 'react';
import './login.css';

export const Login = (props: any) => {
  const [loginForm] = Form.useForm();
  useEffect(() => {
    initPage();
  }, []);

  const initPage = async () => {};

  const onCode = async () => {
    try {
    } catch (error) {
      console.log('验证码错误', error);
    }
  };
  const handleLogin = async (values: any) => {};
  return (
    <div className="login-page">
      <div className="login-title">
        <img alt="login-logo" height="30px" />
        <div className="login-title-text">API服务治理平台</div>
      </div>
      <div className="login-box">
        <Row>
          <Col span={12}>
            {/* <img src={bannerImg} alt="login bg" /> */}
          </Col>
          <Col span={12}>
            <div className="user-info-box user-info-box-usually">
              <h2 className="user-info-title">账户登录</h2>
              <Form
                labelStyle={{}}
                form={loginForm}
                onFinish={handleLogin}
              >
                <Form.Item
                  name="username"
                  rules={[
                    { required: true, message: '请输入用户名!' },
                  ]}
                >
                  <Input
                    size="large"
                    prefix={<UserOutlined />}
                    placeholder="用户名"
                    autoComplete="off"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: '请输入密码!' }]}
                >
                  <Input.Password
                    size="large"
                    prefix={<LockOutlined />}
                    placeholder="密码"
                  />
                </Form.Item>
                <Form.Item
                  name="validCode"
                  noStyle
                  rules={[
                    { required: true, message: '请输入验证码' },
                  ]}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <div className="g-fl code-input">
                      <Input size="large" placeholder="验证码" />
                    </div>
                    <div className="g-fl code-img" onClick={onCode}>
                      验证码
                    </div>
                  </div>
                </Form.Item>
                <div
                  style={{
                    height: '16px',
                    lineHeight: '16px',
                    color: 'red',
                  }}
                >
                  验证码 登陆报错
                </div>
                <Form.Item noStyle>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    style={{ marginTop: '0' }}
                  >
                    登录
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
      <div className="copy-right">
        © 2000-2022 金蝶天燕云计算股份有限公司版权所有
      </div>
    </div>
  );
};
