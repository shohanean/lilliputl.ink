"use client";
import { Flex, Input, Card, Col, Row } from "antd";
const { Search } = Input;

export default function Home() {
  return (
    <>
      <Row gutter={16} justify="center">
        <Col xs={24} xl={12}>
          <Card title="Paste the URL to be shortened" bordered={false}>
            <Search
              style={{ paddingBottom: "25px" }}
              placeholder="Enter the link here"
              enterButton="Shorten Link"
              size="large"
            />
            ShortURL is a free tool to shorten URLs and generate short links URL
            shortener allows to create a shortened link making it easy to share
          </Card>
        </Col>
      </Row>
      <Row gutter={16} justify="center">
        <Col xs={24} xl={12} style={{ paddingTop: "25px" }}>
          <Card title="Want More? Try Premium Features!" bordered={false}>
            Custom short links, powerful dashboard, detailed analytics, API, UTM
            builder, QR codes, browser extension, app integrations and support
          </Card>
        </Col>
      </Row>
    </>
  );
}
