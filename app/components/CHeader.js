"use client";

import Link from "next/link";
import { Divider, Typography, Card, Col, Row, Layout, Space } from "antd";
const { Text } = Typography;
import { usePathname } from 'next/navigation'
import { CaretRightOutlined } from '@ant-design/icons';

export default function CHeader() {
  const pathname = usePathname()
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
          <Row gutter={16} justify="center">
            <Col xs={24} xl={12} style={{ paddingTop: "15px", paddingBottom: "25px", textAlign: "center" }}>
              <Text keyboard>Lilliput Your Link = lilliputl.ink</Text>
            </Col>
          </Row>
          <Row gutter={16} justify="center">
            <Col xs={24} xl={12} style={{ paddingBottom: "25px" }}>
              <Card bordered={false} style={{ textAlign: "center" }}>
                <Link type="link" href="/">
                  <Text keyboard={pathname === '/' ? true : false}>Home</Text>
                </Link>
                <Divider type="vertical" />
                <Link type="link" href="/about">
                  <Text keyboard={ pathname === '/about' ? true:false}>About</Text>
                </Link>
                <Divider type="vertical" />
                <Link type="link" href="/contact">
                  <Text keyboard={pathname === '/contact' ? true : false}>Contact</Text>
                </Link>
              </Card>
            </Col>
          </Row>
        </Layout>
      </Space>
    </>
  );
}
