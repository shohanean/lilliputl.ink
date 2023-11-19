"use client";

import { Button, Flex, Layout, Space, Menu } from "antd";
const { Header } = Layout;
import Link from "next/link";

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};

export default function CHeader() {
  const navarray = [
    {
      title: "Home",
    },
    {
      title: "About",
    },
    {
      title: "Contact",
    },
    {
      title: "Contact",
    },
    {
      title: "Contact",
    },
    {
      title: "Contact",
    },
    {
      title: "Contact",
    },
    {
      title: "Contact",
    },
  ];
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
          <Header style={{ display: "flex", alignItems: "center" }}>
            <div className="demo-logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["0"]}
              items={navarray.map((abc, index) => {
                const key = index;
                return {
                  key,
                  label: `${abc.title}`,
                };
              })}
            />
          </Header>
          <Header style={headerStyle}>
            <Flex gap="small" wrap="wrap">
              <Link type="link" href="/">Home</Link>
              <Link type="link" href="/about">About</Link>
              <Link type="link" href="/contact">Contact</Link>
            </Flex>
          </Header>
        </Layout>
      </Space>
    </>
  );
}
