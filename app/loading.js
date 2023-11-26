import { Row, Col, Card } from "antd";

export default function Loading() {
  return (
    <>
      <Row gutter={16} justify="center">
        <Col xs={24} xl={12}>
          <Card title="Please wait" bordered={false}>
            Loading.......
          </Card>
        </Col>
      </Row>
    </>
  );
}
