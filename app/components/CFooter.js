"use client";

import { Layout, Space } from "antd";
import { HeartTwoTone } from '@ant-design/icons';
const { Footer } = Layout;

const footerStyle = {
  textAlign: "center",
  color: "#000",
  backgroundColor: "#f5f5f5",
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
            ©2023 Made with <HeartTwoTone twoToneColor="#eb2f96" /> by Shohan Hossain Ean
          </Footer>          
        </Layout>
      </Space>
    </>
  );
}
