"use client";
const mongoose = require("mongoose");
import { Card, Col, Row, Button, Checkbox, Form, Input } from "antd";
import Contact from "../api/model/contacts";

const { TextArea } = Input;

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function contact() {
  const connection =
    "mongodb+srv://hossainshohan1:n3E33d0p1IMVBkZc@cluster0.puyt7ir.mongodb.net/?retryWrites=true&w=majority";
  const onFinish = (values) => {
    console.log("GOOD:", values);
    mongoose

      .connect(connection, {
        useNewUrlParser: true,

        useUnifiedTopology: true,

        useFindAndModify: false,
      })

      .then(() => console.log("Database Connected Successfully"))

      .catch((err) => console.log(err));
  };

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
