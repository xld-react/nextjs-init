import { Layout, Typography } from "antd";

const Footer: React.FC = () => {
  return (
    <Layout.Footer>
      <Typography.Title level={4} style={{ textAlign: "center" }}>
        版权都有 @ React 旅游网
      </Typography.Title>
    </Layout.Footer>
  );
};

export default Footer;
