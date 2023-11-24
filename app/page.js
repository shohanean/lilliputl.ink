"use client";
import { Typography, Collapse, Input, Card, Col, Row } from "antd";
import {
  LikeTwoTone,
  InsuranceTwoTone,
  BugTwoTone,
  CarTwoTone,
  ContactsTwoTone,
  GiftTwoTone,
} from "@ant-design/icons";
const { Title, Text } = Typography;
const { Search } = Input;

export default async function Home() {
  const items = await fetch(`http://localhost:3000/api/faqs`, {
    cache: "no-store",
  }).then((res) => res.json());

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
      <Row gutter={16} justify="center">
        <Col xs={24} xl={12}>
          <Title level={3}>Simple and fast URL shortener!</Title>
          <Text>
            ShortURL allows to shorten long links from Instagram, Facebook,
            YouTube, Twitter, Linked In, WhatsApp, TikTok, blogs and sites. Just
            paste the long URL and click the Shorten URL button. On the next
            page, copy the shortened URL and share it on sites, chat and emails.
            After shortening the URL, check how many clicks it received.
          </Text>
        </Col>
      </Row>
      <Row gutter={16} justify="center">
        <Col xs={24} xl={12}>
          <Title level={3}>Shorten, share and track</Title>
          <Text>
            Your shortened URLs can be used in publications, documents,
            advertisements, blogs, forums, instant messages, and other
            locations. Track statistics for your business and projects by
            monitoring the number of hits from your URL with our click counter.
          </Text>
        </Col>
      </Row>
      <Row gutter={16} justify="center">
        <Col xs={24} xl={12}>
          <Title level={3}>FAQ</Title>
          <Text>
            <Collapse items={items} defaultActiveKey={["1"]} />
          </Text>
        </Col>
      </Row>
      <Row gutter={16} justify="center" style={{ paddingTop: "45px" }}>
        <Col xs={24} xl={6} direction="vertical" align="center">
          <LikeTwoTone style={{ fontSize: "500%" }} />
          <Title level={3}>Easy</Title>
          <Text>
            Your shortened URLs can be used in publications, documents,
            advertisements, blogs
          </Text>
        </Col>
        <Col xs={24} xl={6} direction="vertical" align="center">
          <InsuranceTwoTone style={{ fontSize: "500%" }} />
          <Title level={3}>Lang</Title>
          <Text>
            Your shortened URLs can be used in publications, documents,
            advertisements, blogs
          </Text>
        </Col>
        <Col xs={24} xl={6} direction="vertical" align="center">
          <BugTwoTone style={{ fontSize: "500%" }} />
          <Title level={3}>Bug</Title>
          <Text>
            Your shortened URLs can be used in publications, documents,
            advertisements, blogs
          </Text>
        </Col>
      </Row>
      <Row gutter={16} justify="center" style={{ paddingTop: "45px" }}>
        <Col xs={24} xl={6} direction="vertical" align="center">
          <CarTwoTone style={{ fontSize: "500%" }} />
          <Title level={3}>Drive</Title>
          <Text>
            Your shortened URLs can be used in publications, documents,
            advertisements, blogs
          </Text>
        </Col>
        <Col xs={24} xl={6} direction="vertical" align="center">
          <ContactsTwoTone style={{ fontSize: "500%" }} />
          <Title level={3}>Book</Title>
          <Text>
            Your shortened URLs can be used in publications, documents,
            advertisements, blogs
          </Text>
        </Col>
        <Col xs={24} xl={6} direction="vertical" align="center">
          <GiftTwoTone style={{ fontSize: "500%" }} />
          <Title level={3}>Gift</Title>
          <Text>
            Your shortened URLs can be used in publications, documents,
            advertisements, blogs
          </Text>
        </Col>
      </Row>
    </>
  );
}
