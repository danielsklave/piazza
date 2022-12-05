import { Image, Row, Col } from "react-bootstrap"

const PerformanceStat = ({ title, value, graphNr }) => <>
    <Row className="bg-light g-1 rounded py-2 px-2 align-items-center preformance-stat">
        <Col className="text-center">
            <Image src={`/graph-${graphNr}.png`} fluid />
        </Col>
        <Col className="text-end">
            <h1>{value}</h1>
        </Col>
        <Col className="performance-name">
            {title}
        </Col>
    </Row>
</>

export default PerformanceStat;