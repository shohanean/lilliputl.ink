import { Card, Col, Row } from "antd";

export default function about() {
  return (
    <>
      <Row gutter={16} justify="center">
        <Col xs={24} xl={12}>
          <Card title="About Us" bordered={false}>
            Reviews, client logos, case studies, and results bring consistency to your About Us page. It is what really proves what you are saying is real and the impact you can bring to future clients.
            With these components in mind, you will have a framework from which to build an engaging and unique About Us page.
            However, if you are looking for some inspiration, the 25 examples below will guide your creative process.
          </Card>
        </Col>
      </Row>
    </>
  );
}
