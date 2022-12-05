import { Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome"
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"
import variables from '../variables.module.scss';

const InitiativeButtonCard = props => <div>
    <h4 className="section-title">
        LAUNCH NEW INITIATIVE
    </h4>
    <Card body className="main-buttons">
        <Row className="g-3 row-cols-xxl-4 row-cols-sm-2 row-cols-1">
            <Col>
                <button className="mb-2">
                    <div className="fa-layers fa-fw">
                        <I icon={solid("circle")} size="lg" color="#62C8E2"/>
                        <I icon={solid("desktop")} color="white" size="xs" />
                    </div>
                    <span>Fill Open Roles</span>
                </button>
                <ul className="text-secondary">
                    <li>Drive applications</li>
                    <li>Collect resumes</li>
                    <li>Post a job</li>
                </ul>
            </Col>
            <Col>
                <button className="mb-2">
                    <div className="fa-layers fa-fw">
                        <I icon={solid("circle")} size="lg" color="#569ACD"/>
                        <I icon={solid("calendar")} size="xs" color="white" />
                    </div>
                    <span>Setup an Event</span>
                </button>
                <ul className="text-secondary">
                    <li>Market an event</li>
                    <li>Drive qualified attendees</li>
                    <li>Track check-ins</li>
                </ul>
            </Col>
            <Col>
                <button className="mb-2">
                    <div className="fa-layers fa-fw">
                        <I icon={solid("circle")} size="lg" color={variables.darkBlue}/>
                        <I icon={solid("clipboard")} size="xs" color="white" />
                    </div>
                    <span>Schedule Interviews</span>
                </button>
                <ul className="text-secondary">
                    <li>Direct student sign-ups to interview schedules (on-campus or virtual)</li>
                </ul>
            </Col>
            <Col>
                <button className="mb-2">
                    <div className="fa-layers fa-fw">
                        <I icon={solid("circle")} size="lg" color="#15958E"/>
                        <I icon={solid("seedling")} size="xs" color="white" />
                    </div>
                        <span>Brand Building</span>
                </button>
                <ul className="text-secondary">
                    <li>Send brand messaging</li>
                    <li>Manage company profile</li>
                </ul>
            </Col>
        </Row>
    </Card>
</div>

export default InitiativeButtonCard;