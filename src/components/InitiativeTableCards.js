import { Card, Nav, Stack } from "react-bootstrap";
import InitiativeTable from "./InitiativeTable.js";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome"
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"
import { tableData1, tableData2 } from "../data.js";

const InitiativeTableCards = props => <div className="initiatives">
    {/* TItle with tabs */}
    <div className="d-flex align-items-center gap-2 mb-3">
        <h4 className="section-title mb-0">MY INITIATIVES</h4> 
        <Nav defaultActiveKey="mine" className="text-secondary">
            <Nav.Item>
                <Nav.Link eventKey="mine">Mine</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="all">All</Nav.Link>
            </Nav.Item>
        </Nav>
    </div>
    {/* Table cards */}
    <Stack gap={4}>
        <Card body>
            <Card.Title className="fw-normal">
                <div className="fa-layers fa-fw">
                    <I icon={solid("circle")} size="lg" color="#569ACD"/>
                    <I icon={solid("calendar")} size="xs" color="white" />
                </div>
                EVENTS
            </Card.Title>
            <InitiativeTable data={tableData1} />
            <Card.Link href="#" className="text-secondary">
                See all
                <I icon={solid("chevron-right")} size="xs" className="ms-1" />
            </Card.Link>
        </Card>
        <Card body>
            <Card.Title className="fw-normal">
                <div className="fa-layers fa-fw">
                    <I icon={solid("circle")} size="lg" color="#62C8E2"/>
                    <I icon={solid("desktop")} size="xs" color="white"/>
                </div>
                FILL OPEN ROLES
            </Card.Title>
            <InitiativeTable data={tableData2} />
            <Card.Link href="#" className="text-secondary">
                See all
                <I icon={solid("chevron-right")} size="xs" className="ms-1" />
            </Card.Link>
        </Card>
    </Stack>
</div>

export default InitiativeTableCards;