"use client";

import { Layout, Space } from "antd";
const { Footer } = Layout;

const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
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
            Ant Design ©2023 Created by Ant UED
          </Footer>          
        </Layout>
      </Space>
    </>
  );
}
