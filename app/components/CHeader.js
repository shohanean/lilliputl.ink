"use client";

import { Typography, Card, Col, Row, Flex, Layout, Space } from "antd";
const { Header } = Layout;
import Link from "next/link";

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#f2f2f2",
};

export default function CHeader() {
  return (
    <>
      <Space
        direction="vertical"
        style={{
          width: "100%",
        }}
        size={[0, 48]}
      >
        <Layout>
          <Row gutter={16}>
            <Col span={12} offset={6} style={{ paddingBottom: "25px" }}>
              <Card bordered={false} style={{ textAlign: "center" }}>
                Short URL
              </Card>
            </Col>
          </Row>
          {/* <Header style={headerStyle}>
            <Flex gap="small" wrap="wrap">
              <Link type="link" href="/">
                Home
              </Link>
              <Link type="link" href="/about">
                About
              </Link>
              <Link type="link" href="/contact">
                Contact
              </Link>
            </Flex>
          </Header> */}
        </Layout>
      </Space>
    </>
  );
}
