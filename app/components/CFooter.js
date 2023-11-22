"use client";

import { Layout, Space } from "antd";
const { Footer } = Layout;

const footerStyle = {
  textAlign: "center",
  color: "#000",
  backgroundColor: "#f2f2f2",
};

export default function CFooter() {
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
          <Footer style={footerStyle}>
            Short Link ©2023 Created by Shohan Hossain Ean
          </Footer>          
        </Layout>
      </Space>
    </>
  );
}
