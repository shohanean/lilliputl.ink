import { Card, Col, Row, Divider } from "antd";

export default function about() {
  return (
    <>
      <Row gutter={16} justify="center">
        <Col xs={24} xl={12}>
          <Card title="About Us" bordered={false}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
              probare, quae sunt a te dicta? Refert tamen, quo modo.
            </p>
            <Divider>Text</Divider>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
              probare, quae sunt a te dicta? Refert tamen, quo modo.
            </p>
            <Divider orientation="left">Left Text</Divider>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
              probare, quae sunt a te dicta? Refert tamen, quo modo.
            </p>
            <Divider orientation="right">Right Text</Divider>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
              probare, quae sunt a te dicta? Refert tamen, quo modo.
            </p>
            <Divider orientation="left" orientationMargin="0">
              Left Text with 0 orientationMargin
            </Divider>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
              probare, quae sunt a te dicta? Refert tamen, quo modo.
            </p>
            <Divider orientation="right" orientationMargin={50}>
              Right Text with 50px orientationMargin
            </Divider>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
              probare, quae sunt a te dicta? Refert tamen, quo modo.
            </p>
            Reviews, client logos, case studies, and results bring consistency to your About Us page. It is what really proves what you are saying is real and the impact you can bring to future clients.
            With these components in mind, you will have a framework from which to build an engaging and unique About Us page.
            However, if you are looking for some inspiration, the 25 examples below will guide your creative process.
          </Card>
        </Col>
      </Row>
    </>
  );
}
