"use client";
import { Card, Col, Row, Button, Form, Input } from "antd";

const { TextArea } = Input;

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function contact() {
  return (
    <>
      <Row gutter={16} justify="center">
        <Col xs={24} xl={12}>
          <Card title="Want to contact us?" bordered={false}>
            <Form
              name="basic"
              labelCol={{
                span: 6,
              }}
              wrapperCol={{
                span: 18,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Email Address"
                name="email_address"
                rules={[
                  {
                    required: true,
                    message: "Please input your Email Address!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Message"
                name="message"
                rules={[
                  {
                    required: true,
                    message: "Please input your Message!",
                  },
                ]}
              >
                <TextArea showCount maxLength={250} />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 6,
                  span: 18,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
}
