import { Card, Col, Row } from "antd";

export default function contact() {
    return (
        <>
            <Row gutter={16} justify="center">
                <Col xs={24} xl={12}>
                    <Card title="Want to contact us?" bordered={false}>
                        Call 01834833973
                    </Card>
                </Col>
            </Row>  
        </>
    );
}
