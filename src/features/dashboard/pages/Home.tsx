import { Typography, Row, Col, Card } from 'antd';

const { Title } = Typography;

export const Home = () => {
  return (
    <div>
      <Title level={2}>Dashboard</Title>
      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Card title="Active Users" bordered={false}>
            <p>1,234</p>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Card title="Revenue" bordered={false}>
            <p>$56,789</p>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Card title="New Orders" bordered={false}>
            <p>456</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
